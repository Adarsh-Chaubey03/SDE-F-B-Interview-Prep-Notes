# 08. Java Multithreading — MUST KNOW

### Priority: Extremely High

## 1. What is a thread?

### Definition

A **thread** is the smallest unit of execution within a process.

A Java program can have multiple threads executing different tasks concurrently.

### Example

```java
class Test extends Thread {

    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        Test t = new Test();
        t.start();
    }
}
```

### Interview Answer

> A thread is a lightweight unit of execution within a process. Multiple threads can execute concurrently within the same process and share its resources.

---

## 2. What is multithreading?

### Definition

**Multithreading** is the execution of multiple threads concurrently within a single process.

### Example

```java
class Task extends Thread {

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }

    public static void main(String[] args) {

        Task t1 = new Task();
        Task t2 = new Task();

        t1.start();
        t2.start();
    }
}
```

Both threads can execute concurrently.

### Why Use Multithreading?

It can help with:

- Better responsiveness
- Parallel execution on multiple CPU cores
- Handling multiple independent tasks
- I/O-bound workloads

### Interview Answer

> Multithreading allows multiple execution paths to make progress concurrently within a process.

---

## 3. Process vs Thread?

### Definition

A **process** is an independent program in execution.

A **thread** is an execution unit within a process.

### Comparison

| Process | Thread |
|---|---|
| Independent execution environment | Execution unit inside a process |
| Has its own address space | Shares process resources |
| More expensive to create | Generally cheaper to create |
| Communication between processes is more complex | Threads communicate through shared memory |
| Failure is generally more isolated | A serious failure can affect the entire process |

### Example

```text
Process
│
├── Thread 1
├── Thread 2
└── Thread 3
```

Threads share process resources such as heap memory, but each thread has its own execution state and stack.

### Interview Answer

> A process is an independent execution environment, while a thread is a lightweight execution unit inside a process. Threads share process resources such as heap memory.

---

## 4. How do you create a thread in Java?

### Definition

A thread can traditionally be created by:

1. Extending `Thread`
2. Implementing `Runnable`

Modern Java applications often use higher-level concurrency APIs such as `ExecutorService`.

### Method 1 — Extending Thread

```java
class MyThread extends Thread {

    public void run() {
        System.out.println("Task running");
    }
}

class Main {
    public static void main(String[] args) {

        MyThread t = new MyThread();

        t.start();
    }
}
```

### Method 2 — Implementing Runnable

```java
class MyTask implements Runnable {

    public void run() {
        System.out.println("Task running");
    }
}

class Main {
    public static void main(String[] args) {

        Thread t = new Thread(new MyTask());

        t.start();
    }
}
```

### Modern Approach

For larger applications, use an executor:

```java
ExecutorService executor =
        Executors.newFixedThreadPool(2);

executor.submit(() -> {
    System.out.println("Task running");
});

executor.shutdown();
```

### Interview Point

> A thread can be created by extending `Thread` or implementing `Runnable`; in real applications, higher-level APIs such as `ExecutorService` are often preferred.

---

## 5. Thread class vs Runnable interface?

### Comparison

| `Thread` | `Runnable` |
|---|---|
| Class | Interface |
| Class extends `Thread` | Class implements `Runnable` |
| Cannot extend another class | Can still extend another class |
| Couples task with thread | Separates task from execution mechanism |
| Less flexible | More flexible |

### Example

```java
class Task implements Runnable {

    public void run() {
        System.out.println("Task");
    }
}
```

Then:

```java
Thread t = new Thread(new Task());
t.start();
```

### Why is Runnable generally preferred?

Java supports **single inheritance**.

With:

```java
class Task extends Thread
```

the class cannot extend another class.

With:

```java
class Task extends SomeClass implements Runnable
```

it can still extend another class.

### Interview Answer

> `Runnable` is generally preferred because it separates the task from the thread and allows the class to extend another class.

---

## 6. What is the thread lifecycle?

### Definition

Java defines the following `Thread.State` values:

```text
NEW
RUNNABLE
BLOCKED
WAITING
TIMED_WAITING
TERMINATED
```

### 1. NEW

The thread object is created, but `start()` has not been called.

```java
Thread t = new Thread();
```

State:

```text
NEW
```

### 2. RUNNABLE

After:

```java
t.start();
```

the thread becomes eligible to run.

Java's `RUNNABLE` state includes a thread that is running or ready to run.

### 3. BLOCKED

The thread is waiting to acquire a monitor lock.

### 4. WAITING

The thread waits indefinitely for another thread to perform some action.

Examples:

```java
wait();
join();
```

without a timeout.

### 5. TIMED_WAITING

The thread waits for a specified period.

Examples:

```java
Thread.sleep(1000);
```

or:

```java
wait(1000);
```

### 6. TERMINATED

The thread has completed execution or terminated because of an uncaught exception.

### Lifecycle

```text
NEW
 ↓ start()
RUNNABLE
 ↓
 ├── BLOCKED
 ├── WAITING
 ├── TIMED_WAITING
 ↓
RUNNABLE
 ↓
TERMINATED
```

### Interview Trap

Java's `Thread.State` does not have a separate `RUNNING` state. Running and ready-to-run threads are represented by `RUNNABLE`.

---

## 7. What does `start()` do?

### Definition

`start()` starts a new thread of execution.

When:

```java
t.start();
```

is called, the JVM makes the thread eligible for execution and its `run()` method executes on that new thread.

### Example

```java
class MyThread extends Thread {

    public void run() {
        System.out.println("Running");
    }

    public static void main(String[] args) {

        MyThread t = new MyThread();

        t.start();
    }
}
```

### Important Point

Calling `start()` does not guarantee that the thread executes immediately. The scheduler determines when it gets CPU time.

### Interview Answer

> `start()` starts a new thread of execution, after which the thread's `run()` method executes on that thread.

---

## 8. Difference between `start()` and `run()`?

### Definition

`start()` starts a new thread, while `run()` contains the code executed by the thread.

### Example

```java
MyThread t = new MyThread();

t.start();
```

→ A new thread is started.

But:

```java
t.run();
```

→ It is a normal method call on the current thread.

### Comparison

| `start()` | `run()` |
|---|---|
| Starts a new thread | Normal method invocation when called directly |
| Creates a new execution path | Executes on the calling thread if called directly |
| JVM invokes `run()` on the new thread | Can be called directly |

### Important Trap

```java
t.run();
```

does **not** create a new thread.

A `Thread` object cannot be successfully started more than once.

---

## 9. What is synchronization?

### Definition

**Synchronization** is a mechanism used to control concurrent access to shared resources.

It helps ensure that critical sections are accessed safely.

### Example

```java
class Counter {

    private int count = 0;

    synchronized void increment() {
        count++;
    }
}
```

The `synchronized` method protects the update so that only one thread at a time can execute that critical section for the same object monitor.

### Interview Answer

> Synchronization coordinates access to shared mutable state so that critical sections can be executed safely by multiple threads.

---

## 10. Why do we need synchronization?

### Definition

Synchronization is needed when multiple threads access **shared mutable state** and their operations must be coordinated.

### Example

Suppose:

```java
count = 0;
```

Two threads execute:

```java
count++;
```

`count++` is not one atomic operation. Conceptually:

```text
read count
add 1
write count
```

Possible execution:

```text
Thread 1 → read 0
Thread 2 → read 0
Thread 1 → write 1
Thread 2 → write 1
```

Expected:

```text
2
```

Actual:

```text
1
```

This is a lost update.

### Solution

```java
synchronized void increment() {
    count++;
}
```

### Synchronization Provides

- Mutual exclusion
- Visibility of properly synchronized changes
- Ordering guarantees through the Java Memory Model

### Interview Answer

> Synchronization is needed to safely coordinate access to shared mutable data and prevent incorrect results caused by concurrent execution.

---

## 11. What is a race condition?

### Definition

A **race condition** occurs when the result of a program depends on the timing or interleaving of multiple threads accessing shared state.

### Example

```java
class Counter {

    int count = 0;

    void increment() {
        count++;
    }
}
```

If multiple threads execute:

```java
counter.increment();
```

concurrently, updates can be lost.

### Fix

```java
synchronized void increment() {
    count++;
}
```

Or use an atomic class:

```java
AtomicInteger count = new AtomicInteger();

count.incrementAndGet();
```

### Interview Answer

> A race condition occurs when multiple threads access shared mutable data concurrently and the result depends on the timing or ordering of their operations.

---

## 12. What is a deadlock?

### Definition

A **deadlock** occurs when two or more threads wait indefinitely for locks or resources held by each other.

### Example

```java
class Test {

    static final Object lock1 = new Object();
    static final Object lock2 = new Object();

    public static void main(String[] args) {

        Thread t1 = new Thread(() -> {

            synchronized (lock1) {

                synchronized (lock2) {
                    System.out.println("Thread 1");
                }
            }
        });

        Thread t2 = new Thread(() -> {

            synchronized (lock2) {

                synchronized (lock1) {
                    System.out.println("Thread 2");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
```

Possible situation:

```text
Thread 1 holds lock1
        ↓
waits for lock2

Thread 2 holds lock2
        ↓
waits for lock1
```

Neither can proceed.

### How to Prevent Deadlock?

A common strategy is consistent lock ordering:

```text
lock1 → lock2
```

and never:

```text
lock2 → lock1
```

Other strategies:

- Avoid unnecessary nested locks
- Keep critical sections small
- Use timed lock acquisition such as `tryLock()` where appropriate
- Prefer higher-level concurrency utilities when suitable

### Four Coffman Conditions

Deadlock requires:

1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait

Breaking any one of these can prevent deadlock.

---

## 13. What is `synchronized`?

### Definition

`synchronized` is a Java keyword used for **monitor-based synchronization**.

It can be applied to:

- Instance methods
- Static methods
- Code blocks

### Synchronized Instance Method

```java
synchronized void increment() {
    count++;
}
```

The thread acquires the monitor associated with the current object (`this`).

### Synchronized Block

```java
synchronized (lock) {
    count++;
}
```

The thread acquires the monitor associated with `lock`.

### Static Synchronized Method

```java
static synchronized void display() {
}
```

The lock is associated with the `Class` object, not an individual instance.

### Important Difference

```text
synchronized instance method
→ lock on current object

static synchronized method
→ lock on Class object
```

### Why Use a Synchronized Block?

It allows only the critical code to be synchronized:

```java
synchronized (lock) {
    // critical code
}
```

This can reduce unnecessary lock contention compared with synchronizing a whole method.

---

## 14. What is `volatile`?

### Definition

`volatile` is a Java keyword used when a variable needs specific **visibility and ordering guarantees** across threads.

A volatile read sees the relevant volatile write according to the Java Memory Model.

### Example

```java
class Task {

    volatile boolean running = true;

    void stop() {
        running = false;
    }
}
```

One thread may execute:

```java
while (running) {
    // work
}
```

while another executes:

```java
running = false;
```

The `volatile` declaration provides the required visibility semantics for this shared flag.

### Important Limitation

`volatile` does **not** make compound operations atomic.

For example:

```java
volatile int count;

count++;
```

is still not atomic.

Conceptually:

```text
read
+
increment
+
write
```

For atomic counters, use:

```java
AtomicInteger
```

or synchronization.

### `volatile` vs `synchronized`

| `volatile` | `synchronized` |
|---|---|
| Visibility and ordering guarantees | Mutual exclusion plus visibility/order guarantees |
| Does not provide mutual exclusion | Provides mutual exclusion |
| Useful for simple shared state such as flags | Useful for critical sections |
| Does not make `count++` atomic | Can make a critical operation atomic |

### Interview Answer

> `volatile` provides visibility and ordering guarantees for a shared variable, but it does not provide mutual exclusion or make compound operations atomic.

---

## 15. Difference between `sleep()`, `wait()`, and `join()`?

### `sleep()`

`Thread.sleep()` pauses the **current thread** for a specified period.

```java
Thread.sleep(1000);
```

The thread enters `TIMED_WAITING`.

### Important Point

`sleep()` does **not release monitors/locks** held by the thread.

---

### `wait()`

`wait()` is a method of `Object`.

It causes the current thread to wait for notification or a timeout.

```java
synchronized (lock) {
    lock.wait();
}
```

The thread must own the object's monitor to call `wait()`.

### Important Point

`wait()` **releases the monitor** associated with that object while waiting.

Another thread can later call:

```java
synchronized (lock) {
    lock.notify();
}
```

or:

```java
lock.notifyAll();
```

A notified thread must reacquire the monitor before `wait()` returns.

---

### `join()`

`join()` is a method of `Thread`.

It makes the current thread wait until another thread terminates.

### Example

```java
Thread t = new Thread(() -> {
    System.out.println("Task running");
});

t.start();

t.join();

System.out.println("Task completed");
```

The current thread waits for `t` to finish.

### Comparison

| Feature | `sleep()` | `wait()` | `join()` |
|---|---|---|---|
| Defined in | `Thread` | `Object` | `Thread` |
| Purpose | Pause current thread | Wait for notification/condition | Wait for another thread to finish |
| Releases monitor? | No | Yes | Does not inherently release locks held by current thread |
| Requires synchronized block? | No | Yes, caller must own monitor | No |
| Typical state | `TIMED_WAITING` | `WAITING` / `TIMED_WAITING` | `WAITING` / `TIMED_WAITING` |
| Ends when | Time expires/interruption | Notification, timeout, or interruption | Target thread terminates/interruption |

### Easy Way to Remember

```text
sleep() → pause myself
wait()  → wait for notification/condition
join()  → wait for another thread to finish
```

---

## 16. What is thread safety?

### Definition

Code is **thread-safe** if it behaves correctly when accessed concurrently by multiple threads according to its intended contract.

### Example — Not Thread-Safe

```java
class Counter {

    int count = 0;

    void increment() {
        count++;
    }
}
```

Multiple threads can cause lost updates.

### Thread-Safe Version

```java
class Counter {

    private int count = 0;

    synchronized void increment() {
        count++;
    }
}
```

Or:

```java
class Counter {

    private final AtomicInteger count =
            new AtomicInteger();

    void increment() {
        count.incrementAndGet();
    }
}
```

### Ways to Achieve Thread Safety

- Immutability
- Synchronization
- Atomic classes
- Concurrent collections
- Locks
- Thread confinement

### Example of an Immutable Object

```java
final class User {

    private final String name;

    User(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

Because its state cannot be changed after construction, an instance can safely be shared in many concurrent scenarios.

### Interview Answer

> Thread-safe code maintains correct behavior when multiple threads access it concurrently, without race conditions or inconsistent shared state.

---

# Quick Revision

| Topic | Key Point |
|---|---|
| Thread | Smallest unit of execution within a process |
| Multithreading | Multiple threads making progress concurrently |
| Process vs Thread | Process has independent memory; threads share process resources |
| Create Thread | `Thread`, `Runnable`, or higher-level concurrency APIs |
| Thread vs Runnable | `Runnable` separates task from execution and avoids single-inheritance limitation |
| Lifecycle | `NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, `TERMINATED` |
| `start()` | Starts a new thread of execution |
| `run()` | Normal method when called directly |
| Synchronization | Coordinates access to shared mutable state |
| Race Condition | Result depends on thread timing/interleaving |
| Deadlock | Threads wait indefinitely for each other's resources |
| `synchronized` | Monitor-based mutual exclusion + visibility/order guarantees |
| `volatile` | Visibility/order guarantees, but not compound-operation atomicity |
| `sleep()` | Pauses current thread; does not release monitors |
| `wait()` | Waits and releases object's monitor |
| `join()` | Waits for another thread to terminate |
| Thread Safety | Correct behavior under concurrent access |

---

# Most Important Interview Traps

### 1. `start()` vs `run()`

```java
t.start();
```

→ New thread

```java
t.run();
```

→ Normal method call on current thread

---

### 2. `sleep()` Does Not Release the Lock

```java
synchronized (lock) {
    Thread.sleep(1000);
}
```

The thread continues holding `lock` while sleeping.

---

### 3. `wait()` Releases the Monitor

```java
synchronized (lock) {
    lock.wait();
}
```

The thread releases that monitor while waiting.

---

### 4. `volatile` Does Not Make `count++` Safe

```java
volatile int count;

count++;
```

Still not atomic.

Use `AtomicInteger` or synchronization.

---

### 5. `synchronized` Instance vs Static Method

```java
synchronized void method()
```

→ lock associated with the current object.

```java
static synchronized void method()
```

→ lock associated with the `Class` object.

---

### 6. Java Thread States

Do not treat `RUNNING` as a separate Java `Thread.State`.

```text
NEW
RUNNABLE
BLOCKED
WAITING
TIMED_WAITING
TERMINATED
```

---

### 7. Deadlock

Remember the four Coffman conditions:

```text
Mutual exclusion
Hold and wait
No preemption
Circular wait
```

---

### 8. Thread Safety Is Broader Than Synchronization

Thread safety can be achieved using:

```text
Immutability
Atomic classes
Concurrent collections
Locks
Synchronization
Thread confinement
```

You do not always need `synchronized`.

---

# Highest-Priority Questions

### Tier 1

**Q7** — `start()`  
**Q8** — `start()` vs `run()`  
**Q9** — Synchronization  
**Q10** — Why synchronization  
**Q11** — Race condition  
**Q12** — Deadlock  
**Q13** — `synchronized`  
**Q14** — `volatile`  
**Q15** — `sleep()` vs `wait()` vs `join()`  
**Q16** — Thread safety

### One Connected Concept

```text
Multiple Threads
      ↓
Shared Mutable Data
      ↓
Concurrent Access
      ↓
Race Condition
      ↓
Synchronization / Atomic Operations
      ↓
Thread Safety
```

### Locking Concept

```text
Thread 1 → Lock A → Lock B
                  ↓
                waiting

Thread 2 → Lock B → Lock A
                  ↓
                waiting

        → DEADLOCK
```

### `sleep()`, `wait()`, `join()`

```text
sleep() → pause myself
wait()  → wait for notification/condition
join()  → wait for another thread to finish
```
