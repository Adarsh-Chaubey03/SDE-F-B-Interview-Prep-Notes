
# Section 2 — Functions

## 16. How do you define a function in Python?

### Answer

A function in Python is defined using the `def` keyword. It is a reusable block of code that can accept parameters and return a result.

### Example

```python
def add(a, b):
    return a + b

print(add(10, 20))  # 30
````

**Interview Point:** A function without an explicit `return` statement returns `None`.

---

## 17. What are `*args` and `**kwargs`?

### Answer

`*args` allows a function to accept a variable number of **positional arguments**, while `**kwargs` allows it to accept a variable number of **keyword arguments**.

`args` is stored as a tuple and `kwargs` as a dictionary.

### Example

```python
def display(*args, **kwargs):
    print(args)
    print(kwargs)

display(1, 2, 3, name="Adarsh")
```

Output:

```text
(1, 2, 3)
{'name': 'Adarsh'}
```

---

## 18. What are default arguments?

### Answer

A default argument is a parameter that has a predefined value. If the caller does not provide a value, Python uses the default value.

### Example

```python
def greet(name="User"):
    print("Hello", name)

greet()          # Hello User
greet("Adarsh")  # Hello Adarsh
```

**Interview Point:** Avoid using mutable objects such as lists as default arguments because the same object can be reused across function calls.

---

## 19. What is a lambda function?

### Answer

A lambda function is a small **anonymous function** defined using the `lambda` keyword. It is mainly used for short, simple operations.

### Example

```python
square = lambda x: x * x

print(square(5))  # 25
```

**Interview Point:** A lambda contains a single expression whose result is returned automatically.

---

## 20. What is recursion?

### Answer

Recursion is a technique in which a function calls itself to solve a problem by breaking it into smaller subproblems. A recursive function must have a **base case** to stop the recursion.

### Example

```python
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)

print(factorial(5))  # 120
```

**Interview Point:** Recursion uses the call stack, so excessive recursion can cause a `RecursionError`.

---

## 21. What is a higher-order function?

### Answer

A higher-order function is a function that **takes another function as an argument, returns a function, or both**. Python supports this because functions are first-class objects.

### Example

```python
def square(x):
    return x * x

def apply_function(func, value):
    return func(value)

print(apply_function(square, 5))  # 25
```

**Common examples:** `map()`, `filter()`, and `sorted()` with a `key` function.

---

## 22. What is a decorator?

### Answer

A decorator is a function that **adds or modifies the behavior of another function without changing its original code**.

### Example

```python
def decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")

    return wrapper


@decorator
def greet():
    print("Hello")

greet()
```

Output:

```text
Before function
Hello
After function
```

**Interview Point:** `@decorator` is syntactic sugar for assigning the decorated function to the result of the decorator.

---

## 23. What is variable scope in Python?

### Answer

Variable scope defines where a variable can be accessed. Python follows the **LEGB rule**:

* **L** — Local
* **E** — Enclosing
* **G** — Global
* **B** — Built-in

### Example

```python
x = 10  # Global

def test():
    y = 20  # Local
    print(x)
    print(y)

test()
```

Here, `x` is global and `y` is local to `test()`.

---

## 24. Difference between local and global variables?

### Answer

A **local variable** is defined inside a function and is normally accessible only within that function. A **global variable** is defined outside functions and can be accessed throughout the module.

### Example

```python
x = 10  # Global

def test():
    y = 20  # Local
    print(x)
    print(y)

test()
```

If we need to modify a global variable inside a function, we can use the `global` keyword:

```python
x = 10

def change():
    global x
    x = 20

change()
print(x)  # 20
```

**Interview Point:** Avoid unnecessary global variables because they make code harder to maintain and test.


