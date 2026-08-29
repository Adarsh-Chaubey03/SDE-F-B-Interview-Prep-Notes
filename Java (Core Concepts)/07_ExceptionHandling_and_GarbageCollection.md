# Java Exceptions and Garbage Collection

## Q76. What is an exception?

### Definition
An **exception** is an abnormal event that occurs during program execution and disrupts the normal flow of a program.

### Example

```java
int a = 10;
int b = 0;

int result = a / b;
```

This causes `ArithmeticException` because integer division by zero is invalid.

### Handling the Exception

```java
try {
    int result = 10 / 0;
}
catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```

Output:

```text
Cannot divide by zero
```

### Interview Answer
> An exception is an abnormal condition during program execution that disrupts the normal flow of a program and can be handled using Java's exception-handling mechanism.

---

## Q77. Difference between checked and unchecked exceptions?

### Definition
Java exceptions are broadly divided into **checked** and **unchecked** exceptions.

### Checked Exceptions
Checked exceptions are checked by the compiler. They must be handled using `try-catch` or declared using `throws`.

```java
import java.io.FileReader;
import java.io.IOException;

class Test {
    void readFile() throws IOException {
        FileReader file = new FileReader("data.txt");
    }
}
```

Common examples:

```text
IOException
SQLException
ClassNotFoundException
```

### Unchecked Exceptions
Unchecked exceptions are subclasses of `RuntimeException`. The compiler does not require them to be caught or declared.

```java
int x = 10 / 0;
```

This causes `ArithmeticException`.

Other examples:

```text
NullPointerException
ArrayIndexOutOfBoundsException
NumberFormatException
IllegalArgumentException
```

### Comparison

| Checked | Unchecked |
|---|---|
| Compiler checks them | Compiler does not require handling |
| Must be handled or declared | Handling/declaring is optional |
| `Exception` excluding `RuntimeException` subclasses | `RuntimeException` and its subclasses |
| Often represent recoverable external conditions | Often indicate programming errors or invalid runtime state |

### Easy Way to Remember

```text
Checked   → compiler forces handling/declaring
Unchecked → compiler does not force handling/declaring
```

---

## Q78. Difference between Error and Exception?

### Definition

Both `Error` and `Exception` are subclasses of `Throwable`.

```text
Throwable
├── Error
└── Exception
    └── RuntimeException
```

### Exception
An `Exception` generally represents a condition that an application may be able to handle.

Examples:

```text
IOException
SQLException
NullPointerException
```

### Error
An `Error` generally represents serious JVM or runtime-environment problems that applications normally should not attempt to recover from.

Examples:

```text
OutOfMemoryError
StackOverflowError
NoClassDefFoundError
```

### Comparison

| Exception | Error |
|---|---|
| Usually application-level exceptional condition | Usually serious JVM/runtime problem |
| Often can be handled | Generally not handled for recovery |
| Includes checked and unchecked exceptions | Represents serious failures |

### Interview Point

Do not say that Errors can never be caught. `Error` is a `Throwable`, so Java technically allows it to be caught. However, catching serious JVM errors is generally not an appropriate recovery strategy.

---

## Q79. Explain `try`, `catch`, and `finally`.

### Definition

- **`try`** → contains code that may throw an exception.
- **`catch`** → handles a matching exception.
- **`finally`** → contains cleanup code that normally executes whether an exception occurs or not.

### Example

```java
try {
    int result = 10 / 0;
}
catch (ArithmeticException e) {
    System.out.println("Exception handled");
}
finally {
    System.out.println("Finally executed");
}
```

Output:

```text
Exception handled
Finally executed
```

### Flow

```text
try
 ↓
Exception?
 ├── No → finally
 └── Yes → catch → finally
```

### Common Use
`finally` is traditionally used for cleanup such as closing resources or releasing locks.

For resources such as files and streams, **try-with-resources** is generally preferred:

```java
try (FileReader file = new FileReader("data.txt")) {
    // use file
}
```

---

## Q80. Can we have multiple catch blocks?

### Answer
**Yes.**

Multiple `catch` blocks can handle different exception types.

### Example

```java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);
}
catch (ArithmeticException e) {
    System.out.println("Arithmetic error");
}
catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array index error");
}
catch (Exception e) {
    System.out.println("Other exception");
}
```

The **first matching catch block** executes.

### Important Rule

More specific exceptions must come before their superclass.

Correct:

```java
catch (ArithmeticException e) {
}
catch (Exception e) {
}
```

Incorrect:

```java
catch (Exception e) {
}
catch (ArithmeticException e) {
}
```

The second block is unreachable.

### Multi-Catch

```java
try {
    // code
}
catch (IOException | SQLException e) {
    System.out.println("Exception occurred");
}
```

---

## Q81. Can `finally` execute without `catch`?

### Answer
**Yes.**

A `try` block can be followed directly by `finally`.

### Example

```java
try {
    System.out.println("Try");
}
finally {
    System.out.println("Finally");
}
```

Output:

```text
Try
Finally
```

### Important Rule

A `try` statement must have at least one of:

```text
catch
```

or:

```text
finally
```

### Can `finally` fail to execute?

Yes.

For example:

```java
try {
    System.out.println("Try");
    System.exit(0);
}
finally {
    System.out.println("Finally");
}
```

The JVM terminates before `finally` can execute.

### Interview Answer

> `finally` normally executes regardless of whether an exception occurs, but it is not an absolute guarantee. For example, `System.exit()` can terminate the JVM before `finally` executes.

---

## Q82. Difference between `throw` and `throws`?

### Definition

`throw` is used to **actually throw an exception**.

`throws` is used to **declare that a method may throw specified exceptions**.

### `throw`

```java
static void checkAge(int age) {

    if (age < 18) {
        throw new IllegalArgumentException(
            "Age must be 18 or above"
        );
    }
}
```

Here `throw` actually throws the exception object.

### `throws`

```java
void readFile() throws IOException {
    FileReader file = new FileReader("data.txt");
}
```

This declares that the method may propagate `IOException` to its caller.

### Comparison

| `throw` | `throws` |
|---|---|
| Actually throws an exception | Declares possible exceptions |
| Used inside method/block | Used in method/constructor declaration |
| Followed by an exception object | Followed by exception class names |
| Throws an exception object | Can declare multiple exception types |

### Easy Way to Remember

```text
throw  → do it
throws → declare it
```

---

## Q83. How do you create a custom exception?

### Definition

A **custom exception** is a user-defined exception class created by extending `Exception` or `RuntimeException`.

- `Exception` → checked custom exception
- `RuntimeException` → unchecked custom exception

### Checked Custom Exception

```java
class InvalidAgeException extends Exception {

    InvalidAgeException(String message) {
        super(message);
    }
}
```

Use it:

```java
static void checkAge(int age)
        throws InvalidAgeException {

    if (age < 18) {
        throw new InvalidAgeException(
            "Age must be 18 or above"
        );
    }
}
```

Usage:

```java
try {
    checkAge(15);
}
catch (InvalidAgeException e) {
    System.out.println(e.getMessage());
}
```

Output:

```text
Age must be 18 or above
```

### Unchecked Custom Exception

```java
class InvalidAgeException extends RuntimeException {

    InvalidAgeException(String message) {
        super(message);
    }
}
```

The compiler does not require callers to catch or declare it.

### Interview Answer

> A custom exception is created by extending `Exception` for checked behavior or `RuntimeException` for unchecked behavior, and an instance is thrown using `throw`.

---

## JVM and Garbage Collection

### Priority: High

## Q84. What is garbage collection in Java?

### Definition

**Garbage Collection (GC)** is the JVM's automatic process of identifying objects that are no longer reachable by the application and reclaiming their memory.

### Example

```java
Student s = new Student();

s = null;
```

If no other live reference can reach the `Student` object, it may become **eligible for garbage collection**.

Conceptually:

```text
Before:

s ─────→ Student object


After:

s ─────→ null

Student object
      ↓
No reachable reference
      ↓
Eligible for GC
```

### Important Point

**Eligible for GC does not mean immediately collected.**

The JVM decides when and how garbage collection occurs.

### Interview Answer

> Garbage collection is the JVM's automatic memory-management process that reclaims memory occupied by objects that are no longer reachable.

---

## Q85. How does Java's garbage collector work at a high level?

### Definition

At a high level, garbage collection identifies **reachable** and **unreachable** objects.

### Basic Process

```text
Objects in Heap
      ↓
Find reachable objects
      ↓
Unreachable objects = garbage
      ↓
Reclaim memory
      ↓
Optionally move/compact live objects
```

### Step 1 — Find Reachable Objects

The GC starts from **GC roots**, which can include:

- Active thread stacks
- Static references
- JNI references
- Other JVM-managed roots

It determines which objects are reachable.

### Step 2 — Identify Garbage

Objects that cannot be reached from GC roots are considered garbage.

### Example

```text
GC Root
  ↓
Object A
  ↓
Object B

Object C

Object C is not reachable
→ eligible for GC
```

### Step 3 — Reclaim Memory

The collector reclaims memory occupied by unreachable objects.

### Step 4 — Compact or Move Objects

Depending on the collector, live objects may be moved or compacted to reduce fragmentation and improve allocation efficiency.

### Important Point

Java has different garbage collectors, and their exact algorithms differ.

Examples include:

```text
G1
Parallel GC
ZGC
Shenandoah
```

### Interview Answer

> At a high level, the GC identifies objects reachable from GC roots, treats unreachable objects as garbage, reclaims their memory, and depending on the collector may move or compact live objects.

---

## Q86. What is the difference between stack, heap, and method-area memory?

### 1. Stack

Each Java thread has its own JVM stack.

It contains **stack frames** for method calls.

A frame can contain:

- Local variables
- Operand stack
- References
- Method invocation information

### Example

```java
void calculate() {
    int x = 10;
    int y = 20;
}
```

`x` and `y` are local variables associated with the method's stack frame.

### Important Point

Each thread has its **own stack**.

### 2. Heap

The **heap** is the runtime memory area where objects and arrays are allocated.

Example:

```java
Student s = new Student();
```

Conceptually:

```text
Stack                    Heap

s ───────────────→     Student object
```

The reference variable `s` is associated with the current stack frame, while the object is allocated on the heap.

The heap is the primary memory area managed by garbage collection.

### 3. Method Area

The JVM specification defines the **method area** as a runtime data area that stores per-class and per-interface structures.

It can contain:

- Class metadata
- Method information
- Runtime constant pool
- Field information
- Method bytecode

The exact implementation is JVM-dependent.

### HotSpot Note

In modern HotSpot JVMs, the method area is implemented using **Metaspace**, which uses native memory.

### Comparison

| Stack | Heap | Method Area |
|---|---|---|
| Per-thread | Shared among threads | Shared |
| Stores stack frames/local execution data | Stores objects and arrays | Stores class/interface metadata |
| Frames are created/removed with method execution | Managed primarily by GC | Managed by JVM/class unloading mechanisms |
| Thread-specific | Shared | Shared |

### Interview Trap

Do not say:

> All primitive variables are stored on the stack.

That is an oversimplification. Local primitive variables are commonly associated with stack frames, but primitive fields can be part of objects stored on the heap. Exact physical behavior is JVM implementation dependent.

---

## Q87. What are minor GC and major/full GC?

### Definition

These terms describe garbage-collection events based on the memory regions/generations involved.

Traditionally, generational collectors divide the heap into:

```text
Young Generation
├── Eden
├── Survivor
└── Survivor

Old Generation
```

### Minor GC

A **minor GC** traditionally refers to collection of the **young generation**.

Conceptually:

```text
New objects
    ↓
Young Generation
    ↓
Minor GC
    ↓
Dead objects removed
    ↓
Some surviving objects promoted
```

Minor collections are generally more frequent and often shorter than old-generation collections, although exact behavior depends on the collector.

### Major GC

The term **major GC** is commonly used for a collection involving the **old generation**.

However, terminology is not completely standardized across all JVM garbage collectors.

### Full GC

A **full GC** generally means a collection involving a much broader portion of the heap, often including both young and old regions. Depending on the JVM/collector, other memory areas may also be involved.

It is generally more expensive than a young-generation collection.

### Traditional View

```text
Minor GC
→ Young Generation

Major GC
→ Old Generation

Full GC
→ Broad/full heap collection
```

### Important Interview Caveat

Modern collectors such as **G1, ZGC, and Shenandoah** do not always fit neatly into traditional young/old-generation terminology.

A safer interview answer is:

> Traditionally, minor GC refers to young-generation collection, while major GC refers to old-generation collection. Full GC generally involves a much broader heap collection. However, the exact terminology and behavior depend on the garbage collector being used.

---
