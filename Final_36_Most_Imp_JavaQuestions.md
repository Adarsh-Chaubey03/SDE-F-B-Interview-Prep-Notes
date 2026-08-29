# Final Top 36 Java Interview Questions

### Most Important Core Java Revision — SDE Interviews

> **Purpose:** Final revision checklist for Core Java interviews.  
> These 36 questions are the highest-priority unique questions selected from the complete Java preparation set. Each question also covers its important interview follow-ups.

---

## 1. What is the difference between JDK, JRE, and JVM?

### Definition

- **JDK (Java Development Kit):** Used to develop Java applications. It contains the JRE plus development tools such as the Java compiler.
- **JRE (Java Runtime Environment):** Provides the environment required to run Java applications.
- **JVM (Java Virtual Machine):** Executes Java bytecode and provides platform independence.

### Relationship

```text
JDK
└── JRE
    └── JVM
```

### Interview Answer

> JDK is used to develop Java programs, JRE provides the runtime environment, and JVM executes Java bytecode.

### Follow-up

**What makes Java platform independent?**

Java source code is compiled into platform-independent **bytecode**. Each operating system has a JVM capable of executing that bytecode.

---

## 2. Why is Java platform independent?

### Definition

Java is platform independent because Java source code is compiled into **bytecode**, and that bytecode can run on any operating system that has a compatible JVM.

### Flow

```text
Java Source Code
       ↓
    javac
       ↓
    Bytecode
       ↓
      JVM
       ↓
Operating System
```

### Interview Answer

> Java is platform independent because the compiler generates platform-independent bytecode, and the JVM on each operating system executes that bytecode.

---

## 3. What is the difference between primitive and wrapper classes in Java?

### Definition

**Primitive types** store simple values directly, while **wrapper classes** represent those values as objects.

### Primitive Examples

```text
byte, short, int, long
float, double
char
boolean
```

### Wrapper Examples

```text
Byte, Short, Integer, Long
Float, Double
Character
Boolean
```

### Example

```java
int x = 10;
Integer y = 10;
```

`x` is a primitive, while `y` is an object/reference of type `Integer`.

### Important Follow-ups

- `int` → `Integer`
- **Autoboxing:** primitive → wrapper
- **Unboxing:** wrapper → primitive

```java
Integer a = 10;  // autoboxing
int b = a;       // unboxing
```

### Interview Point

> Wrapper classes are useful when an object is required, such as when working with generic collections like `List<Integer>`.

---

## 4. What is the difference between `==` and `.equals()` in Java?

### Definition

- `==` compares primitive values, or compares references when used with objects.
- `.equals()` is a method used to compare object equality according to the class's implementation.

### Example

```java
String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);       // false
System.out.println(a.equals(b));  // true
```

`a` and `b` refer to different objects, but their String contents are equal.

### Interview Trap

For objects:

```text
==       → reference identity
.equals  → logical equality, if implemented accordingly
```

---

## 5. Is Java pass-by-value or pass-by-reference?

### Answer

Java is **always pass-by-value**.

For objects, the value being passed is a **copy of the reference**.

### Example

```java
class Test {
    static void change(int x) {
        x = 20;
    }

    static void changeName(Student s) {
        s.name = "Rahul";
    }
}
```

For primitives, a copy of the value is passed.

For objects, a copy of the reference is passed, so the method can modify the object's state, but reassigning the parameter does not change the caller's reference.

### Interview Answer

> Java is strictly pass-by-value. For objects, the value passed is a copy of the reference, which is why an object's state can be modified but the caller's reference cannot be reassigned through the parameter.

---

# OOP

## 6. What are the four pillars of OOP?

The four pillars are:

1. **Encapsulation**
2. **Inheritance**
3. **Polymorphism**
4. **Abstraction**

### Simple Meaning

| Pillar | Meaning |
|---|---|
| Encapsulation | Bundling data and methods and controlling access |
| Inheritance | Acquiring properties/behavior from another class |
| Polymorphism | Same interface/method call behaving differently |
| Abstraction | Hiding implementation details and exposing essential behavior |

### Interview Answer

> The four pillars of OOP are encapsulation, inheritance, polymorphism, and abstraction.

---

## 7. What is encapsulation?

### Definition

**Encapsulation** means bundling data and the methods that operate on it inside a class and controlling direct access to that data.

Usually, fields are made `private` and accessed through methods.

### Example

```java
class BankAccount {

    private double balance;

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

Here, `balance` cannot be directly modified from outside the class.

### Real-World Example

A bank account does not allow anyone to directly change the balance. You use controlled operations such as deposit or withdrawal.

### Interview Point

> Encapsulation protects an object's internal state by restricting direct access and providing controlled access through methods.

---

## 8. What is abstraction?

### Definition

**Abstraction** means hiding unnecessary implementation details and exposing only the essential functionality.

### Example

```java
abstract class Vehicle {

    abstract void start();
}

class Car extends Vehicle {

    @Override
    void start() {
        System.out.println("Car starts");
    }
}
```

The user knows that the car can `start()`, but the internal implementation is hidden behind the abstraction.

### Real-World Example

When you use an ATM, you perform operations such as withdrawing money without knowing the internal banking and network operations.

### Interview Point

> Abstraction focuses on what an object does rather than how it does it.

---

## 9. What is inheritance?

### Definition

**Inheritance** allows a child class to acquire accessible properties and behavior from a parent class.

### Example

```java
class Animal {

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {

    void bark() {
        System.out.println("Barking");
    }
}
```

Now `Dog` can use:

```java
Dog d = new Dog();

d.eat();
d.bark();
```

### Interview Point

Inheritance represents an **is-a** relationship.

```text
Dog is an Animal
```

### Important Follow-up

Java does not support multiple inheritance of classes, but it supports implementing multiple interfaces.

---

## 10. What is polymorphism?

### Definition

**Polymorphism** means "many forms." The same interface or method call can behave differently depending on the object involved.

Java mainly provides:

1. **Compile-time polymorphism** → method overloading
2. **Runtime polymorphism** → method overriding

### Example — Runtime Polymorphism

```java
class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}

Animal a = new Dog();
a.sound();
```

Output:

```text
Bark
```

The method executed is determined by the actual object at runtime.

### Interview Point

> Polymorphism allows the same method call or interface to represent different behavior depending on the context or actual object.

---

## 11. What is the difference between method overloading and method overriding?

### Method Overloading

Same method name but **different parameter lists** in the same class or related context.

```java
void add(int a, int b) { }

void add(int a, int b, int c) { }
```

It is resolved at compile time.

### Method Overriding

A subclass provides its own implementation of an inherited instance method with a compatible signature.

```java
class Animal {
    void sound() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog");
    }
}
```

It supports runtime polymorphism.

### Comparison

| Overloading | Overriding |
|---|---|
| Different parameter lists | Same method signature |
| Compile-time resolution | Runtime dispatch |
| Usually within the same class | Requires inheritance |
| Return type alone cannot overload | Return type must be compatible |

### Important Follow-ups

**Can we overload only by changing return type?**

No.

```java
int test()
double test()
```

is not valid overloading because the parameter list is the same.

**Can a static method be overridden?**

No. Static methods are hidden, not overridden.

---

## 12. What is the difference between an abstract class and an interface?

### Definition

Both are used to achieve abstraction, but they serve different design purposes.

### Abstract Class

Can contain:

- Abstract methods
- Concrete methods
- Instance variables
- Constructors
- Static members

### Interface

Primarily defines a contract that classes can implement. Modern Java interfaces can also contain:

- Abstract methods
- `default` methods
- `static` methods
- `private` methods

### Comparison

| Abstract Class | Interface |
|---|---|
| Class | Interface |
| Can have instance state | Fields are implicitly `public static final` constants |
| Can have constructors | No constructors |
| Supports abstract and concrete methods | Supports abstract, default, static, and private methods |
| A class extends one class | A class can implement multiple interfaces |

### Example

```java
interface Flyable {
    void fly();
}

class Bird implements Flyable {

    public void fly() {
        System.out.println("Flying");
    }
}
```

### Interview Point

Use an abstract class when closely related classes need shared state/implementation. Use an interface when you want to define a capability or contract that multiple unrelated classes can implement.

---

## 13. What is multiple inheritance? Does Java support it?

### Definition

**Multiple inheritance** means a class inherits from more than one parent class.

Conceptually:

```text
Class C
 ↙     ↘
A       B
```

Java does **not** support multiple inheritance of classes.

### Why?

One major problem is ambiguity, commonly illustrated by the **diamond problem**:

```text
      A
     / \
    B   C
     \ /
      D
```

If both `B` and `C` provide the same method, it becomes ambiguous which implementation `D` should inherit.

### How does Java achieve multiple inheritance of behavior/contracts?

Through interfaces:

```java
interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {

    public void show() { }

    public void display() { }
}
```

### Interview Answer

> Java does not support multiple inheritance of classes because of ambiguity and complexity such as the diamond problem. It supports multiple inheritance of type through interfaces.

---

# Classes & Constructors

## 14. What is a constructor? Difference between constructor and method?

### Definition

A **constructor** is a special member used to initialize an object when it is created.

### Example

```java
class Student {

    String name;

    Student(String name) {
        this.name = name;
    }
}

Student s = new Student("Adarsh");
```

### Constructor vs Method

| Constructor | Method |
|---|---|
| Initializes objects | Performs behavior/operations |
| Same name as class | Can have any valid name |
| Has no return type | Has a return type or `void` |
| Called during object creation | Called explicitly/invoked |
| Cannot be inherited | Methods can be inherited |
| Can be overloaded | Can be overloaded |

### Important Follow-up

If no constructor is declared, the compiler provides a **default constructor** with no parameters, provided the class has no explicitly declared constructor.

---

## 15. What is the difference between `this` and `super`?

### `this`

Refers to the **current object**.

Common uses:

- Access current object's fields
- Call current class constructor using `this()`
- Call current class methods
- Pass current object as an argument

### `super`

Refers to the **parent-class part** of the current object.

Common uses:

- Access parent-class fields
- Call parent-class methods
- Call parent constructor using `super()`

### Example

```java
class Animal {

    String name = "Animal";
}

class Dog extends Animal {

    String name = "Dog";

    void display() {
        System.out.println(this.name);
        System.out.println(super.name);
    }
}
```

Output:

```text
Dog
Animal
```

### Interview Point

```text
this  → current object/class
super → parent-class members
```

---

# `static` & `final`

## 16. What is the `static` keyword?

### Definition

`static` makes a member belong to the **class rather than to individual objects**.

### Static Variable

A static variable is shared among instances of the class.

```java
class Student {

    static String college = "ABC";
}
```

All `Student` objects share the same `college` variable.

### Static Method

```java
class Test {

    static void display() {
        System.out.println("Hello");
    }
}

Test.display();
```

### Static Block

A static block is executed when the class is initialized.

```java
class Test {

    static {
        System.out.println("Static block");
    }
}
```

### Important Follow-up

**Why is `main()` static?**

The JVM needs to invoke `main()` without first creating an object of the class.

### Static Method Limitation

A static method cannot directly access an instance variable because an instance variable belongs to an object.

```java
class Test {

    int x = 10;

    static void show() {
        // System.out.println(x); // invalid
    }
}
```

---

## 17. What is the `final` keyword?

### Definition

`final` is used to restrict modification.

It can be applied to variables, methods, and classes.

### Final Variable

A final variable cannot be reassigned after initialization.

```java
final int x = 10;
// x = 20; // error
```

### Final Method

A final method cannot be overridden by a subclass.

```java
final void display() {
}
```

### Final Class

A final class cannot be extended.

```java
final class Vehicle {
}
```

### Comparison

| Usage | Effect |
|---|---|
| `final` variable | Cannot be reassigned |
| `final` method | Cannot be overridden |
| `final` class | Cannot be extended |

### Important Trap

A final reference cannot be reassigned, but the referenced object's state may still be mutable.

```java
final List<Integer> list = new ArrayList<>();

list.add(10);       // allowed
// list = new ArrayList<>(); // not allowed
```

---

# Strings

## 18. Why is `String` immutable in Java?

### Definition

A `String` is **immutable**, meaning its contents cannot be changed after the object is created.

Operations that appear to modify a String actually create another String.

### Example

```java
String s = "Java";

s.concat(" Programming");

System.out.println(s);
```

Output:

```text
Java
```

Because `concat()` creates a new String and the original String remains unchanged.

Correct:

```java
s = s.concat(" Programming");
```

### Why is String immutable?

Important benefits include:

- Security
- String Pool sharing
- Thread safety
- Stable hash codes
- Safe use as keys in hash-based collections

### Interview Point

> String immutability means that once a String object is created, its character sequence cannot be changed.

---

## 19. Difference between `String`, `StringBuilder`, and `StringBuffer`?

### `String`

Immutable.

Use when the value should not change.

### `StringBuilder`

Mutable and generally preferred for repeated String modifications in **single-threaded** code.

```java
StringBuilder sb = new StringBuilder();

sb.append("Java");
sb.append(" Interview");

System.out.println(sb);
```

### `StringBuffer`

Mutable and synchronized, making it suitable when its synchronization semantics are specifically required.

### Comparison

| String | StringBuilder | StringBuffer |
|---|---|---|
| Immutable | Mutable | Mutable |
| Repeated modification creates new objects | Efficient for repeated modification | Efficient for repeated modification |
| Naturally safe to share due to immutability | Not synchronized | Synchronized |
| General String use | Preferred for single-threaded building | Legacy/synchronized alternative |

### Interview Point

For repeated concatenation in a loop, prefer `StringBuilder` rather than repeatedly creating new `String` objects.

---

# Collections

## 20. Difference between `List`, `Set`, and `Map`?

### Definition

- **List** stores ordered elements and allows duplicates.
- **Set** stores unique elements.
- **Map** stores key-value pairs with unique keys.

### Example

```java
List<Integer> list =
        Arrays.asList(10, 20, 10);

Set<Integer> set =
        new HashSet<>(list);

Map<Integer, String> map =
        new HashMap<>();

map.put(1, "Adarsh");
map.put(2, "Rahul");
```

### Comparison

| Feature | List | Set | Map |
|---|---|---|---|
| Stores | Elements | Elements | Key-value pairs |
| Duplicates | Allowed | Not allowed | Keys not duplicated |
| Index access | Yes | No | No |
| Examples | `ArrayList` | `HashSet` | `HashMap` |

### Interview Trap

`Map` is **not** a subtype of `Collection`.

---

## 21. Difference between `ArrayList` and `LinkedList`?

### Definition

Both implement `List`, but their internal structures differ.

- `ArrayList` → resizable array
- `LinkedList` → doubly linked list

### Comparison

| Feature | ArrayList | LinkedList |
|---|---|---|
| Random access | O(1) | O(n) |
| Internal structure | Dynamic array | Doubly linked list |
| Memory overhead | Lower | Higher |
| Cache locality | Better | Worse |
| Typical use | General-purpose list/random access | Frequent insertion/removal when node is already known |

### Important Complexity Point

For `LinkedList`, saying "insertion is O(1)" is incomplete.

Finding the required position can take O(n). The actual link update is O(1) after reaching the relevant node.

### Interview Answer

> `ArrayList` is usually preferred for general-purpose list usage and random access. `LinkedList` is useful in situations where frequent insertion/removal occurs and the relevant position/node is already known.

---

## 22. How does `HashMap` work internally?

### Definition

`HashMap` stores key-value pairs using a **hash table with buckets**.

### Basic Flow

```text
Key
 ↓
hashCode()
 ↓
Hash/spreading
 ↓
Bucket index
 ↓
Entry
 ↓
Value
```

### Example

```java
HashMap<String, Integer> map = new HashMap<>();

map.put("Adarsh", 90);
```

When `put()` is called, Java:

1. Gets the key's hash code.
2. Applies the implementation's hash-spreading logic.
3. Determines a bucket.
4. Stores the key-value entry.
5. If there is a collision, compares keys using `equals()`.

### Collision Handling

Conceptually:

```text
Bucket
  ↓
Node → Node → Node
```

Modern Java implementations can convert a sufficiently large collision structure into a balanced tree when the required conditions are met.

### `get()`

```text
key
 ↓
hash
 ↓
bucket
 ↓
compare hash/key
 ↓
equals()
 ↓
value
```

### Complexity

Expected average:

```text
put()    → O(1)
get()    → O(1)
remove() → O(1)
```

Severe collisions can degrade performance, while tree bins can improve lookup behavior toward O(log n) for the affected bucket.

### Resizing

When the map crosses its threshold based on:

```text
capacity × load factor
```

the table is resized.

The commonly used default load factor is:

```text
0.75
```

### Interview Answer

> HashMap uses hashing to determine a bucket for each key. It uses `equals()` to distinguish keys when collisions occur. Modern implementations can treeify sufficiently large collision structures.

---

## 23. Difference between `HashMap`, `Hashtable`, and `ConcurrentHashMap`?

### `HashMap`

- Not synchronized
- Allows one `null` key
- Allows `null` values
- General-purpose map

### `Hashtable`

- Synchronized
- Does not allow `null` keys
- Does not allow `null` values
- Legacy class

### `ConcurrentHashMap`

- Designed for concurrent access
- Does not allow `null` keys or values
- Provides better concurrency than using a single global lock around a map

### Comparison

| Feature | HashMap | Hashtable | ConcurrentHashMap |
|---|---|---|---|
| Thread-safe for concurrent access | No | Yes | Yes |
| Null key | One allowed | Not allowed | Not allowed |
| Null values | Allowed | Not allowed | Not allowed |
| Status | Modern/common | Legacy | Modern concurrent collection |
| Main use | General-purpose | Legacy code | Concurrent access |

### Interview Point

Do not automatically use `Hashtable` for new multithreaded code. `ConcurrentHashMap` is generally the more appropriate concurrent map.

---

## 24. Difference between `HashSet`, `LinkedHashSet`, and `TreeSet`?

### Definition

All three implement `Set` and do not allow duplicate elements.

### `HashSet`

- No guaranteed iteration order
- Hash-based
- O(1) expected basic operations

### `LinkedHashSet`

- Maintains insertion order
- Hash-based with linked ordering
- O(1) expected basic operations

### `TreeSet`

- Maintains sorted order
- Tree-based
- O(log n) basic operations

### Comparison

| Feature | HashSet | LinkedHashSet | TreeSet |
|---|---|---|---|
| Order | No guaranteed order | Insertion order | Sorted order |
| Basic operations | O(1) expected | O(1) expected | O(log n) |
| Use when | Fast lookup | Need insertion order | Need sorted data |

### Example

```java
Set<Integer> set = new TreeSet<>();

set.add(30);
set.add(10);
set.add(20);

System.out.println(set);
```

Output:

```text
[10, 20, 30]
```

---

## 25. Why are `equals()` and `hashCode()` related?

### Definition

Hash-based collections such as `HashMap` and `HashSet` rely on both `hashCode()` and `equals()`.

The contract is:

```text
If a.equals(b) is true
        ↓
a.hashCode() == b.hashCode()
```

But:

```text
same hashCode()
        ↓
does NOT guarantee
equals() == true
```

because different objects can have the same hash code.

### Why?

HashMap roughly performs:

```text
hashCode()
    ↓
find bucket
    ↓
equals()
    ↓
find exact key
```

If two logically equal objects produce different hash codes, they can end up in different buckets and the collection may fail to locate the expected key.

### Interview Rule

> Equal objects must have equal hash codes, but equal hash codes do not necessarily mean the objects are equal.

---

# Exception Handling

## 26. What is the difference between checked and unchecked exceptions?

### Checked Exceptions

Checked by the compiler.

They must be handled or declared.

Examples:

```text
IOException
SQLException
ClassNotFoundException
```

### Unchecked Exceptions

Subclasses of `RuntimeException`.

The compiler does not require them to be caught or declared.

Examples:

```text
NullPointerException
ArithmeticException
ArrayIndexOutOfBoundsException
NumberFormatException
```

### Comparison

| Checked | Unchecked |
|---|---|
| Compiler checks them | Compiler does not require handling |
| Must be handled or declared | Handling/declaring is optional |
| `Exception` excluding `RuntimeException` subclasses | `RuntimeException` and subclasses |

### Interview Answer

> Checked exceptions are compiler-checked and must be handled or declared. Unchecked exceptions are RuntimeException subclasses and do not have that compiler requirement.

---

## 27. Difference between `throw` and `throws`?

### `throw`

Actually throws an exception object.

```java
if (age < 18) {
    throw new IllegalArgumentException("Invalid age");
}
```

### `throws`

Declares that a method may propagate an exception.

```java
void readFile() throws IOException {
    // code
}
```

### Comparison

| `throw` | `throws` |
|---|---|
| Actually throws an exception | Declares possible exceptions |
| Used inside method/block | Used in method/constructor declaration |
| Followed by exception object | Followed by exception types |
| One exception object at a time | Can declare multiple exception types |

### Easy Way to Remember

```text
throw  → do it
throws → declare it
```

---

## 28. What is the difference between Error and Exception?

### Definition

Both are subclasses of `Throwable`.

```text
Throwable
├── Error
└── Exception
```

### Exception

Usually represents an application-level exceptional condition that may be handled.

Examples:

```text
IOException
SQLException
RuntimeException
```

### Error

Usually represents serious JVM/runtime problems that applications generally should not attempt to recover from.

Examples:

```text
OutOfMemoryError
StackOverflowError
NoClassDefFoundError
```

### Interview Point

`Error` can technically be caught because it is a `Throwable`, but catching serious JVM errors is generally not a normal recovery strategy.

---

# JVM & Garbage Collection

## 29. What is garbage collection in Java?

### Definition

**Garbage Collection (GC)** is the JVM's automatic process of reclaiming memory from objects that are no longer reachable.

### Example

```java
Student s = new Student();

s = null;
```

If no other live reference can reach the object, it may become eligible for GC.

### Important Point

```text
Eligible for GC
≠
Immediately collected
```

The JVM decides when and how collection occurs.

### Interview Answer

> Garbage collection automatically reclaims memory occupied by objects that are no longer reachable by the application.

---

## 30. How does Java's garbage collector work at a high level?

### Basic Process

```text
Objects in Heap
      ↓
Start from GC Roots
      ↓
Find reachable objects
      ↓
Unreachable objects = garbage
      ↓
Reclaim memory
      ↓
May move/compact live objects
```

### GC Roots

Examples include:

- Active thread stacks
- Static references
- JNI references
- Other JVM-managed roots

### Important Point

Different collectors use different algorithms.

Examples:

```text
G1
Parallel GC
ZGC
Shenandoah
```

Therefore, there is no single exact GC algorithm that describes every modern Java collector.

### Interview Answer

> The GC identifies objects reachable from GC roots, treats unreachable objects as garbage, reclaims their memory, and depending on the collector may move or compact live objects.

---

## 31. What is the difference between stack, heap, and method-area memory?

### Stack

Each Java thread has its own JVM stack.

It contains stack frames associated with method execution.

```text
Thread
  ↓
Stack
  ↓
Method Frames
  ↓
Local execution data
```

### Heap

The heap is shared among threads and is where objects and arrays are allocated.

```java
Student s = new Student();
```

Conceptually:

```text
Stack                    Heap

s ───────────────→     Student object
```

The heap is the primary memory area managed by GC.

### Method Area

The JVM specification defines the method area as a shared runtime area containing per-class and per-interface structures, such as:

- Class metadata
- Method information
- Runtime constant pool
- Field information
- Method bytecode

### HotSpot

In modern HotSpot JVMs, the method area is implemented using **Metaspace**, which uses native memory.

### Comparison

| Stack | Heap | Method Area |
|---|---|---|
| Per-thread | Shared | Shared |
| Stack frames/local execution data | Objects and arrays | Class/interface metadata |
| Thread-specific | GC-managed | JVM-managed |

### Interview Trap

Do not say:

> All primitive variables are stored on the stack.

That is an oversimplification. Local primitive variables are commonly associated with stack frames, while primitive fields can be part of objects stored on the heap.

---

# Multithreading

## 32. What is a thread, and what is multithreading?

### Thread

A **thread** is a unit of execution within a process.

### Multithreading

**Multithreading** means multiple threads make progress concurrently within a process.

### Example

```java
class Task extends Thread {

    public void run() {
        System.out.println("Task running");
    }
}

Task t1 = new Task();
Task t2 = new Task();

t1.start();
t2.start();
```

Both threads can execute concurrently.

### Interview Point

Threads within the same process share process resources such as heap memory, while each thread has its own execution state and stack.

---

## 33. What is the difference between a process and a thread?

### Definition

A **process** is an independent execution environment.

A **thread** is an execution unit within a process.

### Comparison

| Process | Thread |
|---|---|
| Independent execution environment | Execution unit inside process |
| Own address space | Shares process resources |
| More expensive to create | Generally cheaper to create |
| Inter-process communication is more complex | Threads can communicate through shared memory |
| More isolated | Less isolated |

### Example

```text
Process
│
├── Thread 1
├── Thread 2
└── Thread 3
```

### Interview Answer

> A process has its own address space and resources, while threads run inside a process and share many of its resources.

---

## 34. How do you create a thread in Java? What is the difference between Thread and Runnable?

### Two Traditional Approaches

### Extending `Thread`

```java
class MyThread extends Thread {

    public void run() {
        System.out.println("Task");
    }
}

MyThread t = new MyThread();
t.start();
```

### Implementing `Runnable`

```java
class MyTask implements Runnable {

    public void run() {
        System.out.println("Task");
    }
}

Thread t = new Thread(new MyTask());
t.start();
```

### Comparison

| Thread | Runnable |
|---|---|
| Class | Interface |
| Extends `Thread` | Implements `Runnable` |
| Cannot extend another class | Can extend another class |
| Couples task with thread | Separates task from execution |

### Preferred Approach

`Runnable` is generally more flexible.

For production applications, higher-level concurrency tools such as `ExecutorService` are often preferred.

### Interview Answer

> A thread can be created by extending `Thread` or implementing `Runnable`. `Runnable` is generally preferred because it separates the task from the execution mechanism and preserves the ability to extend another class.

---

## 35. What is the difference between `start()` and `run()`?

### `start()`

Starts a new thread of execution.

```java
t.start();
```

The JVM eventually invokes `run()` on that new thread.

### `run()`

Contains the task logic.

```java
public void run() {
    System.out.println("Task");
}
```

If called directly:

```java
t.run();
```

it is simply a normal method call on the current thread.

### Comparison

| `start()` | `run()` |
|---|---|
| Starts a new thread | Normal method invocation when called directly |
| Creates a new execution path | Executes on calling thread when called directly |
| JVM invokes `run()` on new thread | Contains the task |

### Interview Trap

```java
t.run();
```

does **not** create a new thread.

A `Thread` instance cannot be successfully started more than once.

---

## 36. What are synchronization, race condition, deadlock, and thread safety? How does `synchronized` help?

### Synchronization

Synchronization coordinates access to shared mutable state so that critical sections can be executed safely.

```java
synchronized void increment() {
    count++;
}
```

### Race Condition

A race condition occurs when the result depends on the timing/interleaving of multiple threads accessing shared state.

Example:

```java
count++;
```

is not a single atomic operation.

Conceptually:

```text
read
+
increment
+
write
```

Two threads can interfere and cause a lost update.

### Deadlock

A deadlock occurs when threads wait indefinitely for locks held by each other.

```text
Thread 1 → Lock A → waits for Lock B

Thread 2 → Lock B → waits for Lock A
```

### Four Coffman Conditions

1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait

### Thread Safety

Code is **thread-safe** when it maintains correct behavior under concurrent access according to its intended contract.

Thread safety can be achieved through:

- Synchronization
- Locks
- Atomic classes
- Concurrent collections
- Immutability
- Thread confinement

### `synchronized`

`synchronized` provides monitor-based synchronization.

```java
synchronized (lock) {
    count++;
}
```

It provides:

- Mutual exclusion
- Visibility guarantees
- Ordering guarantees through the Java Memory Model

### Important Follow-up: `volatile`

`volatile` provides visibility and ordering guarantees for a shared variable, but **does not provide mutual exclusion** and does not make compound operations such as `count++` atomic.

```java
volatile int count;

// count++ is still not atomic
```

Use synchronization or `AtomicInteger` when atomic compound updates are required.

### Important Follow-up: `sleep()`, `wait()`, `join()`

| Method | Purpose | Releases Monitor? |
|---|---|---|
| `sleep()` | Pause current thread | No |
| `wait()` | Wait for notification/condition | Yes |
| `join()` | Wait for another thread to terminate | Does not inherently release locks held by current thread |

### Examples

```java
Thread.sleep(1000);
```

→ Current thread pauses.

```java
synchronized (lock) {
    lock.wait();
}
```

→ Current thread waits and releases that object's monitor.

```java
t.start();
t.join();
```

→ Current thread waits for `t` to finish.

---
