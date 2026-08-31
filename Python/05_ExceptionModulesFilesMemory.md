# Section 5 — Exception, Modules, Files & Memory

## 43. How is exception handling done in Python?

### Answer

Python handles exceptions using `try` and `except`. Code that may cause an exception is placed inside `try`, and the `except` block handles the error.

### Example

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

Output:

```text
Cannot divide by zero
```

**Key Point:** Exception handling prevents the program from terminating unexpectedly and allows errors to be handled gracefully.

---

## 44. Difference between `try`, `except`, `else`, and `finally`?

### Answer

* `try` → Contains code that may raise an exception.
* `except` → Handles the exception.
* `else` → Executes when no exception occurs.
* `finally` → Executes whether an exception occurs or not.

### Example

```python
try:
    result = 10 / 2

except ZeroDivisionError:
    print("Division by zero")

else:
    print("Result:", result)

finally:
    print("Execution completed")
```

Output:

```text
Result: 5.0
Execution completed
```

**Interview Point:** `finally` is commonly used for cleanup operations such as closing files or releasing resources.

---

## 45. How do you create a custom exception?

### Answer

A custom exception can be created by defining a class that inherits from Python's built-in `Exception` class.

### Example

```python
class InvalidAgeError(Exception):
    pass


age = 15

if age < 18:
    raise InvalidAgeError("Age must be 18 or above")
```

Output:

```text
InvalidAgeError: Age must be 18 or above
```

**Key Point:** Use custom exceptions when you want to represent application-specific errors clearly.

---

## 46. What is a module?

### Answer

A module is a **Python file containing code such as functions, classes, and variables** that can be imported and reused in another Python program.

### Example

Suppose `math_utils.py` contains:

```python
def add(a, b):
    return a + b
```

We can use it in another file:

```python
import math_utils

print(math_utils.add(10, 20))
```

Output:

```text
30
```

**Key Point:** A module helps organize and reuse Python code.

---

## 47. What is a package?

### Answer

A package is a way of organizing related Python modules into a directory structure.

A package can contain multiple modules and subpackages.

### Example

```text
myproject/
│
├── main.py
└── utilities/
    ├── __init__.py
    ├── math_utils.py
    └── string_utils.py
```

We can import a module from the package:

```python
from utilities import math_utils

print(math_utils.add(10, 20))
```

**Key Point:**

* **Module → Usually a single `.py` file**
* **Package → Collection/organization of related modules**

> Modern Python also supports namespace packages that do not require `__init__.py`, but for basic interviews, the above distinction is sufficient.

---

## 48. Difference between shallow copy and deep copy?

### Answer

A **shallow copy** creates a new outer object but keeps references to the nested objects. A **deep copy** creates a completely independent copy, including nested objects.

### Example

```python
import copy

original = [[1, 2], [3, 4]]

shallow = copy.copy(original)
deep = copy.deepcopy(original)

original[0].append(5)

print(shallow)
print(deep)
```

Output:

```text
[[1, 2, 5], [3, 4]]
[[1, 2], [3, 4]]
```

The shallow copy shares the nested lists with `original`, while the deep copy has independent nested objects.

### Easy Way to Remember

```text
Shallow copy → New outer object, shared nested objects
Deep copy    → Independent nested objects
```

---

## 49. How does Python manage memory?

### Answer

Python manages memory automatically using a **private heap** where objects are stored. The Python memory manager handles allocation and deallocation of this memory.

Python uses mechanisms such as:

* **Reference counting**
* **Garbage collection**
* Internal memory allocators

### Example

```python
a = [1, 2, 3]
b = a

del a

print(b)
```

Output:

```text
[1, 2, 3]
```

The list is still accessible because `b` continues to reference it.

**Key Point:** Python automatically manages memory, so programmers generally do not manually allocate and free memory like in C/C++.

---

## 50. What is garbage collection in Python?

### Answer

Garbage collection is the process of **automatically identifying and removing objects that are no longer needed**, allowing their memory to be reclaimed.

Python primarily uses **reference counting**, supplemented by a garbage collector that handles reference cycles.

### Example

```python
import gc

class Node:
    pass

a = Node()
b = Node()

a.ref = b
b.ref = a

del a
del b

gc.collect()
```

Here, `a` and `b` reference each other, creating a **reference cycle**. Python's garbage collector can detect such cycles and reclaim the objects when they are otherwise unreachable.

**Key Point:** Python's garbage collection helps handle cyclic references that simple reference counting cannot resolve.

---

