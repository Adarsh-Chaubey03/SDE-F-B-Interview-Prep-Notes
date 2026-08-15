# Production Backend Architecture

## 1. Layered Architecture

A clean Node.js/Express backend commonly separates responsibilities:

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository / Database
```

### Controller

Handles HTTP-specific concerns:

* `req`
* `res`
* Status codes
* Response formatting

### Service

Contains **business logic** and application rules.

### Repository / Data Access Layer

Handles database-specific operations.

This separation improves maintainability, testing, and organization.

---

# 2. Centralized Error Handling

Express can use error-handling middleware:

```javascript
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Internal Server Error"
    });
});
```

Common responses:

```text
400 → Invalid request
401 → Authentication problem
403 → Authorization problem
404 → Resource not found
500 → Unexpected server error
```

Do not expose sensitive internal errors to clients.

---

# 3. Environment Variables

Secrets and environment-specific configuration should not be hardcoded.

```javascript
const jwtSecret = process.env.JWT_SECRET;
const databaseUrl = process.env.DATABASE_URL;
```

Typical environment variables:

* Database credentials/URL
* JWT secrets
* API keys
* Port
* Environment configuration

Secrets should not be committed to source control.

---

# 4. Logging

Production systems need structured logs for debugging and monitoring.

Useful information includes:

* Timestamp
* HTTP method
* Endpoint
* Status code
* Response time
* Error details
* Request/trace ID

Never log sensitive information such as passwords, tokens, or private keys.

---

# 5. Health Checks

A backend can expose:

```text
GET /health
```

Example:

```json
{
  "status": "ok"
}
```

Health checks allow load balancers and deployment systems to determine whether a server is healthy.

They may also check critical dependencies such as the database.

---

# 6. Graceful Shutdown

During deployment or restart, a server should avoid abruptly terminating active requests.

A graceful shutdown can:

```text
Stop accepting new requests
        ↓
Finish active requests
        ↓
Close database connections
        ↓
Release resources
        ↓
Exit
```

This reduces dropped requests and incomplete operations.

---

# 7. Reverse Proxy

A reverse proxy sits between clients and backend servers:

```text
Client
  ↓
Reverse Proxy
  ↓
Node.js Server
```

Examples:

* Nginx
* Apache
* Cloud load balancers

It can handle:

* Routing
* TLS termination
* Load balancing
* Compression
* Static content
* Request limits

---

# 8. Docker Basics

Docker packages an application and its dependencies into a container image.

```text
Application
+ Dependencies
+ Runtime
      ↓
Container
```

### Important distinction

```text
Docker Image → Blueprint/template
Container     → Running instance of an image
```

Benefits include:

* Consistent environments
* Reproducible deployments
* Isolation
* Easier deployment

---

# 9. Monolith vs Microservices

### Monolith

The application is deployed as one major unit.

```text
          Backend
 ┌─────────┼─────────┐
Users    Orders    Payments
```

Advantages:

* Simpler development
* Easier deployment
* Easier debugging

### Microservices

The application is divided into independently deployable services.

```text
API Gateway
   ↓
 ┌───────┬────────┬─────────┐
Users   Orders   Payments
```

Advantages:

* Independent scaling
* Independent deployment
* Service isolation

Disadvantages:

* Greater operational complexity
* Network communication
* Distributed debugging
* Data consistency challenges

Microservices are **not automatically better**. The architecture should match the application's requirements and organizational constraints.

---

# 10. WebSockets

Normal HTTP generally follows:

```text
Client → Request
Server → Response
```

WebSockets provide a persistent, bidirectional connection:

```text
Client ←────────→ Server
```

Both sides can send messages after the connection is established.

Useful for:

* Chat
* Live notifications
* Real-time dashboards
* Multiplayer applications
* Live tracking

---

# 11. Message Queues

Slow background operations can be moved to a queue instead of making the API request wait.

Without a queue:

```text
Request
   ↓
Perform slow operation
   ↓
Wait
   ↓
Response
```

With a queue:

```text
Request
   ↓
Add job to queue
   ↓
Return response
   ↓
Background Worker
   ↓
Process job
```

Useful for:

* Email sending
* Notifications
* Large data processing
* Image/video processing

Examples:

* RabbitMQ
* Kafka
* Amazon SQS
* Redis-based queues

---

# 12. Race Conditions

A race condition occurs when concurrent operations produce an incorrect result because their execution order affects the outcome.

Example:

```text
Balance = ₹100

Request A → withdraw ₹80
Request B → withdraw ₹80
```

If both requests read the balance before either update is committed, both may incorrectly proceed.

Possible solutions:

* Database transactions
* Atomic operations
* Locks
* Optimistic concurrency control
* Distributed locks where appropriate

---

# 13. Eventual Consistency

In distributed systems, different replicas may temporarily contain different versions of data.

```text
Primary
  ↓
Replica A → updated
Replica B → old
```

After replication catches up, the replicas converge.

This is **eventual consistency**.

It can improve scalability and availability, but the newest write may not immediately be visible everywhere.

---

# 14. CAP Theorem

CAP concerns distributed systems.

During a **network partition**, a distributed system cannot simultaneously guarantee both:

* Strong consistency
* Availability

while also tolerating the partition.

The three concepts are:

```text
C → Consistency
A → Availability
P → Partition Tolerance
```

A common interview simplification is "pick two of three," but the more accurate statement is that the important tradeoff occurs **when a network partition happens**.

---

# Interview Questions

1. Why separate routes, controllers, services, and database logic?
2. Why use centralized error handling?
3. Why should secrets be stored in environment variables?
4. What information should production logs contain?
5. What is a health-check endpoint?
6. Why is graceful shutdown important?
7. What is a reverse proxy?
8. Difference between Docker image and container.
9. Monolith vs microservices.
10. Why aren't microservices automatically better?
11. What are WebSockets used for?
12. Why use a message queue?
13. What is a race condition?
14. How can race conditions be handled?
15. What is eventual consistency?
16. Explain CAP theorem at a high level.
