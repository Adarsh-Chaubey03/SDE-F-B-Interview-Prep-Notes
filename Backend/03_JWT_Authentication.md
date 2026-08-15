# 5. Authentication & JWT

This is the next planned section. It is particularly important for a **frontend interview** because authentication is where frontend and backend responsibilities meet.

---

## 1. Authentication vs Authorization

These two terms must be clearly separated.

### Authentication

Answers:

> **Who are you?**

Examples:

* Username/password
* JWT
* Session cookie
* OAuth
* OTP

### Authorization

Answers:

> **What are you allowed to do?**

Example:

```text
User logs in successfully
        ↓
Authentication succeeds
        ↓
User role = "user"
        ↓
User requests /admin
        ↓
Authorization fails
        ↓
403 Forbidden
```

Simple rule:

```text
Authentication → Identity
Authorization  → Permissions
```

---

# 2. What is JWT?

JWT stands for **JSON Web Token**.

It is a compact token format commonly used for transmitting claims between parties.

A JWT has three parts:

```text
HEADER.PAYLOAD.SIGNATURE
```

For example:

```text
eyJhbGciOiJIUzI1NiJ9.
eyJ1c2VySWQiOjEyMywicm9sZSI6InVzZXIifQ.
signature
```

These three parts are Base64URL-encoded and separated by dots.

---

# 3. JWT Header

The header usually contains information about the token type and signing algorithm.

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

`alg` specifies the signing algorithm.

`typ` indicates the token type.

---

# 4. JWT Payload

The payload contains **claims**.

Example:

```json
{
  "userId": 123,
  "role": "user",
  "iat": 1750000000,
  "exp": 1750003600
}
```

Common claims include:

```text
sub → subject
iat → issued at
exp → expiration time
iss → issuer
aud → audience
```

You can also have application-specific claims such as:

```text
userId
role
permissions
```

### Critical security point

**JWT payload is not encrypted by default.**

Anyone who possesses the token can decode the header and payload.

Therefore:

> **Never put sensitive secrets such as passwords or private keys inside a JWT payload.**

---

# 5. JWT Signature

The signature allows the server to verify that the token has not been tampered with.

Conceptually:

```text
Signature =
Sign(
    Base64URL(header) + "." + Base64URL(payload),
    secret/private key
)
```

When the server receives the token, it verifies the signature.

If someone changes:

```json
{
  "role": "user"
}
```

to:

```json
{
  "role": "admin"
}
```

the signature will no longer match.

The server rejects the modified token.

---

# 6. Is JWT Encrypted?

Normally, **no**.

JWT used for standard signed tokens is generally **signed, not encrypted**.

Therefore:

```text
Signing → Integrity / authenticity
Encryption → Confidentiality
```

JWT signatures help establish that the token hasn't been modified and was issued by a party possessing the signing key.

They do **not** hide the payload.

---

# 7. Typical JWT Authentication Flow

A common flow is:

```text
Client
  ↓
POST /login
  ↓
Server verifies credentials
  ↓
Server generates JWT
  ↓
Client receives token
  ↓
Client sends token with future requests
  ↓
Server verifies JWT
  ↓
Request authorized/authenticated
```

For example:

```http
Authorization: Bearer <JWT>
```

---

# 8. JWT Authentication Middleware

A protected Express endpoint might use middleware:

```javascript
app.get(
    "/profile",
    authenticate,
    profileController
);
```

The authentication middleware:

```text
Request
   ↓
Extract JWT
   ↓
Verify JWT
   ↓
Valid?
  ↙   ↘
No     Yes
↓       ↓
401    req.user
        ↓
      next()
        ↓
   Controller
```

Example:

```javascript
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}
```

The controller can then access:

```javascript
req.user
```

---

# 9. Access Token vs Refresh Token

This is a very common interview topic.

## Access Token

Used to access protected resources.

Example:

```text
Authorization: Bearer <access-token>
```

It is generally short-lived.

Example:

```text
Expires in: 15 minutes
```

The short lifetime limits the damage if the token is stolen.

---

## Refresh Token

Used to obtain a new access token after the access token expires.

Conceptually:

```text
Access Token
     ↓
Expires
     ↓
Refresh Token
     ↓
Request new Access Token
```

A refresh token is generally longer-lived and therefore needs stronger protection.

---

# 10. Why Have Two Tokens?

Suppose the access token lasts for:

```text
7 days
```

If an attacker steals it, they potentially have access for seven days.

Instead:

```text
Access Token → 15 minutes
Refresh Token → longer-lived
```

The access token limits exposure while the refresh token allows the legitimate client to obtain a new access token.

---

# 11. Token Storage

This is particularly important for frontend interviews.

Common possibilities include:

```text
localStorage
sessionStorage
HttpOnly cookies
```

### localStorage

JavaScript can access it.

Therefore, if an attacker successfully executes malicious JavaScript through an XSS vulnerability, the token may be accessible.

### HttpOnly Cookie

An `HttpOnly` cookie cannot be read directly by JavaScript.

This can reduce token exposure to JavaScript-based theft.

But cookies introduce other considerations, particularly **CSRF**, which we'll cover shortly.

There is no universal statement such as:

> "Cookies are always secure."

Security depends on configuration and the overall architecture.

---

# 12. Cookie Security Attributes

Important cookie attributes include:

### HttpOnly

Prevents JavaScript from reading the cookie.

```text
HttpOnly
```

### Secure

Cookie is sent only over HTTPS.

```text
Secure
```

### SameSite

Controls cross-site cookie sending behavior.

Common values:

```text
Strict
Lax
None
```

For:

```text
SameSite=None
```

the cookie generally also needs:

```text
Secure
```

---

# 13. JWT Logout

A common misconception is:

> "JWT logout automatically invalidates the JWT."

A purely stateless JWT does not inherently have server-side revocation.

If the client simply deletes its token:

```text
Client deletes JWT
```

the server may still consider the token valid until it expires.

Possible strategies include:

* Short-lived access tokens
* Refresh-token rotation
* Server-side refresh-token revocation
* Token denylist/blocklist when appropriate
* Session-based authentication instead of JWT

---

# 14. Refresh Token Rotation

A stronger refresh-token design can rotate refresh tokens.

Conceptually:

```text
Refresh Token A
      ↓
New access token
      +
Refresh Token B
      ↓
Invalidate A
```

If an old refresh token is reused, the server can detect suspicious behavior and revoke the token family/session.

The exact implementation depends on the authentication architecture.

---

# 15. CORS

CORS stands for **Cross-Origin Resource Sharing**.

It controls whether a browser is allowed to make certain cross-origin requests to a server.

Example:

```text
Frontend:
https://app.example.com

Backend:
https://api.example.com
```

These are different origins because the origins differ.

The backend can respond with CORS headers specifying which origins are permitted.

Example:

```http
Access-Control-Allow-Origin: https://app.example.com
```

### Important distinction

CORS is primarily a **browser security mechanism**.

It does not mean:

> "The backend cannot receive requests from other origins."

It controls whether browsers permit frontend JavaScript to make/read certain cross-origin requests.

---

# 16. CSRF

CSRF stands for **Cross-Site Request Forgery**.

It occurs when an attacker causes a user's browser to send an unwanted authenticated request to a website where the user is already authenticated.

It is particularly relevant when authentication credentials are automatically attached to requests, such as cookies.

Common defenses include:

* SameSite cookies
* CSRF tokens
* Origin/Referer validation where appropriate
* Proper cookie configuration

---

# 17. XSS

XSS stands for **Cross-Site Scripting**.

An attacker manages to execute malicious JavaScript in a user's browser within the context of a trusted website.

Potential consequences include:

* Reading accessible browser data
* Performing actions as the user
* Modifying page content
* Stealing tokens that are accessible to JavaScript

### Important JWT connection

If an access token is stored somewhere JavaScript can read, such as `localStorage`, an XSS vulnerability can potentially expose that token.

An `HttpOnly` cookie prevents JavaScript from directly reading that cookie, although it does **not** make XSS harmless.

---

# 18. Authentication Request Flow

A more complete architecture looks like:

```text
                 Login
                   ↓
              Credentials
                   ↓
               Backend
                   ↓
          Verify credentials
                   ↓
          Access + Refresh Token
                   ↓
                Client
                   ↓
       Protected API Request
                   ↓
         Authentication Middleware
                   ↓
            Verify Access Token
                   ↓
          Authorization Check
                   ↓
              Controller
                   ↓
               Service
                   ↓
              Database
```

---

# 19. Authentication vs Authorization vs CORS vs CSRF vs XSS

These concepts are often confused.

| Concept        | Main purpose                                |
| -------------- | ------------------------------------------- |
| Authentication | Establish user identity                     |
| Authorization  | Determine permissions                       |
| CORS           | Browser control over cross-origin requests  |
| CSRF           | Prevent unwanted authenticated requests     |
| XSS            | Prevent/mitigate malicious script execution |

Remember:

```text
Authentication → Who are you?
Authorization  → What can you do?
CORS           → Can browser JS make/read this cross-origin request?
CSRF           → Can an attacker trick the browser into making an authenticated request?
XSS            → Can attacker execute malicious JavaScript in your application's context?
```

---

# 20. Interview-Level JWT Questions

You should be able to answer:

1. What is JWT?
2. What are the three parts of a JWT?
3. What is stored in the header?
4. What is stored in the payload?
5. Is the JWT payload encrypted?
6. What does the signature provide?
7. How does a server verify a JWT?
8. What happens if someone modifies the payload?
9. Why use access and refresh tokens?
10. Where can tokens be stored?
11. Why can `localStorage` be risky for tokens?
12. What does `HttpOnly` do?
13. What does `Secure` do?
14. What does `SameSite` do?
15. What is CORS?
16. What is CSRF?
17. What is XSS?
18. How are CSRF and XSS different?
19. How would you implement JWT authentication middleware in Express?
20. How would you handle logout with JWT?
21. What is refresh-token rotation?
22. What happens if an access token is stolen?
23. Can a JWT be revoked automatically?
24. What is the difference between authentication and authorization?
