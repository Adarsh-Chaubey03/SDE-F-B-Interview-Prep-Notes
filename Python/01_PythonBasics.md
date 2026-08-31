# Section 1: Python Basics



## 1. What is Python?

### Answer

Python is a **high-level, interpreted, general-purpose programming language** known for its simple and readable syntax. It supports **object-oriented, procedural, and functional programming**.

Python is widely used in web development, automation, data analysis, AI/ML, and software development.

### Example

```python
name = "Adarsh"
age = 21

print(name)
print(age)
```

### Interview Point

If asked why Python is popular:

* Simple and readable syntax
* Dynamically typed
* Large ecosystem
* Supports multiple programming paradigms
* Large community
* Used in many domains

---

## 2. Why is Python dynamically typed?

### Answer

Python is dynamically typed because **the type of an object is determined at runtime**. We don't need to explicitly declare the data type of a variable.

### Example

```python
x = 10
print(type(x))

x = "Hello"
print(type(x))
```

Output:

```text
<class 'int'>
<class 'str'>
```

The same variable `x` can refer to objects of different types during execution.

### Important

Python is **dynamically typed but strongly typed**.

* **Dynamically typed:** Type checking happens at runtime.
* **Strongly typed:** Python does not automatically perform arbitrary conversions between incompatible types.

```python
x = 10
y = "20"

print(x + y)   # TypeError
```

---

## 3. Do we need to declare variables in Python?

### Answer

No. Python does not require explicit variable declarations. A variable is created when a value is assigned to it.

### Example

```python
age = 21
name = "Adarsh"
salary = 50000.50
```

Python determines the type at runtime.

### Type Hints

Python also supports type hints:

```python
age: int = 21
name: str = "Adarsh"
```

However, type hints generally **do not enforce the type at runtime**.

---

## 4. What are Python's built-in data types?

### Answer

Python provides several built-in data types.

| Category | Data Types                         |
| -------- | ---------------------------------- |
| Numeric  | `int`, `float`, `complex`          |
| Boolean  | `bool`                             |
| Text     | `str`                              |
| Sequence | `list`, `tuple`, `range`           |
| Set      | `set`, `frozenset`                 |
| Mapping  | `dict`                             |
| Binary   | `bytes`, `bytearray`, `memoryview` |
| Special  | `NoneType`                         |

### Example

```python
x = 10                  # int
price = 10.5            # float
name = "Python"         # str
numbers = [1, 2, 3]     # list
values = (1, 2, 3)      # tuple
unique = {1, 2, 3}      # set
student = {"age": 21}   # dict
value = None            # NoneType
```

### Most Important for Interviews

Focus especially on:

```text
int
float
str
bool
list
tuple
set
dict
None
```

---

## 5. Difference between list and tuple?

### Answer

Both are **ordered sequences**, but a list is **mutable**, whereas a tuple is **immutable**.

| Feature    | List    | Tuple   |
| ---------- | ------- | ------- |
| Syntax     | `[]`    | `()`    |
| Ordered    | Yes     | Yes     |
| Mutable    | Yes     | No      |
| Duplicates | Allowed | Allowed |
| Indexing   | Yes     | Yes     |

### Example

```python
numbers = [1, 2, 3]

numbers[0] = 10

print(numbers)
```

Output:

```text
[10, 2, 3]
```

But:

```python
numbers = (1, 2, 3)

numbers[0] = 10
```

produces:

```text
TypeError
```

### When to use?

Use a **list** when the data needs to change.

```python
tasks = ["DSA", "Python"]
tasks.append("SQL")
```

Use a **tuple** for fixed collections.

```python
coordinates = (10, 20)
```

---

## 6. Difference between set and list?

### Answer

A list is an **ordered, mutable collection that allows duplicates**, whereas a set stores **unique elements** and does not support positional indexing.

| Feature            | List         | Set          |
| ------------------ | ------------ | ------------ |
| Duplicates         | Allowed      | Not allowed  |
| Indexing           | Yes          | No           |
| Mutable            | Yes          | Yes          |
| Syntax             | `[]`         | `{}`         |
| Membership testing | Average O(n) | Average O(1) |

### Example

```python
numbers = [1, 2, 2, 3]

print(numbers)
```

Output:

```text
[1, 2, 2, 3]
```

Set:

```python
numbers = {1, 2, 2, 3}

print(numbers)
```

Output contains each unique element:

```text
{1, 2, 3}
```

### Common Use

Removing duplicates:

```python
numbers = [1, 2, 2, 3, 3, 4]

unique = set(numbers)

print(unique)
```

---

## 7. Difference between dictionary and list?

### Answer

A list stores elements as an **ordered sequence accessed using indexes**, while a dictionary stores **key-value pairs accessed using keys**.

| Feature          | List           | Dictionary      |
| ---------------- | -------------- | --------------- |
| Structure        | Values         | Key-value pairs |
| Access           | Index          | Key             |
| Mutable          | Yes            | Yes             |
| Duplicate values | Allowed        | Allowed         |
| Duplicate keys   | Not applicable | Not allowed     |

### Example

List:

```python
students = ["Rahul", "Amit", "Neha"]

print(students[1])
```

Output:

```text
Amit
```

Dictionary:

```python
student = {
    "name": "Adarsh",
    "age": 21
}

print(student["name"])
```

Output:

```text
Adarsh
```

### Interview Follow-up

**Why is dictionary lookup generally O(1)?**

Python dictionaries use a **hash-table-based implementation**. The key is hashed to locate the corresponding entry.

Average-case lookup is **O(1)**.

---

## 8. What is mutable vs immutable in Python?

### Answer

A **mutable object can be modified after creation**, while an **immutable object cannot be modified after creation**.

### Common Mutable Types

* `list`
* `dict`
* `set`
* `bytearray`

### Common Immutable Types

* `int`
* `float`
* `bool`
* `str`
* `tuple`
* `frozenset`
* `bytes`

### Mutable Example

```python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)
```

Output:

```text
[1, 2, 3, 4]
```

### Immutable Example

```python
x = 10

x = x + 1
```

The integer object `10` is not modified. Instead, `x` is made to refer to the resulting integer object.

### Important Interview Point

**Immutable does not mean the variable cannot be reassigned.**

```python
x = 10
x = 20
```

This is valid.

The **object** is immutable; the **variable name** can be rebound.

---

## 9. Which Python data types are immutable?

### Answer

Common immutable built-in types are:

```text
int
float
complex
bool
str
tuple
frozenset
bytes
range
```

### Example

Strings are immutable:

```python
name = "Python"

name[0] = "J"
```

This produces:

```text
TypeError
```

Instead, a new string must be created.

```python
name = "J" + name[1:]
```

### Important Tuple Example

A tuple is immutable, but it can contain a mutable object.

```python
data = ([1, 2], 3)

data[0].append(4)

print(data)
```

Output:

```text
([1, 2, 4], 3)
```

The tuple itself remains structurally immutable, but the list inside it can change.

---

## 10. What is type casting?

### Answer

Type casting, or **type conversion**, means converting a value from one data type to another.

Common functions include:

```text
int()
float()
str()
bool()
list()
tuple()
set()
```

### Example

```python
x = "100"

y = int(x)

print(y)
print(type(y))
```

Output:

```text
100
<class 'int'>
```

### Explicit Conversion

```python
x = int("10")
```

### Implicit Conversion

Python can perform certain conversions automatically.

```python
x = 10
y = 2.5

result = x + y

print(result)
```

Output:

```text
12.5
```

### Invalid Conversion

```python
int("hello")
```

This produces:

```text
ValueError
```

---

## 11. What is `None`?

### Answer

`None` is a special singleton object used to represent the **absence of a value or a lack of a meaningful result**.

Its type is `NoneType`.

### Example

```python
x = None

print(x)
print(type(x))
```

Output:

```text
None
<class 'NoneType'>
```

### Function Example

A function without an explicit return statement returns `None`.

```python
def greet():
    print("Hello")

result = greet()

print(result)
```

Output:

```text
Hello
None
```

### Important

`None` is different from:

```text
0
False
""
[]
```

### Best Practice

Use:

```python
if x is None:
    print("No value")
```

---

## 12. Difference between `is` and `==`?

### Answer

* `==` checks **value equality**.
* `is` checks **object identity**.

In simple terms:

```text
==  → Are the values equal?
is  → Are they the same object?
```

### Example

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)
print(a is b)
```

Output:

```text
True
False
```

The values are equal, but they are different objects.

### Same Object

```python
a = [1, 2, 3]
b = a

print(a == b)
print(a is b)
```

Output:

```text
True
True
```

Both names refer to the same object.

### Interview Rule

Use:

```python
if value is None:
    ...
```

for checking `None`.

Use `==` when comparing values.

> Avoid saying that `is` simply "compares memory addresses." The precise concept is **object identity**.

---

## 13. What are truthy and falsy values?

### Answer

In a Boolean context, objects that evaluate to `True` are called **truthy**, while objects that evaluate to `False` are called **falsy**.

### Common Falsy Values

```python
False
None
0
0.0
0j
""
[]
()
{}
set()
```

Most other objects are truthy.

### Example

```python
name = ""

if name:
    print("Name exists")
else:
    print("Name is empty")
```

Output:

```text
Name is empty
```

### Useful Example

Instead of:

```python
if len(numbers) > 0:
    print("Not empty")
```

we can write:

```python
if numbers:
    print("Not empty")
```

This is common Python style.

---

## 14. What is indentation and why is it important?

### Answer

Indentation is the whitespace at the beginning of a line. In Python, indentation is **syntactically significant** because it defines blocks of code.

Unlike languages that commonly use `{}` for blocks, Python uses indentation.

### Example

```python
age = 20

if age >= 18:
    print("Adult")
```

The indentation tells Python that `print()` belongs to the `if` block.

Incorrect:

```python
if age >= 18:
print("Adult")
```

This results in an `IndentationError`.

### Standard Practice

Use **4 spaces** per indentation level.

```python
if condition:
    if another_condition:
        print("Hello")
```

### Interview Point

> In Python, indentation is part of the syntax, not merely formatting.

---

## 15. What is PEP 8?

### Answer

**PEP 8** is Python's official **style guide**.

PEP stands for **Python Enhancement Proposal**.

PEP 8 provides conventions for writing **readable, consistent, and maintainable Python code**.

### Important Conventions

#### Indentation

Use 4 spaces:

```python
if condition:
    print("Hello")
```

#### Variable and Function Names

Use `snake_case`:

```python
student_name = "Adarsh"
```

#### Class Names

Generally use `PascalCase`:

```python
class StudentDetails:
    pass
```

#### Constants

Generally use uppercase:

```python
MAX_SIZE = 100
```

#### Operators

Use appropriate spacing:

```python
x = a + b
```

### Interview-Ready Answer

> **PEP 8 is the official Python style guide that defines conventions for formatting and writing readable, consistent Python code, including indentation, naming, spacing, and code layout.**

---
