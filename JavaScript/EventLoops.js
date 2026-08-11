// EVENT LOOP — INTERVIEW DEFINITION

// The Event Loop is a mechanism in JavaScript that continuously checks the Call Stack and task queues.
//  When the Call Stack is empty, it moves eligible callbacks from the queues to the Call Stack for execution.

// Key Points:
// • JavaScript is single-threaded.
// • Event Loop enables asynchronous, non-blocking behavior.
// • Synchronous code executes first.
// • Asynchronous callbacks wait in queues.
// • Microtasks (Promise, queueMicrotask) have higher priority than macrotasks (setTimeout, setInterval).
// • The Event Loop executes queued tasks only when the Call Stack is empty.