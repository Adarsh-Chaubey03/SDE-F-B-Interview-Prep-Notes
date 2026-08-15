# Backend Performance & Scalability

## 1. Caching

Caching stores frequently accessed data temporarily so that future requests can be served faster without repeating an expensive operation.

```text
Request
   ↓
Cache
 ┌───┴───┐
 HIT    MISS
 ↓        ↓
Return   Database
           ↓
         Cache
```

### Benefits

* Lower response latency
* Reduced database load
* Better throughput

### Main problem

**Stale data** — the cache may contain an older value than the database.

Common approaches:

* TTL (Time To Live)
* Explicit cache invalidation
* Updating/deleting the cache when the underlying data changes

### Cache-aside

A common pattern:

```text
Check cache
   ↓
HIT → Return
   ↓
MISS
   ↓
Query database
   ↓
Store result in cache
   ↓
Return
```

---

# 2. Redis

Redis is an **in-memory data store** commonly used for:

* Caching
* Session storage
* Rate limiting
* Counters
* Distributed coordination

Redis is fast primarily because its working data is kept in memory and it provides efficient data structures.

It is usually used **alongside** a primary database rather than automatically replacing it.

Example:

```text
Node.js
   ↓
Redis
   ↓
Cache HIT → Return
   ↓
Cache MISS
   ↓
MongoDB
```

---

# 3. Rate Limiting

Rate limiting restricts how many requests a client can make within a given period.

Example:

```text
100 requests / minute / user
```

When the limit is exceeded:

```http
429 Too Many Requests
```

It helps protect APIs from:

* Excessive traffic
* Abuse
* Brute-force attempts
* Resource exhaustion

Redis can be useful for rate limiting when multiple backend instances need to share request counters.

---

# 4. Vertical Scaling

Vertical scaling means increasing the resources of an existing server.

```text
2 CPU + 4 GB RAM
        ↓
8 CPU + 32 GB RAM
```

### Advantages

* Relatively simple
* Fewer distributed-system concerns

### Limitations

* Hardware has limits
* Can become expensive
* A single server can remain a failure point

---

# 5. Horizontal Scaling

Horizontal scaling means adding more server instances.

```text
             Load Balancer
             /     |     \
            ↓      ↓      ↓
         Server  Server  Server
```

### Advantages

* Greater scalability
* Better fault tolerance
* Can add instances as traffic grows

### Challenges

* Shared state
* Session management
* Load balancing
* Distributed-system complexity

For long-term scalability, horizontal scaling is commonly preferred.

---

# 6. Load Balancer

A load balancer distributes incoming traffic across backend instances.

Common strategies include:

* Round robin
* Least connections
* Weighted routing

Load balancers can also perform health checks and stop routing traffic to unhealthy instances.

---

# 7. Shared Session Problem

Suppose three Node.js servers are behind a load balancer:

```text
Request 1 → Server A
             ↓
       Session in memory

Request 2 → Server B
             ↓
       Session not found
```

The user may appear to lose their session.

### Solutions

* Shared session storage such as Redis
* Stateless authentication where appropriate
* Sticky sessions in some architectures

The key issue is:

> **Per-process in-memory state does not automatically exist on other server instances.**

---

# 8. CDN

A Content Delivery Network caches static content closer to users.

Useful for:

* JavaScript bundles
* CSS
* Images
* Videos
* Other static assets

```text
User
 ↓
Nearby CDN Edge
 ↓
Static Content
```

This reduces latency and decreases load on the origin server.

---

# 9. Compression

HTTP responses can be compressed before transmission.

Common algorithms:

* Gzip
* Brotli

Compression reduces network bandwidth and can improve transfer time, at the cost of some CPU work.

---

# 10. Backend Bottleneck Diagnosis

When an API becomes slow, do not immediately add caching or increase servers.

**Measure first.**

Investigate:

```text
API
 ↓
Application code
 ↓
Database
 ↓
External APIs
 ↓
Network
 ↓
CPU
 ↓
Memory
 ↓
Connection pool
```

Useful metrics include:

* Response latency
* CPU utilization
* Memory usage
* Database query latency
* Error rate
* Throughput
* Connection-pool utilization

Example:

```text
API latency      = 2 seconds
Database latency = 50 ms
```

The database is unlikely to be the primary bottleneck, so investigate the application, network, external services, middleware, serialization, or connection waits.

### Core principle

> **Measure → identify bottleneck → optimize → measure again.**

---

# Interview Questions

1. What is caching and why does it improve performance?
2. What is cache invalidation?
3. What is Redis and why would you use it?
4. What is rate limiting?
5. Why might Redis be useful for distributed rate limiting?
6. Difference between vertical and horizontal scaling.
7. Why is horizontal scaling useful?
8. What does a load balancer do?
9. Why can users lose sessions after adding multiple Node.js servers?
10. How would you solve the shared-session problem?
11. What is a CDN?
12. Why is blindly adding caching not a good performance strategy?
13. How would you identify the bottleneck in a slow API?
