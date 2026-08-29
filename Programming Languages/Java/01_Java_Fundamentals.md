# Java Fundamentals

## Q1. What are the main features of Java?

### Answer
Java is a high-level, class-based, object-oriented, statically typed programming language. Its important features are:

- **Platform independent** — Java code is compiled into bytecode that can run on different operating systems through the JVM.
- **Object-oriented** — Supports encapsulation, inheritance, polymorphism, and abstraction.
- **Robust** — Provides exception handling, strong type checking, and garbage collection.
- **Secure** — Avoids direct pointer manipulation and provides bytecode verification and runtime checks.
- **Multithreaded** — Provides built-in support for concurrent execution using threads.
- **Portable** — The same bytecode can be used across systems with compatible JVMs.
- **Automatic memory management** — Garbage collection automatically reclaims memory from unreachable objects.
- **High performance** — The JVM can use JIT compilation to convert frequently executed bytecode into native machine code.

### Example
```java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```

**Interview point:** Java is not purely object-oriented because it also has primitive data types such as `int`, `char`, and `boolean`.

---

## Q2. Why is Java platform independent?

### Answer
Java is platform independent because Java source code is compiled into **bytecode**, not directly into machine code for a particular operating system.

The bytecode is executed by the **JVM**. Each operating system has its own JVM implementation, but the same Java bytecode can run on all of them.

```text
Java Source Code
       ↓
     javac
       ↓
   Bytecode (.class)
       ↓
      JVM
   ↙    ↓    ↘
Windows Linux macOS
```

This is commonly described as:

> **Write Once, Run Anywhere (WORA).**

### Example
```java
class Test {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

`Test.java` is compiled into `Test.class`. The `.class` file can run on Windows, Linux, or macOS if a compatible JVM is available.

**Important:** The **bytecode is platform independent**, while the **JVM is platform dependent**.

---

## Q3. What is the difference between JDK, JRE, and JVM?

### Answer

- **JVM (Java Virtual Machine):** Executes Java bytecode and provides the runtime environment for the program.
- **JRE (Java Runtime Environment):** Provides the JVM and the runtime components/libraries needed to run Java applications.
- **JDK (Java Development Kit):** Provides tools required to develop Java applications, along with the runtime components.

Conceptually:

```text
JDK
 ├── Development Tools
 └── Runtime Environment
      ├── JVM
      └── Runtime Libraries
```

### Example

To compile:

```bash
javac Main.java
```

`javac` is a JDK development tool.

To run:

```bash
java Main
```

The JVM executes the resulting bytecode.

### Quick comparison

| Component | Purpose |
|---|---|
| JVM | Executes bytecode |
| JRE | Provides environment to run Java programs |
| JDK | Provides tools to develop and run Java programs |

**Interview point:** Since Java 11, a separate downloadable JRE distribution is no longer provided by Oracle in the traditional form, but the JDK/JRE/JVM distinction remains useful conceptually.

---

## Q4. What happens when you compile and run a Java program?

### Answer
When a Java program is compiled and executed, the following major steps occur:

1. The `.java` source file is compiled by `javac`.
2. The compiler produces a `.class` file containing bytecode.
3. The JVM starts and loads the required class.
4. The bytecode is verified.
5. The class is linked and initialized as required.
6. The JVM invokes the `main()` method.
7. The bytecode is executed, using interpretation and/or JIT compilation.

### Example

```java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

Compile:

```bash
javac Main.java
```

Result:

```text
Main.class
```

Run:

```bash
java Main
```

Output:

```text
Hello
```

### Flow

```text
Main.java
   ↓
javac
   ↓
Main.class
   ↓
JVM
   ↓
Class Loading
   ↓
Verification / Linking / Initialization
   ↓
main()
   ↓
Execution
```

---

## Q5. Why is Java called an object-oriented programming language?

### Answer
Java is called object-oriented because it supports the major principles of Object-Oriented Programming (OOP):

1. **Encapsulation** — Bundling data and methods together and controlling access to data.
2. **Inheritance** — A class can inherit properties and methods from another class.
3. **Polymorphism** — The same reference or interface can represent different implementations.
4. **Abstraction** — Hiding implementation details and exposing only essential behavior.

### Example

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

Here, `Dog` inherits from `Animal`, and method overriding demonstrates runtime polymorphism.

**Interview point:** Java is object-oriented but not purely object-oriented because primitive types such as `int` and `boolean` are not objects.

---

## Q6. What is the difference between primitive and non-primitive data types in Java?

### Answer

**Primitive data types** directly represent basic values. Java has 8 primitive types.

Examples:

```java
int age = 21;
double salary = 50000.5;
boolean passed = true;
char grade = 'A';
```

**Non-primitive/reference types** represent references to objects or arrays.

Examples:

```java
String name = "Adarsh";
int[] numbers = {1, 2, 3};
```

### Comparison

| Primitive | Non-primitive / Reference |
|---|---|
| Represents a basic value | Refers to an object, array, etc. |
| 8 built-in types | Classes, arrays, interfaces, enums, etc. |
| Cannot be `null` | Can be `null` |
| Examples: `int`, `double` | Examples: `String`, arrays, objects |

**Interview point:** `String` is a class, not a primitive type.

---

## Q7. What are all the primitive data types in Java?

### Answer
Java has **8 primitive data types**:

| Type | Size | Example |
|---|---:|---|
| `byte` | 8 bits | `byte x = 10;` |
| `short` | 16 bits | `short x = 100;` |
| `int` | 32 bits | `int x = 1000;` |
| `long` | 64 bits | `long x = 1000L;` |
| `float` | 32 bits | `float x = 10.5f;` |
| `double` | 64 bits | `double x = 10.5;` |
| `char` | 16 bits | `char c = 'A';` |
| `boolean` | JVM-dependent representation | `boolean b = true;` |

They can be grouped as:

- **Integer:** `byte`, `short`, `int`, `long`
- **Floating point:** `float`, `double`
- **Character:** `char`
- **Boolean:** `boolean`

### Example

```java
int age = 21;
long population = 1000000L;
float percentage = 95.5f;
double price = 99.99;
char grade = 'A';
boolean passed = true;
```

**Important:** `char` is a 16-bit unsigned UTF-16 code unit.

---

## Q8. What is the difference between `int` and `Integer`?

### Answer

`int` is a **primitive data type**, while `Integer` is the **wrapper class** for `int`.

```java
int a = 10;
Integer b = 10;
```

### Main differences

| `int` | `Integer` |
|---|---|
| Primitive | Wrapper class |
| Stores an integer value | Object representing an integer |
| Cannot be `null` | Can be `null` |
| Cannot be used directly as a generic type | Can be used in generics |
| Generally lower overhead | Has object/reference overhead |

### Example

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(10);
```

We cannot write:

```java
List<int> numbers;   // Invalid
```

because Java generics use reference types.

### Important example

```java
Integer x = null;
```

is valid, but:

```java
int x = null;
```

is invalid.

---

## Q9. What are autoboxing and unboxing?

### Answer

**Autoboxing** is the automatic conversion of a primitive value into its corresponding wrapper object.

```java
int x = 10;
Integer y = x;
```

Conceptually:

```text
int → Integer
```

**Unboxing** is the automatic conversion of a wrapper object into its corresponding primitive value.

```java
Integer x = 10;
int y = x;
```

Conceptually:

```text
Integer → int
```

### Example with collections

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(10);
```

The `int` literal `10` is automatically boxed into an `Integer`.

### Important trap

```java
Integer x = null;
int y = x;
```

This causes a `NullPointerException` because Java tries to unbox `null`.

### Interview follow-up

Wrapper objects such as `Integer` may use cached instances. For `Integer`, values from `-128` to `127` are guaranteed to be cached.

Therefore, do not use `==` to compare wrapper values; use `.equals()` for logical equality.

---

## Q10. What is type casting in Java?

### Answer
Type casting means converting a value from one compatible data type to another.

There are two major forms:

### 1. Widening casting
A smaller compatible numeric type is converted to a larger type. It is generally automatic.

```java
int x = 10;
long y = x;
```

```text
int → long
```

### 2. Narrowing casting
A larger numeric type is converted to a smaller type. It requires an explicit cast and may lose information.

```java
double x = 10.99;
int y = (int) x;
```

Output:

```text
10
```

The decimal part is discarded; it is not rounded.

### Reference casting

Casting can also occur between related reference types:

```java
Animal a = new Dog();
Dog d = (Dog) a;
```

If the actual object is not compatible with the target type, a `ClassCastException` can occur.

---

## Q11. What is the difference between implicit and explicit type casting?

### Answer

**Implicit casting** happens automatically when Java can safely perform the conversion, commonly during widening numeric conversions.

```java
int x = 10;
long y = x;
```

No cast is required.

**Explicit casting** requires the programmer to specify the target type using parentheses.

```java
double x = 10.99;
int y = (int) x;
```

### Why is explicit casting required?

Because narrowing conversions can lose information.

```java
long x = 10000000000L;
int y = (int) x;
```

The resulting `int` may not represent the original value correctly.

### Common interview trap

```java
int x = 10;
int y = 3;

double result = x / y;
```

Result:

```text
3.0
```

because `x / y` is integer division before the result is assigned to `double`.

To obtain decimal division:

```java
double result = (double) x / y;
```

---

## Q12. What is the difference between `==` and `.equals()` in Java?

### Answer

For **primitive types**, `==` compares values.

```java
int a = 10;
int b = 10;

System.out.println(a == b);  // true
```

For **objects**, `==` compares reference identity — whether two references refer to the same object.

```java
String a = new String("Hello");
String b = new String("Hello");

System.out.println(a == b);       // false
System.out.println(a.equals(b));  // true
```

`equals()` is a method used for **logical equality**, according to the implementation of the class. `String` overrides it to compare string contents.

### Important rule

Use:

```java
a.equals(b)
```

when you want logical/value equality between objects.

Use:

```java
a == b
```

when you intentionally want to check reference identity.

### String pool example

```java
String a = "Hello";
String b = "Hello";

System.out.println(a == b);  // true
```

This can happen because identical string literals may refer to the same interned string.

Therefore, do not rely on `==` for comparing string contents.

### `equals()` and `hashCode()`

If a class overrides `equals()`, it should maintain the `equals()`/`hashCode()` contract:

> If two objects are equal according to `equals()`, they must have the same `hashCode()`.

This is important for `HashMap` and `HashSet`.

---

## Q13. What is the difference between stack memory and heap memory?

### Answer
The **stack** is associated with each thread and stores method execution frames, including local variables and other execution-related information.

The **heap** is the shared JVM memory area where objects and arrays are generally allocated.

### Example

```java
class Student {
    int age;
}

public class Main {
    public static void main(String[] args) {
        int x = 10;
        Student s = new Student();
    }
}
```

Conceptually:

```text
Stack                         Heap

x = 10

s ───────────────────────→ Student object
                            age = 0
```

### Comparison

| Stack | Heap |
|---|---|
| Per-thread | Shared among JVM threads |
| Contains method frames/local execution state | Generally contains objects and arrays |
| Frames are tied to method calls | Objects can outlive a particular method call |
| Can result in `StackOverflowError` | Can result in `OutOfMemoryError` |

### Important nuance

Do not say:

> "All primitives are stored on the stack and all objects are stored on the heap."

That is an oversimplification. For example, a primitive field such as `age` is part of its containing object.

The exact physical memory layout is JVM-implementation dependent.

---

## Q14. What is a wrapper class?

### Answer
A wrapper class is a class that represents a primitive value as an object.

Java provides wrapper classes for all 8 primitive types:

| Primitive | Wrapper |
|---|---|
| `byte` | `Byte` |
| `short` | `Short` |
| `int` | `Integer` |
| `long` | `Long` |
| `float` | `Float` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |

### Why are wrapper classes needed?

One major reason is that Java generics and collections work with reference types.

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(10);
```

`int` cannot be used directly:

```java
List<int> numbers;   // Invalid
```

### Example

```java
int x = Integer.parseInt("123");

System.out.println(Integer.MAX_VALUE);
```

Wrapper classes also allow a value such as `null`:

```java
Integer x = null;
```

whereas:

```java
int x = null;  // Invalid
```

---

## Q15. Is Java pass-by-value or pass-by-reference? Explain with an example.

### Answer
**Java is always pass-by-value.**

For primitives, Java passes a copy of the primitive value.

```java
static void change(int x) {
    x = 100;
}

public static void main(String[] args) {
    int a = 10;
    change(a);

    System.out.println(a);
}
```

Output:

```text
10
```

The method receives a copy of `a`, so changing `x` does not change `a`.

### What about objects?

For objects, Java passes a **copy of the reference value**.

```java
class Student {
    int marks;
}

static void change(Student s) {
    s.marks = 100;
}

public static void main(String[] args) {
    Student st = new Student();
    st.marks = 50;

    change(st);

    System.out.println(st.marks);
}
```

Output:

```text
100
```

Both `st` and the method parameter `s` refer to the same object, so modifying the object's field is visible outside the method.

However, reassigning the parameter does not change the original reference:

```java
static void change(Student s) {
    s = new Student();
    s.marks = 100;
}
```

The caller's reference still points to the original object.

### Interview-ready conclusion

> Java is strictly pass-by-value. For objects, the value being passed is a copy of the reference, not the object itself and not a reference passed by reference.
