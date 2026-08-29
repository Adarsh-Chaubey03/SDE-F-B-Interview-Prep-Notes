# Object-Oriented Java Programming

## Q16. What are the four pillars of OOP?

### Answer
The four pillars of Object-Oriented Programming are:

1. **Encapsulation** — Wrapping data and methods together and controlling access to the data.
2. **Inheritance** — Acquiring properties and behavior from an existing class.
3. **Polymorphism** — One interface/reference behaving differently depending on the object or context.
4. **Abstraction** — Hiding implementation details and exposing only essential functionality.

### Example

```java
class Animal {
    private String name;       // Encapsulation

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {     // Inheritance
    @Override
    void eat() {
        System.out.println("Dog is eating");
    }
}
```

Here:

- `private` → encapsulation
- `extends` → inheritance
- `eat()` behaving differently → polymorphism
- Hiding implementation details → abstraction

---

## Q17. Explain encapsulation with a real-world example.

### Answer
**Encapsulation** means bundling data and the methods that operate on that data into a class and restricting direct access to the internal state.

It is commonly achieved using:

- `private` fields
- `public` or controlled methods

### Real-world example
Consider a **bank account**. A user should not be able to directly change the account balance. Instead, the balance should be changed through controlled operations such as `deposit()` and `withdraw()`.

### Java Example

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

Usage:

```java
BankAccount account = new BankAccount();

account.deposit(5000);

System.out.println(account.getBalance());
```

This is invalid:

```java
account.balance = -5000;
```

because `balance` is `private`.

**Interview point:** Encapsulation is not simply making variables private. The main idea is **controlled access to internal state**.

---

## Q18. Explain inheritance with a Java example.

### Answer
**Inheritance** allows one class to acquire accessible properties and methods of another class.

It represents an **IS-A relationship**.

For example:

```text
Dog IS-A Animal
```

Java uses the `extends` keyword for class inheritance.

### Java Example

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

Usage:

```java
Dog d = new Dog();

d.eat();   // inherited method
d.bark();  // Dog's own method
```

Here:

- `Animal` → parent/superclass
- `Dog` → child/subclass

### Interview point
Constructors are **not inherited**, and `private` members are not directly accessible from the subclass.

---

## Q19. Explain polymorphism with a Java example.

### Answer
**Polymorphism means "many forms."** It allows the same method name, reference, or interface to represent different behavior depending on the situation.

The two major forms are:

1. **Compile-time polymorphism** → method overloading
2. **Runtime polymorphism** → method overriding

### Java Example

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

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}
```

Usage:

```java
Animal a;

a = new Dog();
a.sound();     // Bark

a = new Cat();
a.sound();     // Meow
```

The reference type is `Animal`, but the actual object determines which overridden method executes.

**Interview point:** Runtime polymorphism through overridden instance methods is called **dynamic method dispatch**.

---

## Q20. Explain abstraction with a Java example.

### Answer
**Abstraction means hiding implementation details and exposing only the essential functionality.**

A real-world example is an ATM. You use operations such as withdrawing money without knowing the internal banking implementation.

### Java Example

```java
abstract class Animal {
    abstract void sound();

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}
```

Here, `Animal` specifies that a `sound()` method must exist, while `Dog` provides the implementation.

Abstraction can be achieved using:

- Abstract classes
- Interfaces

---

## Q21. What is the difference between abstraction and encapsulation?

### Answer

| Abstraction | Encapsulation |
|---|---|
| Hides implementation details | Controls access to internal state |
| Focuses on **what** an object does | Focuses on **how access is controlled** |
| Commonly achieved using interfaces/abstract classes | Commonly achieved using access modifiers and methods |
| Design-level concept | Data/state protection mechanism |

### Example

```java
class Car {
    private int speed;

    public void accelerate() {
        speed += 10;
    }
}
```

**Encapsulation:** `speed` is private and cannot be directly modified from outside.

**Abstraction:** The user calls `accelerate()` without needing to know how the speed is internally changed.

### Easy way to remember

> **Abstraction = What to expose.**  
> **Encapsulation = How to protect/control it.**

---

## Q22. What is the difference between inheritance and composition?

### Answer

**Inheritance** represents an **IS-A** relationship.

```java
class Dog extends Animal {
}
```

Here:

```text
Dog IS-A Animal
```

**Composition** represents a **HAS-A** relationship, where one class contains an object of another class.

### Composition Example

```java
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Car {
    private Engine engine = new Engine();

    void startCar() {
        engine.start();
    }
}
```

Here:

```text
Car HAS-A Engine
```

### Comparison

| Inheritance | Composition |
|---|---|
| IS-A relationship | HAS-A relationship |
| Uses `extends` | Uses object/member references |
| Creates stronger coupling | Usually more flexible |
| Reuse through inheritance | Reuse through contained objects |

### Interview point

A common design principle is:

> **Favor composition over inheritance when inheritance does not represent a strong, stable IS-A relationship.**

Composition is not always better; inheritance is appropriate when a genuine subtype relationship exists.

---

## Q23. What is method overloading?

### Answer
**Method overloading** means defining multiple methods with the same name but different parameter lists.

The parameter difference can be in:

- Number of parameters
- Parameter types
- Parameter order

### Example

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}
```

All methods are named `add()`, but their parameter lists are different.

### Interview point

Changing only the return type does **not** create a valid overloaded method.

---

## Q24. What is method overriding?

### Answer
**Method overriding occurs when a subclass provides its own implementation of an inherited overridable instance method with the same signature.**

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
```

Usage:

```java
Animal a = new Dog();
a.sound();
```

Output:

```text
Bark
```

### Important rules

- Same method name
- Same parameter list
- Return type must be the same or compatible (covariant)
- Visibility cannot be reduced
- The method must be overridable

Use `@Override` so the compiler can verify the overriding relationship.

---

## Q25. Difference between method overloading and method overriding?

### Answer

| Overloading | Overriding |
|---|---|
| Same method name, different parameter list | Same method signature in subclass |
| Usually occurs within the same class | Requires inheritance/interface implementation |
| Compile-time polymorphism | Runtime polymorphism |
| Parameters must differ | Parameters must be the same |
| Return type alone cannot distinguish overloads | Return type can be same or covariant |

### Example — Overloading

```java
void print(int x) {}
void print(String x) {}
```

### Example — Overriding

```java
class Animal {
    void sound() {}
}

class Dog extends Animal {
    @Override
    void sound() {}
}
```

### Easy way to remember

> **Overloading = same name, different parameters.**  
> **Overriding = subclass changes the implementation of an inherited method.**

---

## Q26. Can we overload a method by changing only its return type?

### Answer
**No.**

This is invalid:

```java
class Test {

    int calculate() {
        return 10;
    }

    double calculate() {
        return 10.5;
    }
}
```

The compiler cannot distinguish the methods based only on return type.

### Valid Example

```java
int calculate(int x) {
    return x;
}

double calculate(double x) {
    return x;
}
```

Here the parameter types are different, so the methods are overloaded.

### Interview point

> **Return type alone cannot be used for method overloading.**

---

## Q27. Can a static method be overridden?

### Answer
**No. Static methods are not overridden. They are hidden when a subclass declares a static method with the same signature.**

Static methods belong to the class rather than an object.

### Example

```java
class Parent {
    static void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    static void show() {
        System.out.println("Child");
    }
}
```

Now:

```java
Parent p = new Child();
p.show();
```

Output:

```text
Parent
```

The method is selected based on the reference/class type.

### Compare with instance methods

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
    }
}
```

```java
Parent p = new Child();
p.show();
```

Output:

```text
Child
```

This is runtime overriding.

### Interview-ready statement

> Static methods are hidden, not overridden. Instance methods can participate in runtime method overriding.

---

## Q28. What is dynamic method dispatch?

### Answer
**Dynamic method dispatch** is the mechanism by which Java selects an overridden instance method at runtime based on the actual object.

It is the basis of **runtime polymorphism**.

### Example

```java
class Animal {
    void sound() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}
```

Usage:

```java
Animal a;

a = new Dog();
a.sound();     // Bark

a = new Cat();
a.sound();     // Meow
```

The reference type is `Animal`, but the actual object is `Dog` or `Cat`. Java therefore selects the corresponding overridden instance method at runtime.

**Interview point:** Dynamic method dispatch applies to overridden instance methods, not static methods.

---

## Q29. What is an abstract class?

### Answer
An **abstract class** is a class declared using the `abstract` keyword that cannot be directly instantiated.

It can contain:

- Abstract methods
- Concrete methods
- Instance fields
- Constructors
- Static methods
- Instance methods

### Example

```java
abstract class Animal {

    abstract void sound();

    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}
```

This is invalid:

```java
Animal a = new Animal();
```

But this is valid:

```java
Animal a = new Dog();
```

### Why use an abstract class?

Use it when related classes should share common state or implementation while subclasses must provide certain behavior.

---

## Q30. What is an interface?

### Answer
An **interface** defines a contract that implementing classes agree to follow.

A class uses the `implements` keyword to implement an interface.

### Example

```java
interface Payment {
    void pay();
}

class UPI implements Payment {

    @Override
    public void pay() {
        System.out.println("Payment through UPI");
    }
}
```

Usage:

```java
Payment p = new UPI();
p.pay();
```

### Modern Java interfaces can contain

- Abstract methods
- `default` methods with implementation
- `static` methods with implementation
- `private` methods with implementation
- Constants (`public static final` fields)

### Important point

A class can implement multiple interfaces:

```java
class SmartPhone implements Camera, GPS {
}
```

This provides multiple contracts/capabilities without multiple class inheritance.

---

## Q31. Difference between abstract class and interface?

### Answer

| Abstract Class | Interface |
|---|---|
| Declared using `abstract class` | Declared using `interface` |
| Extended using `extends` | Implemented using `implements` |
| A class can extend only one class | A class can implement multiple interfaces |
| Can have instance fields | Fields are implicitly `public static final` |
| Can have constructors | Cannot have constructors |
| Can have abstract and concrete methods | Can have abstract, default, static, and private methods |
| Useful for shared state/implementation | Useful for contracts/capabilities |

### Example

```java
abstract class Vehicle {
    int speed;

    Vehicle(int speed) {
        this.speed = speed;
    }

    abstract void move();
}
```

Interface:

```java
interface Flyable {
    void fly();
}
```

### When to use which?

Use an **abstract class** when closely related classes need shared state or implementation.

Use an **interface** when you want to define a contract or capability that can be implemented by potentially unrelated classes.

---

## Q32. Can an abstract class have a constructor?

### Answer
**Yes.**

An abstract class can have a constructor. Although the abstract class cannot be instantiated directly, its constructor executes when a concrete subclass object is created.

### Example

```java
abstract class Animal {

    Animal() {
        System.out.println("Animal constructor");
    }
}

class Dog extends Animal {

    Dog() {
        System.out.println("Dog constructor");
    }
}
```

Usage:

```java
Dog d = new Dog();
```

Output:

```text
Animal constructor
Dog constructor
```

The superclass part of the object must be initialized before the subclass part.

### Interview point

Constructors are not inherited, but a superclass constructor is invoked during subclass construction.

---

## Q33. Can an interface have methods with implementation?

### Answer
**Yes.**

Modern Java interfaces can contain methods with implementation.

### 1. Default method

```java
interface Vehicle {

    default void start() {
        System.out.println("Vehicle started");
    }
}
```

A class can inherit this default implementation.

### 2. Static method

```java
interface Vehicle {

    static void info() {
        System.out.println("Vehicle interface");
    }
}
```

Called using:

```java
Vehicle.info();
```

### 3. Private method

```java
interface Vehicle {

    default void start() {
        log();
    }

    private void log() {
        System.out.println("Starting");
    }
}
```

Private methods are used as internal helper methods within the interface.

### Why were default methods introduced?

They allow interfaces to evolve by adding behavior without requiring every existing implementing class to immediately implement a new abstract method.

---

## Q34. What is multiple inheritance? Does Java support it?

### Answer
**Multiple inheritance** means a class directly inherits from more than one parent class.

For example:

```text
       A       B
        \     /
          C
```

Here `C` inherits from both `A` and `B`.

### Does Java support multiple inheritance of classes?

**No.**

This is invalid:

```java
class C extends A, B {
}
```

Java allows a class to extend only **one class**.

### Why?

One important reason is ambiguity, commonly illustrated by the **diamond problem**:

```text
       A
      / \
     B   C
      \ /
       D
```

If both `B` and `C` provide different implementations of a method inherited by `D`, it becomes ambiguous which implementation `D` should use.

Java avoids this form of multiple class inheritance.

### But Java supports multiple interfaces

```java
interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {

    public void show() {
        System.out.println("Show");
    }

    public void display() {
        System.out.println("Display");
    }
}
```

---

## Q35. Why does Java use interfaces to achieve multiple inheritance?

### Answer
Java uses interfaces to allow a class to implement multiple **contracts or capabilities** without allowing multiple class inheritance.

### Example

```java
interface Camera {
    void takePhoto();
}

interface GPS {
    void getLocation();
}

class Phone implements Camera, GPS {

    public void takePhoto() {
        System.out.println("Taking photo");
    }

    public void getLocation() {
        System.out.println("Getting location");
    }
}
```

`Phone` can implement both capabilities:

```text
Phone
 ├── Camera
 └── GPS
```

### What about default-method conflicts?

If two interfaces provide the same default method, the implementing class must resolve the conflict.

```java
interface A {
    default void show() {
        System.out.println("A");
    }
}

interface B {
    default void show() {
        System.out.println("B");
    }
}

class C implements A, B {

    @Override
    public void show() {
        A.super.show();
    }
}
```

Here `C` explicitly chooses `A`'s implementation.

### Interview-ready conclusion

> Java does not support multiple inheritance of classes because it can create ambiguity and complex inheritance relationships. It supports multiple interfaces because interfaces provide multiple contracts, with explicit rules for resolving default-method conflicts.
