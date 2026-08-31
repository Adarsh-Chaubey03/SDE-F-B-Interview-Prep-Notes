# Section 4 — OOP in Python

## 35. What is a class in Python?

### Answer

A class is a **blueprint for creating objects**. It defines the data (attributes) and behavior (methods) that objects created from the class can have.

### Example

```python
class Student:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name)

student = Student("Adarsh")
student.display()
```

Here, `Student` is the class and it defines the structure and behavior of student objects.

---

## 36. What is an object?

### Answer

An object is an **instance of a class**. It has its own state (attributes) and can use the behavior (methods) defined by the class.

### Example

```python
class Student:
    def __init__(self, name):
        self.name = name

student1 = Student("Adarsh")
student2 = Student("Rahul")

print(student1.name)
print(student2.name)
```

Here, `student1` and `student2` are two different objects of the `Student` class.

### Easy Difference

```text
Class  → Blueprint
Object → Instance of the blueprint
```

---

## 37. What is `__init__()`?

### Answer

`__init__()` is a special method that is automatically called when an object is created. It is commonly used to **initialize the object's attributes**.

### Example

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Adarsh", 21)

print(student.name)
print(student.age)
```

Output:

```text
Adarsh
21
```

### Interview Point

`__init__()` initializes an already-created instance; it is **not technically the object creation method**. Object creation is handled by `__new__()`.

For most interviews, saying "`__init__()` initializes the object" is sufficient unless the interviewer asks about `__new__()`.

---

## 38. What is `self`?

### Answer

`self` refers to the **current instance of a class**. It is used to access instance attributes and methods.

### Example

```python
class Student:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name)

student = Student("Adarsh")
student.display()
```

Here, `self.name` refers to the `name` attribute of the current object.

### Important

`self` is not a special keyword; it is the conventional name for the instance reference.

When we write:

```python
student.display()
```

Python effectively passes `student` as the first argument to the method.

---

## 39. Explain inheritance in Python.

### Answer

Inheritance allows a **child class to acquire attributes and methods from a parent class**. It promotes code reuse and allows us to extend or customize existing behavior.

### Example

```python
class Animal:
    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):
    def bark(self):
        print("Dog barks")


dog = Dog()

dog.speak()
dog.bark()
```

Output:

```text
Animal makes a sound
Dog barks
```

Here, `Dog` inherits from `Animal`.

### Common Types

Python supports:

* Single inheritance
* Multiple inheritance
* Multilevel inheritance
* Hierarchical inheritance

---

## 40. What is method overriding?

### Answer

Method overriding occurs when a **child class provides its own implementation of a method that is already defined in the parent class**.

### Example

```python
class Animal:
    def speak(self):
        print("Animal makes a sound")


class Dog(Animal):
    def speak(self):
        print("Dog barks")


dog = Dog()
dog.speak()
```

Output:

```text
Dog barks
```

The `Dog` class overrides the `speak()` method inherited from `Animal`.

### Interview Point

Overriding is an important mechanism for achieving **runtime polymorphism**.

---

## 41. Does Python support multiple inheritance?

### Answer

Yes. Python supports **multiple inheritance**, meaning a class can inherit from more than one parent class.

### Example

```python
class Father:
    def skills(self):
        print("Driving")


class Mother:
    def talent(self):
        print("Cooking")


class Child(Father, Mother):
    pass


child = Child()

child.skills()
child.talent()
```

The `Child` class inherits from both `Father` and `Mother`.

### Important Follow-up — MRO

When multiple inheritance creates ambiguity, Python uses the **Method Resolution Order (MRO)** to determine the order in which classes are searched for a method.

You can see it using:

```python
print(Child.mro())
```

Python uses the **C3 linearization algorithm** to determine the MRO.

---

## 42. What is polymorphism in Python?

### Answer

Polymorphism means **the same interface or method name can work with different types of objects**, with each object providing its appropriate behavior.

### Example

```python
class Dog:
    def speak(self):
        print("Bark")


class Cat:
    def speak(self):
        print("Meow")


def make_sound(animal):
    animal.speak()


make_sound(Dog())
make_sound(Cat())
```

Output:

```text
Bark
Meow
```

The same `make_sound()` function works with different objects because both provide a `speak()` method.

