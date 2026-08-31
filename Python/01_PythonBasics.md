
# Section 1 — Python Basics

## 1. What is Python?

### Answer

Python is a **high-level, interpreted, general-purpose programming language** known for its simple and readable syntax. It supports object-oriented, procedural, and functional programming.

### Example

```python
name = "Adarsh"
age = 21

print(name)
print(age)
````

---

## 2. Why is Python dynamically typed?

### Answer

Python is dynamically typed because the **type of an object is determined at runtime**. We do not need to explicitly declare the data type of a variable.

### Example

```python
x = 10
print(type(x))

x = "Hello"
print(type(x))
```

Here, `x` can refer to objects of different types.

**Interview Point:** Python is dynamically typed but strongly typed.

---

## 3. Do we need to declare variables in Python?

### Answer

No. Python does not require explicit variable declarations. A variable is created when a value is assigned to it.

### Example

```python
age = 21
name = "Adarsh"

print(age)
print(name)
```

Python determines the type at runtime.

---

## 4. What are Python's built-in data types?

### Answer

Python's commonly used built-in data types are `int`, `float`, `complex`, `bool`, `str`, `list`, `tuple`, `set`, `dict`, `range`, and `NoneType`.

### Example

```python
age = 21                 # int
price = 10.5             # float
name = "Adarsh"          # str
numbers = [1, 2, 3]      # list
values = (1, 2, 3)       # tuple
unique = {1, 2, 3}       # set
student = {"age": 21}    # dict
value = None             # NoneType
```

---

## 5. Difference between list and tuple?

### Answer

Both are ordered collections, but a **list is mutable** while a **tuple is immutable**. Lists are used when data may change, while tuples are useful for fixed collections.

### Example

```python
numbers = [1, 2, 3]
numbers[0] = 10

print(numbers)  # [10, 2, 3]
```

```python
numbers = (1, 2, 3)
numbers[0] = 10  # TypeError
```

**Key Point:** List → mutable, Tuple → immutable.

---

## 6. Difference between set and list?

### Answer

A list is an ordered collection that **allows duplicates**, while a set stores **unique elements** and does not support indexing.

### Example

```python
numbers = [1, 2, 2, 3]
print(numbers)  # [1, 2, 2, 3]

unique = {1, 2, 2, 3}
print(unique)   # {1, 2, 3}
```

**Key Point:** List → duplicates allowed, Set → unique elements.

---

## 7. Difference between dictionary and list?

### Answer

A list stores values in an ordered sequence and accesses them using an **index**, while a dictionary stores **key-value pairs** and accesses values using keys.

### Example

```python
students = ["Rahul", "Amit", "Neha"]
print(students[1])  # Amit
```

```python
student = {"name": "Adarsh", "age": 21}
print(student["name"])  # Adarsh
```

**Interview Point:** Dictionary lookup is average-case **O(1)** because it uses a hash-table-based implementation.

---

## 8. What is mutable vs immutable in Python?

### Answer

A **mutable object can be modified after creation**, while an **immutable object cannot be modified after creation**.

Common mutable types include `list`, `dict`, and `set`. Common immutable types include `int`, `str`, and `tuple`.

### Example

```python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)  # [1, 2, 3, 4]
```

The list is modified without creating a new list.

**Interview Point:** Immutable refers to the object, not the variable. An immutable variable can still be reassigned.

---

## 9. Which Python data types are immutable?

### Answer

Common immutable built-in types are:

`int`, `float`, `complex`, `bool`, `str`, `tuple`, `frozenset`, `bytes`, and `range`.

### Example

```python
name = "Python"

name[0] = "J"  # TypeError
```

A string cannot be modified in place because strings are immutable.

**Important:** A tuple is immutable, but it can contain a mutable object such as a list.

---

## 10. What is type casting?

### Answer

Type casting, or type conversion, means **converting a value from one data type to another** using functions such as `int()`, `float()`, `str()`, and `bool()`.

### Example

```python
x = "100"

y = int(x)

print(y)        # 100
print(type(y))  # <class 'int'>
```

**Key Point:** Type conversion can be explicit or, in some operations, implicit.

---

## 11. What is `None`?

### Answer

`None` is a special singleton object used to represent the **absence of a value or a lack of a meaningful result**. Its type is `NoneType`.

### Example

```python
def greet():
    print("Hello")

result = greet()

print(result)  # None
```

A function without an explicit `return` statement returns `None`.

**Interview Point:** Use `is None` when checking for `None`.

```python
if result is None:
    print("No value")
```

---

## 12. Difference between `is` and `==`?

### Answer

`==` checks **value equality**, while `is` checks **object identity**, meaning whether two references point to the same object.

### Example

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True
print(a is b)  # False
```

The values are equal, but they are different objects.

```python
b = a

print(a is b)  # True
```

Now both variables refer to the same object.

**Interview Rule:** Use `is` for identity checks, especially `is None`.

---

## 13. What are truthy and falsy values?

### Answer

In a Boolean context, values that evaluate to `True` are **truthy**, while values that evaluate to `False` are **falsy**.

Common falsy values include `False`, `None`, `0`, `0.0`, `""`, `[]`, `()`, `{}`, and `set()`.

### Example

```python
numbers = []

if numbers:
    print("List is not empty")
else:
    print("List is empty")
```

Output:

```text
List is empty
```

**Key Point:** Empty collections and zero are generally falsy.

---

## 14. What is indentation and why is it important?

### Answer

Indentation is the whitespace at the beginning of a line. In Python, indentation is **part of the syntax** and is used to define blocks of code.

### Example

```python
age = 20

if age >= 18:
    print("Adult")
```

The indentation tells Python that `print()` belongs to the `if` block.

**Key Point:** The standard convention is **4 spaces per indentation level**.

---

## 15. What is PEP 8?

### Answer

PEP 8 is the **official Python style guide**. It provides conventions for writing readable and consistent Python code, including naming, indentation, spacing, and code layout.

### Example

```python
student_name = "Adarsh"

def calculate_score():
    return 100
```

Here, `snake_case` is used for variables and functions.

**Key Point:** PEP 8 is about code style and readability, not Python syntax rules.

---
