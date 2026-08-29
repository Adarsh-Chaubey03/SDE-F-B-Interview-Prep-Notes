# Java Keywords and Modifiers

## Q46. What is the `static` keyword?

### Definition
`static` means that a member belongs to the **class itself rather than to individual objects**.

It can be used with:

- Variables
- Methods
- Blocks
- Nested classes

### Example

```java
class Student {
    static String college = "ABC College";
    String name;
}
```

`college` is shared by all `Student` objects.

It can be accessed using the class name:

```java
System.out.println(Student.college);
```

### Static Method Example

```java
class MathUtil {
    static int square(int x) {
        return x * x;
    }
}
```

Usage:

```java
int result = MathUtil.square(5);
```

No object is required to call the static method.

### Interview Point

> A static member belongs to the class and can generally be accessed using the class name without creating an object.

---

## Q47. Why is the `main()` method static?

### Definition
The standard Java entry point is:

```java
public static void main(String[] args)
```

`main()` is static because the JVM needs to invoke it **without first creating an object of the class**.

If `main()` were an instance method, an object would have to be created before the program could start.

### Example

```java
class Main {
    public static void main(String[] args) {
        System.out.println("Program started");
    }
}
```

Conceptually:

```text
JVM
 ↓
Main.main()
 ↓
Program starts
```

### Interview Answer

> `main()` is static because it is the entry point of a Java application and the JVM needs to invoke it without creating an instance of the class first.

### Follow-up

For a conventional standalone Java application, the JVM expects the standard `main` entry point.

---

## Q48. Can a static method access non-static variables directly?

### Answer
**No.**

A static method belongs to the class, while a non-static variable belongs to an object.

### Example

```java
class Student {
    int age = 21;

    static void display() {
        System.out.println(age);  // Compile-time error
    }
}
```

A static method has no implicit current object, so it cannot directly access an instance variable.

### How can it access it?

Through an object/reference:

```java
class Student {
    int age = 21;

    static void display(Student s) {
        System.out.println(s.age);
    }
}
```

Usage:

```java
Student s = new Student();
Student.display(s);
```

### Interview Point

> A static method can directly access static members, but it cannot directly access instance members.

---

## Q49. What is a static variable?

### Definition
A **static variable** is a class-level variable shared by all objects of that class.

### Example

```java
class Student {
    static String college = "ABC";
    String name;
}
```

All `Student` objects share the same `college` variable.

It is better to access it through the class:

```java
System.out.println(Student.college);
```

### Example — Object Counter

```java
class Student {
    static int count = 0;

    Student() {
        count++;
    }
}
```

Usage:

```java
new Student();
new Student();
new Student();

System.out.println(Student.count);
```

Output:

```text
3
```

### Common Uses

Static variables are useful for:

- Shared configuration
- Object counters
- Class-level state
- Constants when combined with `final`

---

## Q50. What is a static block?

### Definition
A **static block** is a block of code declared using `static` that executes when the class is initialized.

It is commonly used for class-level initialization.

### Example

```java
class Test {

    static {
        System.out.println("Static block executed");
    }

    public static void main(String[] args) {
        System.out.println("Main method");
    }
}
```

Output:

```text
Static block executed
Main method
```

The static initialization occurs before `main()` executes when the class is initialized.

### Multiple Static Blocks

```java
class Test {

    static {
        System.out.println("Block 1");
    }

    static {
        System.out.println("Block 2");
    }
}
```

They execute in source-code order during class initialization.

### Static Block vs Constructor

| Static Block | Constructor |
|---|---|
| Associated with class initialization | Associated with object construction |
| Runs during class initialization | Runs when an object is created |
| Class initialization normally happens once per class loader | Runs for each object creation |
| Cannot directly use instance members | Can access instance members |

### Interview Point

A static block executes when the class is initialized; it is not simply executed whenever the `.class` file exists.

---

## Q51. What is the `final` keyword?

### Definition
`final` is used to restrict modification or extension.

It can be applied to:

- Variables
- Methods
- Classes

### Example — Final Variable

```java
final int MAX = 100;

MAX = 200;  // Error
```

A final variable cannot be reassigned after initialization.

### Final Method

```java
class Parent {
    final void show() {
        System.out.println("Parent");
    }
}
```

A subclass cannot override `show()`.

### Final Class

```java
final class Vehicle {
}
```

Another class cannot extend `Vehicle`.

### Interview Point

The meaning of `final` depends on what it is applied to:

```text
final variable → cannot be reassigned
final method   → cannot be overridden
final class    → cannot be extended
```

---

## Q52. Difference between final variable, final method, and final class?

### Answer

### 1. Final Variable

A final variable cannot be reassigned after initialization.

```java
final int x = 10;

x = 20;  // Error
```

### 2. Final Method

A final method cannot be overridden by a subclass.

```java
class Parent {
    final void show() {
        System.out.println("Parent");
    }
}
```

### 3. Final Class

A final class cannot be extended.

```java
final class Parent {
}
```

```java
class Child extends Parent {  // Error
}
```

### Comparison

| `final` Usage | Meaning |
|---|---|
| Final variable | Cannot be reassigned |
| Final method | Cannot be overridden |
| Final class | Cannot be extended |

### Important Trap — Final Reference

```java
final Student s = new Student();
```

This does not automatically make the `Student` object immutable.

You cannot reassign the reference:

```java
s = new Student();  // Error
```

But you may be able to modify the object's fields:

```java
s.name = "Adarsh";
```

So:

> A final reference cannot point to another object, but the referenced object may still be mutable.

---

## Q53. Can a final method be overridden?

### Answer
**No.**

A `final` method cannot be overridden by a subclass.

### Example

```java
class Parent {

    final void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {

    @Override
    void display() {
        System.out.println("Child");
    }
}
```

This produces a compile-time error.

### Why?

The `final` keyword prevents subclasses from changing the method's implementation through overriding.

### Important Point

A final method can still be **inherited** if it is accessible.

It simply cannot be **overridden**.

---

## Q54. What is the `super` keyword?

### Definition
`super` refers to the **immediate superclass portion of the current object**.

It is commonly used to:

1. Access superclass fields
2. Call superclass methods
3. Call superclass constructors

### 1. Access Superclass Variable

```java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;

    void display() {
        System.out.println(x);
        System.out.println(super.x);
    }
}
```

Output:

```text
20
10
```

`x` refers to the child field, while `super.x` refers to the parent field.

### 2. Call Superclass Method

```java
class Parent {
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {

    @Override
    void show() {
        System.out.println("Child");
        super.show();
    }
}
```

Output:

```text
Child
Parent
```

`super.show()` explicitly calls the superclass implementation.

### 3. Call Superclass Constructor

```java
class Parent {

    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {

    Child() {
        super();
        System.out.println("Child constructor");
    }
}
```

Output:

```text
Parent constructor
Child constructor
```

### Important Rule

A `super(...)` constructor call must be the **first statement** in a constructor.

---

## Q55. Difference between `this` and `super`?

### Definition

- `this` refers to the **current object**.
- `super` refers to the **immediate superclass portion of the current object**.

### Comparison

| `this` | `super` |
|---|---|
| Refers to current object | Refers to immediate superclass |
| Accesses current class members | Accesses superclass members |
| `this.x` → current class field | `super.x` → superclass field |
| `this()` calls another constructor in the same class | `super()` calls superclass constructor |
| `this.method()` calls a method through the current object | `super.method()` explicitly calls superclass implementation |

### Example

```java
class Parent {
    int x = 10;

    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    int x = 20;

    void display() {
        System.out.println(this.x);
        System.out.println(super.x);

        this.show();
        super.show();
    }
}
```

Here:

```text
this.x   → Child's x
super.x  → Parent's x
```

And:

```text
this.show()   → normal method lookup from the current object
super.show()  → explicitly calls Parent's implementation
```

### Constructor Example

```java
class Parent {
    Parent(int x) {
        System.out.println(x);
    }
}

class Child extends Parent {

    Child() {
        super(10);
    }
}
```

Here `super(10)` calls the parent constructor.

---
