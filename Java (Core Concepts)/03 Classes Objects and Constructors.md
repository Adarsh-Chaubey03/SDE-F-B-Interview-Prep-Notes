# Classes Objects and Constructors

## Q36. What is a class?

### Definition
A **class** is a blueprint or template used to define the **data (fields)** and **behavior (methods)** of objects.

A class itself is not an object. It defines what objects of that type will contain and do.

### Example

```java
class Student {
    String name;
    int age;

    void study() {
        System.out.println(name + " is studying");
    }
}
```

Here:

- `Student` → class
- `name`, `age` → fields
- `study()` → method

Multiple objects can be created from the same class:

```java
Student s1 = new Student();
Student s2 = new Student();
```

### Interview Answer
> A class is a user-defined reference type that acts as a blueprint for creating objects. It defines the state and behavior that its objects can have.

---

## Q37. What is an object?

### Definition
An **object** is a runtime instance of a class.

An object generally has:

- **State** → data stored in fields
- **Behavior** → methods it can perform
- **Identity** → a distinct object identity

### Example

```java
class Student {
    String name;

    void study() {
        System.out.println(name + " is studying");
    }
}
```

Create an object:

```java
Student s1 = new Student();

s1.name = "Adarsh";
s1.study();
```

Here:

```text
Student → class
s1      → reference variable
new Student() → object
```

Conceptually:

```text
s1 ───────→ Student object
             name = "Adarsh"
```

### Interview Point
More precisely, `s1` is a **reference variable** that refers to the `Student` object.

---

## Q38. How do you create an object in Java?

### Definition
The most common way to create an object is by using the `new` keyword.

### Example

```java
Student s1 = new Student();
```

Here:

```text
Student s1
    ↓
Reference variable

new Student()
    ↓
Creates an object
```

The appropriate constructor is invoked as part of normal object creation.

### Example with Constructor

```java
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

Student s = new Student("Adarsh");
```

The steps are:

1. `new Student("Adarsh")` creates the object.
2. The constructor is invoked.
3. The reference to the object is assigned to `s`.

### Other Ways to Create Objects

Other mechanisms include:

- Reflection
- Cloning
- Deserialization

For normal Java programming, `new` is the standard approach.

### Interview Follow-up
**Does `new` call the constructor?**

Yes. During normal object creation with `new`, the appropriate constructor is invoked to initialize the object.

---

## Q39. What is a constructor?

### Definition
A **constructor** is a special member of a class used to initialize a newly created object.

A constructor:

- Has the **same name as the class**
- Has **no return type**, not even `void`

### Example

```java
class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

Creating the object:

```java
Student s = new Student("Adarsh", 21);
```

The constructor initializes the object's fields.

### Important Points

A constructor:

- Runs during object construction.
- Can be overloaded.
- Is not inherited.
- Cannot be overridden.
- Cannot be `static`, `final`, or `abstract`.

### Interview Point
A constructor is used for **object initialization**, whereas methods are used to perform operations or behavior.

---

## Q40. Constructor vs Method?

### Definition

A constructor initializes an object, while a method performs an operation or behavior.

### Comparison

| Constructor | Method |
|---|---|
| Initializes an object | Performs an operation |
| Same name as class | Can have any valid name |
| No return type | Has a return type or `void` |
| Invoked during object construction | Invoked through a method call |
| Cannot be inherited | Methods can be inherited depending on access |
| Cannot be overridden | Can be overridden if eligible |
| Cannot be `static`, `final`, or `abstract` | Can use these modifiers where applicable |

### Example

```java
class Student {

    Student() {
        System.out.println("Object initialized");
    }

    void study() {
        System.out.println("Student is studying");
    }
}
```

Usage:

```java
Student s = new Student();  // Constructor runs
s.study();                  // Method runs
```

Output:

```text
Object initialized
Student is studying
```

### Interview Trap

This is a method, not a constructor:

```java
void Student() {
}
```

It has a return type `void`, so it is a method.

---

## Q41. What are the types of constructors?

### Definition
For interview purposes, know these two common types:

### 1. No-argument constructor

A constructor that takes no parameters.

```java
class Student {

    Student() {
        System.out.println("Student created");
    }
}
```

Usage:

```java
Student s = new Student();
```

### 2. Parameterized constructor

A constructor that accepts parameters.

```java
class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

Usage:

```java
Student s = new Student("Adarsh", 21);
```

### What is a default constructor?

If you **do not declare any constructor**, the compiler provides a **default constructor** automatically.

For example:

```java
class Student {
    String name;
}
```

The compiler provides a no-argument constructor conceptually similar to:

```java
Student() {
    super();
}
```

### Important Distinction

A **no-argument constructor** and a **default constructor** are not exactly the same.

If you explicitly write:

```java
Student() {
}
```

it is a no-argument constructor.

If the compiler supplies it because you declared no constructor, it is the default constructor.

---

## Q42. What is constructor overloading?

### Definition
**Constructor overloading** means defining multiple constructors in the same class with different parameter lists.

### Example

```java
class Student {

    String name;
    int age;

    Student() {
        name = "Unknown";
        age = 0;
    }

    Student(String name) {
        this.name = name;
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

All of these are valid:

```java
Student s1 = new Student();

Student s2 = new Student("Adarsh");

Student s3 = new Student("Adarsh", 21);
```

Java selects the appropriate constructor based on the arguments.

### Interview Point
Constructor overloading is compile-time selection based on the constructor's parameter list.

---

## Q43. Can a constructor be inherited?

### Answer
**No. Constructors are not inherited by subclasses.**

### Example

```java
class Animal {
    Animal() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
}
```

`Dog` does not inherit `Animal()` as its constructor.

However, when you create:

```java
Dog d = new Dog();
```

the superclass constructor is invoked as part of constructing the `Dog` object.

Conceptually:

```text
Dog()
 ↓
super()
 ↓
Animal()
```

You can explicitly invoke it:

```java
class Dog extends Animal {

    Dog() {
        super();
    }
}
```

### Interview Point
> Constructors are not inherited, but a superclass constructor can be invoked from a subclass constructor.

If no explicit constructor call is written, Java inserts an implicit call to the accessible no-argument superclass constructor when applicable.

---

## Q44. What happens if you don't define a constructor?

### Definition
If you do not explicitly define **any constructor**, the compiler provides a **default no-argument constructor**.

### Example

```java
class Student {
    String name;
    int age;
}
```

You can write:

```java
Student s = new Student();
```

Conceptually, the compiler provides something similar to:

```java
Student() {
    super();
}
```

Instance fields receive their normal default values:

```text
String  → null
int     → 0
boolean → false
```

### Important Trap

If you define any constructor yourself:

```java
class Student {

    Student(String name) {
        this.name = name;
    }

    String name;
}
```

then this is invalid:

```java
Student s = new Student();
```

because the compiler no longer automatically provides a no-argument default constructor.

If you need one, define it yourself:

```java
Student() {
}
```

### Interview Question
**Does Java always provide a default constructor?**

No.

> The compiler provides a default no-argument constructor only when the class declares no constructors.

---

## Q45. What is the `this` keyword?

### Definition
`this` is a reference to the **current object**.

It is commonly used when an instance variable and a method/constructor parameter have the same name.

### Example

```java
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}
```

Here:

```text
this.name → current object's instance variable
name      → constructor parameter
```

Without `this`:

```java
Student(String name) {
    name = name;
}
```

both sides refer to the parameter, so the instance variable is not updated.

### Other Uses of `this`

#### 1. Refer to the current object's field

```java
this.name = name;
```

#### 2. Call the current object's method

```java
this.study();
```

Usually `this.` is optional when there is no ambiguity:

```java
study();
```

#### 3. Call another constructor in the same class

This is called **constructor chaining**.

```java
class Student {

    String name;
    int age;

    Student() {
        this("Unknown", 0);
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

Here:

```java
this("Unknown", 0);
```

calls another constructor of the same class.

**Important:** A `this(...)` constructor call must be the **first statement** in the constructor.

#### 4. Pass the current object as an argument

```java
class Student {

    void display() {
        printStudent(this);
    }

    void printStudent(Student s) {
        System.out.println(s);
    }
}
```

Here `this` represents the current `Student` object.

#### 5. Return the current object

```java
class Student {

    Student getStudent() {
        return this;
    }
}
```

This can be useful for method chaining.

---
