# Node.js & Asynchronous Programming

## 1. What is Node.js?

Node.js is a **JavaScript runtime environment** built around Google's **V8 JavaScript engine** that allows JavaScript to execute outside the browser.

It provides APIs for server-side operations such as:

* Networking
* File system operations
* Streams
* HTTP servers
* Process management

### Important distinction

```text
JavaScript → Programming language
V8         → JavaScript engine
Node.js    → JavaScript runtime
Express.js → Web framework for Node.js
```

---

# 2. Node.js Architecture

A simplified architecture:

```text
JavaScript
    ↓
V8 Engine
    ↓
Node.js Runtime
    ├── Node APIs
    ├── Event Loop
    └── libuv
          ↓
      Operating System
```

Node.js executes JavaScript primarily on a **single main JavaScript thread**, but the complete Node.js runtime is not limited to one thread.

It can use:

* Operating-system asynchronous mechanisms
* libuv's thread pool
* Worker Threads
* Multiple processes

Therefore, saying **"Node.js is single-threaded"** is an oversimplification.

A better statement is:

> Node.js executes JavaScript primarily on a single main thread and uses an event-driven, non-blocking I/O model.

---

# 3. Why Node.js Handles Concurrent I/O

Node.js is particularly effective for **I/O-bound workloads**.

Examples of I/O:

* Database queries
* Network requests
* File operations
* External API calls

Suppose a request starts a database operation:

```text
Request A
   ↓
Start database operation
   ↓
Database is processing
   ↓
Node.js can process other requests
   ↓
Database result becomes available
   ↓
Node.js processes the result
```

The JavaScript thread does not need to sit idle while waiting for the I/O operation.

This allows a Node.js server to handle many concurrent I/O operations efficiently.

---

# 4. Event Loop

The **Event Loop** is a core part of Node.js's asynchronous architecture.

Its purpose is to coordinate when asynchronous callbacks and other eligible work are executed by the JavaScript thread.

A simplified model:

```text
             JavaScript
             Call Stack
                  ↓
              Event Loop
              ↙       ↘
        Microtasks    Tasks
                  
                  +
                  
             libuv / OS
                  ↓
          Asynchronous I/O
```

The Event Loop does not itself perform every I/O operation.

Depending on the operation, the work may be handled by:

* The operating system
* A database/network library
* libuv's thread pool

Once the operation is ready, its continuation can be scheduled for JavaScript execution.

---

# 5. Call Stack

The **Call Stack** keeps track of currently executing JavaScript functions.

Example:

```javascript
function A() {
    B();
}

function B() {
    console.log("Hello");
}

A();
```

Conceptually:

```text
A()
 ↓
B()
 ↓
console.log()
```

The Call Stack follows **LIFO — Last In, First Out**.

When a function finishes executing, it is removed from the stack.

---

# 6. Blocking vs Non-Blocking

## Blocking

A blocking operation prevents the main JavaScript thread from continuing with other JavaScript work.

Example:

```javascript
while (true) {
}
```

This keeps the main thread occupied indefinitely.

Another example is a CPU-heavy synchronous calculation:

```javascript
function heavyCalculation() {
    for (let i = 0; i < 10_000_000_000; i++) {
        // CPU-intensive work
    }
}
```

While this executes:

```text
Request A
   ↓
Heavy calculation
   ↓
Main thread blocked
   ↓
Other JavaScript work waits
```

---

## Non-Blocking I/O

With asynchronous I/O:

```text
Request A
   ↓
Start I/O
   ↓
JavaScript thread remains available
   ↓
Process Request B
   ↓
Process Request C
   ↓
I/O completes
   ↓
Process result
```

This is one of the primary reasons Node.js works well for I/O-heavy applications.

---

# 7. I/O-Bound vs CPU-Bound

## I/O-Bound

The application spends significant time waiting for external operations.

Examples:

```text
Database
Network
Filesystem
External APIs
```

Node.js handles these workloads efficiently because the main JavaScript thread doesn't have to remain blocked while waiting.

## CPU-Bound

The application spends significant time performing computation.

Examples:

```text
Large mathematical calculations
Image processing
Video processing
Complex data processing
```

Heavy CPU-bound JavaScript can block the main thread.

For such workloads, consider:

* Worker Threads
* Separate processes
* Background workers
* Job queues
* Dedicated services

---

# 8. libuv Thread Pool

Node.js uses **libuv** for much of its asynchronous infrastructure.

libuv provides an internal thread pool for certain operations that should not block the main JavaScript thread.

Conceptually:

```text
                 Node.js
                    │
          ┌─────────┴─────────┐
          │                   │
    Main JS Thread        libuv
          │              Thread Pool
      Event Loop          ↙ ↓ ↘
          │            Worker Threads
          ↓
     JavaScript
```

Important:

> The Event Loop and the libuv thread pool are not the same thing.

### Event Loop

Coordinates asynchronous execution and schedules eligible work for JavaScript execution.

### Thread Pool

Provides worker threads for certain operations that need background execution.

Do not claim that **all asynchronous operations use the thread pool**. Many network operations can rely directly on operating-system asynchronous mechanisms.

---

# 9. Callbacks

A callback is a function passed to another function to be executed later.

Example:

```javascript
setTimeout(() => {
    console.log("Done");
}, 1000);
```

The function passed to `setTimeout` is a callback.

Callbacks were heavily used in traditional Node.js APIs.

However, deeply nested callbacks can lead to **callback hell**:

```text
Operation A
   ↓
Callback
   ↓
Operation B
   ↓
Callback
   ↓
Operation C
   ↓
Callback
```

Promises and `async/await` provide cleaner ways to manage asynchronous code.

---

# 10. Promises

A **Promise** represents the eventual result of an asynchronous operation.

A Promise has three states:

```text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
```

Example:

```javascript
const promise = fetch("/api/users");
```

The Promise represents the future result of the request.

It is not the result itself.

---

# 11. `.then()` and `.catch()`

Promises can be handled using:

```javascript
fetch("/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

Conceptually:

```text
Promise
   ↓
Fulfilled → then()
   ↓
Result

Rejected → catch()
```

---

# 12. async/await

`async/await` provides cleaner syntax for working with Promises.

Instead of:

```javascript
fetch("/api/users")
    .then(response => response.json())
    .then(data => console.log(data));
```

we can write:

```javascript
async function getUsers() {
    const response = await fetch("/api/users");
    const data = await response.json();

    console.log(data);
}
```

### Important

`await` does **not** block the entire Node.js event loop.

It suspends the execution of the **current async function** until the Promise settles.

Other JavaScript work can continue.

---

# 13. Microtask Queue

Promise callbacks and Promise continuations are processed through the **microtask mechanism**.

Example:

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output:

```text
A
C
B
```

Why?

```text
A → synchronous
C → synchronous
B → Promise microtask
```

After the current synchronous execution finishes, the microtask is processed.

---

# 14. Timers vs Microtasks

Consider:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

The expected output in this standard example is:

```text
A
D
C
B
```

Reason:

```text
A → synchronous
D → synchronous
C → Promise microtask
B → timer callback
```

For interview questions, remember the simplified ordering:

```text
Current synchronous execution
          ↓
Microtasks
          ↓
Timer/task processing
```

Node.js has multiple event-loop phases, so this simplified model should not be treated as a complete description of every possible scheduling situation.

---

# 15. Promise.all()

When multiple independent asynchronous operations are required, `Promise.all()` can run them concurrently.

Sequential:

```javascript
const users = await getUsers();
const products = await getProducts();
```

The second operation is awaited only after the first operation completes.

With `Promise.all()`:

```javascript
const [users, products] = await Promise.all([
    getUsers(),
    getProducts()
]);
```

Both operations are initiated before waiting for their combined result.

If:

```text
getUsers()    → 1 second
getProducts() → 2 seconds
```

Then, assuming they can run concurrently:

```text
Sequential ≈ 3 seconds
Promise.all ≈ 2 seconds
```

The exact timing depends on the underlying operations and resources.

Use **concurrent**, rather than automatically saying **parallel**, because asynchronous operations are not necessarily executing simultaneously on separate CPU cores.

---

# 16. Promise.all() Failure Behavior

```javascript
await Promise.all([
    requestA(),
    requestB(),
    requestC()
]);
```

If one Promise rejects, `Promise.all()` rejects.

Example:

```javascript
try {
    const results = await Promise.all([
        requestA(),
        requestB(),
        requestC()
    ]);
} catch (error) {
    console.error(error);
}
```

### Important nuance

`Promise.all()` does not automatically cancel the other underlying operations when one rejects.

The other operations may continue running.

---

# 17. Promise.allSettled()

If you need the outcome of **every operation**, even if some fail:

```javascript
const results = await Promise.allSettled([
    requestA(),
    requestB(),
    requestC()
]);
```

It waits for all Promises to settle.

Possible result:

```javascript
[
    { status: "fulfilled", value: ... },
    { status: "rejected", reason: ... },
    { status: "fulfilled", value: ... }
]
```

---

# 18. Promise.race()

`Promise.race()` settles when the **first Promise settles**, whether fulfilled or rejected.

```javascript
const result = await Promise.race([
    requestA(),
    requestB()
]);
```

If `requestB()` rejects first, the race rejects.

If `requestA()` fulfills first, the race fulfills.

---

# 19. Promise.any()

`Promise.any()` resolves when the **first Promise fulfills**.

```javascript
const result = await Promise.any([
    serverA(),
    serverB(),
    serverC()
]);
```

If one server responds successfully, that result can be used.

If all Promises reject, `Promise.any()` rejects with an `AggregateError`.

---

# 20. Promise Methods — Quick Comparison

| Method                 | Behavior                              |
| ---------------------- | ------------------------------------- |
| `Promise.all()`        | Waits for all; rejects if one rejects |
| `Promise.allSettled()` | Waits for all outcomes                |
| `Promise.race()`       | First settled Promise wins            |
| `Promise.any()`        | First fulfilled Promise wins          |

---

# 21. Important Interview Distinctions

### Node.js vs Express

```text
Node.js   → Runtime
Express   → Web framework
```

### V8 vs Node.js

```text
V8      → Executes JavaScript
Node.js → Runtime built around V8 + system APIs
```

### Event Loop vs Thread Pool

```text
Event Loop → Coordinates asynchronous JavaScript execution
Thread Pool → Worker threads for certain operations
```

### I/O-Bound vs CPU-Bound

```text
I/O-bound → Mostly waiting for external operations
CPU-bound → Mostly performing computation
```

### `await`

```text
Pauses current async function
≠
Blocks entire event loop
```

### Promise concurrency

```text
Sequential awaits → operations are awaited one after another
Promise.all()     → independent operations can proceed concurrently
```

---

# 22. Interview Questions You Must Know

1. What is Node.js?
2. Is Node.js single-threaded?
3. If Node.js is single-threaded, how does it handle thousands of requests?
4. What is the Event Loop?
5. What is the Call Stack?
6. What is libuv?
7. What is the libuv thread pool?
8. Is every asynchronous operation handled by the thread pool?
9. What is blocking vs non-blocking code?
10. Why is Node.js good for I/O-bound workloads?
11. Why can CPU-heavy code be problematic in Node.js?
12. How can CPU-heavy work be handled?
13. What is a Promise?
14. What are the states of a Promise?
15. What does `async/await` do?
16. Does `await` block the event loop?
17. What is the microtask queue?
18. Why does a Promise callback execute before a timer in common execution-order examples?
19. Difference between `Promise.all()` and sequential `await`.
20. Difference between `Promise.all()` and `Promise.allSettled()`.
21. Difference between `Promise.race()` and `Promise.any()`.
22. What happens when one Promise rejects inside `Promise.all()`?
23. Does `Promise.all()` cancel the remaining operations?
