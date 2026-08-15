# Backend Basics

## 1. Backend Fundamentals

A backend is the server-side part of an application responsible for handling requests, applying business logic, interacting with databases, enforcing security, and returning responses to the client.

### Client–Server Architecture

A typical web application follows:

```text
Frontend
   ↓
HTTP Request
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
HTTP Response
   ↓
Frontend
```

For example, when a React application requests a user's profile:

```text
React
  ↓
GET /api/users/123
  ↓
Node.js + Express
  ↓
Database
  ↓
User data
  ↓
JSON response
```

The frontend should generally not directly control or access the database. The backend acts as the intermediary and enforces business rules and security.

---

# 2. HTTP

HTTP (Hypertext Transfer Protocol) is the protocol used for communication between clients and servers.

An HTTP request can contain:

* Method
* URL
* Headers
* Body

Example:

```http
POST /api/users
Content-Type: application/json

{
  "name": "Adarsh",
  "email": "adarsh@example.com"
}
```

The server returns an HTTP response containing:

* Status code
* Headers
* Response body

Example:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 123,
  "name": "Adarsh"
}
```

---

# 3. HTTP Methods

| Method | Purpose                                   |
| ------ | ----------------------------------------- |
| GET    | Retrieve data                             |
| POST   | Create a resource or perform an operation |
| PUT    | Replace/update a resource                 |
| PATCH  | Partially update a resource               |
| DELETE | Delete a resource                         |

### Idempotency

An operation is idempotent if making the same request multiple times produces the same intended final state.

Generally:

* GET → Idempotent
* PUT → Idempotent
* DELETE → Idempotent
* POST → Generally not idempotent
* PATCH → Depends on implementation

Do not assume that idempotency simply means "the response is always identical." It primarily concerns the effect on the resource state.

---

# 4. URL Parameters

Consider:

```text
GET /products/123?category=mobile&page=2
```

## Path Parameter

```text
/products/123
          ↑
       product ID
```

In Express:

```javascript
app.get('/products/:id', (req, res) => {
    console.log(req.params.id);
});
```

Path parameters are commonly used to identify a specific resource.

Examples:

```text
/users/25
/products/123
/orders/789
```

## Query Parameters

```text
/products/123?category=mobile&page=2
             └─────────────────────┘
```

Here:

```text
category = mobile
page = 2
```

In Express:

```javascript
req.query.category
req.query.page
```

Query parameters are commonly used for:

* Filtering
* Searching
* Sorting
* Pagination
* Optional request configuration

### Simple Interview Rule

> **Path parameter → Which resource?**
> **Query parameter → How do I want the resource?**

Do not claim that path parameters are always mandatory and query parameters are always optional. Their actual requirement depends on the API design.

---

# 5. HTTP Status Codes

## 2xx — Successful Request

```text
200 OK
201 Created
204 No Content
```

### Common usage

```text
GET successful       → 200
POST creates resource → 201
Successful operation with no response body → 204
```

---

## 4xx — Client/Request Problem

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
429 Too Many Requests
```

### 401 vs 403

**401 Unauthorized**

The request is not successfully authenticated.

Examples:

* Missing credentials
* Invalid credentials
* Expired/invalid JWT

**403 Forbidden**

The client is authenticated but does not have permission to perform the requested operation.

Example:

```text
Normal user → /admin
             ↓
           403
```

Interview answer:

> 401 means authentication failed or is missing; 403 means authentication may be successful, but authorization is insufficient.

---

## 5xx — Server-Side Problem

Common examples:

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
```

These generally indicate that the server or an upstream service could not successfully fulfill the request.

---

# 6. REST API

REST is an architectural style commonly used for designing HTTP APIs around resources.

A resource-oriented API might look like:

```text
GET    /users
GET    /users/42
POST   /users
PATCH  /users/42
DELETE /users/42
```

The URL represents the resource, while the HTTP method represents the intended operation.

Avoid unnecessarily action-based endpoints such as:

```text
POST /createUser
POST /deleteUser
```

when a resource-oriented design is appropriate.

---

# 7. Statelessness

A stateless API does not require the server to remember the client's previous request in order to understand and process the current request.

For example:

```http
GET /profile
Authorization: Bearer abc123
```

and later:

```http
GET /orders
Authorization: Bearer abc123
```

Each request contains the information required for authentication and processing.

### Important clarification

Stateless does **not** mean:

> "The server stores nothing."

The server can still use:

* Databases
* Caches
* Logs
* Persistent storage

Statelessness means that the processing of the current request should not depend on hidden state from a previous request.

### Interview definition

> A stateless API processes each request independently rather than relying on server-side conversational state from previous requests.

---

# 8. HTTP Request Lifecycle

A simplified request lifecycle is:

```text
Browser / Client
      ↓
DNS
      ↓
TCP/TLS connection
      ↓
HTTP Request
      ↓
Server
      ↓
Express
      ↓
Middleware
      ↓
Route
      ↓
Controller
      ↓
Service / Business Logic
      ↓
Database
      ↓
Response
      ↓
Client
```

For example:

```http
POST /users
```

with:

```json
{
  "email": "adarsh@example.com"
}
```

The backend may perform:

1. Receive the HTTP request.
2. Parse the JSON body.
3. Run middleware.
4. Authenticate the request if required.
5. Match the route.
6. Validate the input.
7. Execute business logic.
8. Interact with the database.
9. Generate an HTTP response.
10. Send the response back to the client.

A successful creation could return:

```http
201 Created
```

with:

```json
{
  "id": 123,
  "email": "adarsh@example.com"
}
```

---

# 9. Key Interview Distinctions

### Authentication vs Authorization

```text
Authentication → Who are you?
Authorization  → What are you allowed to do?
```

### Path vs Query

```text
Path parameter → identifies a resource
Query parameter → modifies/configures the request
```

### 401 vs 403

```text
401 → Authentication problem
403 → Authorization problem
```

### Statelessness

```text
Current request should be independently processable.
```

### REST

```text
Resource-oriented API design using HTTP semantics.
```

---

# 10. What You Must Be Able to Explain

For an interview, you should be able to answer these without memorization:

1. What is the difference between frontend and backend?
2. What happens when a frontend sends an HTTP request?
3. Explain GET, POST, PUT, PATCH, and DELETE.
4. What is idempotency?
5. Difference between path and query parameters.
6. Difference between 401 and 403.
7. What does REST mean?
8. What does statelessness mean?
9. Does stateless mean the server stores nothing?
10. Walk through a POST request from browser to database and back.

---


