# Section 3 — Lists, Dictionaries & Sets

## 25. How do you reverse a list?

### Answer

A list can be reversed using `reverse()`, slicing, or `reversed()`. The main difference is whether the original list is modified.

### Example

```python
numbers = [1, 2, 3, 4, 5]

numbers.reverse()

print(numbers)  # [5, 4, 3, 2, 1]
````

**Key Point:**

* `reverse()` → modifies the original list.
* `[::-1]` → creates a new list.
* `reversed()` → returns an iterator.

---

## 26. How do you remove duplicates from a list?

### Answer

The simplest way is to convert the list to a set, but this does not guarantee preservation of the original order. If order needs to be preserved, `dict.fromkeys()` can be used.

### Example

```python
numbers = [1, 2, 2, 3, 3, 4]

unique = list(dict.fromkeys(numbers))

print(unique)  # [1, 2, 3, 4]
```

**Complexity:** O(n) time and O(n) space.

---

## 27. How do you find the maximum element in a list?

### Answer

Python provides the built-in `max()` function to find the maximum element.

### Example

```python
numbers = [10, 5, 30, 20]

print(max(numbers))  # 30
```

For coding interviews, we should also know how to implement it manually:

```python
maximum = numbers[0]

for num in numbers:
    if num > maximum:
        maximum = num

print(maximum)  # 30
```

**Complexity:** O(n) time and O(1) extra space.

---

## 28. How do you count element frequencies?

### Answer

We can use a dictionary where each element is stored as a key and its frequency as the value.

### Example

```python
numbers = [1, 2, 2, 3, 3, 3]

frequency = {}

for num in numbers:
    frequency[num] = frequency.get(num, 0) + 1

print(frequency)
# {1: 1, 2: 2, 3: 3}
```

**Complexity:** O(n) time and O(k) space, where `k` is the number of unique elements.

**Interview Point:** `collections.Counter` can also be used, but you should know the dictionary approach.

---

## 29. What is list comprehension?

### Answer

List comprehension is a concise way to create a list by applying an expression to each element of an iterable, optionally using a condition.

### Example

```python
squares = [x * x for x in range(5)]

print(squares)
# [0, 1, 4, 9, 16]
```

With a condition:

```python
even = [x for x in range(10) if x % 2 == 0]

print(even)
# [0, 2, 4, 6, 8]
```

**Key Point:** Use list comprehension for simple and readable transformations or filtering.

---

## 30. What is dictionary comprehension?

### Answer

Dictionary comprehension is a concise way to create a dictionary from an iterable using a key-value expression.

### Example

```python
numbers = [1, 2, 3, 4]

squares = {x: x * x for x in numbers}

print(squares)
# {1: 1, 2: 4, 3: 9, 4: 16}
```

**Key Point:**

```text
List comprehension       → [expression]
Dictionary comprehension → {key: value}
```

---

## 31. How do you iterate through a dictionary?

### Answer

A dictionary can be iterated through its keys, values, or key-value pairs. The most commonly used approach for both key and value is `.items()`.

### Example

```python
student = {
    "name": "Adarsh",
    "age": 21
}

for key, value in student.items():
    print(key, value)
```

Output:

```text
name Adarsh
age 21
```

**Important Methods:**

```python
student.keys()    # Keys
student.values()  # Values
student.items()   # Key-value pairs
```

---

## 32. Difference between `append()` and `extend()`?

### Answer

`append()` adds **one object** to the end of a list, while `extend()` adds each element from an iterable to the list.

### Example

```python
numbers = [1, 2]

numbers.append([3, 4])

print(numbers)
# [1, 2, [3, 4]]
```

```python
numbers = [1, 2]

numbers.extend([3, 4])

print(numbers)
# [1, 2, 3, 4]
```

**Key Point:**

```text
append() → adds one object
extend() → adds elements from an iterable
```

---

## 33. Difference between `remove()`, `pop()`, and `del`?

### Answer

* `remove()` removes the first occurrence of a **value**.
* `pop()` removes and returns an element using its **index**.
* `del` deletes an element, slice, or variable.

### Example

```python
numbers = [10, 20, 30, 20]

numbers.remove(20)
print(numbers)
# [10, 30, 20]
```

```python
numbers = [10, 20, 30]

value = numbers.pop(1)

print(value)    # 20
print(numbers)  # [10, 30]
```

```python
numbers = [10, 20, 30]

del numbers[1]

print(numbers)
# [10, 30]
```

### Quick Comparison

| Method     | Removes By           | Returns Value? |
| ---------- | -------------------- | -------------- |
| `remove()` | Value                | No             |
| `pop()`    | Index                | Yes            |
| `del`      | Index/Slice/Variable | No             |

---

## 34. How does a Python dictionary work internally?

### Answer

A Python dictionary uses a **hash-table-based implementation**. Python calculates a hash for a key and uses it to efficiently locate the corresponding key-value entry.

### Example

```python
student = {
    "name": "Adarsh",
    "age": 21
}

print(student["name"])
# Adarsh
```

Conceptually:

```text
"name"
   ↓
hash("name")
   ↓
locate entry
   ↓
"Adarsh"
```

### Complexity

Average-case:

```text
Search → O(1)
Insert → O(1)
Delete → O(1)
```

### Interview Point

Dictionary keys must be **hashable**.

```python
data = {
    (1, 2): "valid"
}
```

A list cannot be a key because it is mutable and unhashable:

```python
data = {
    [1, 2]: "invalid"
}
# TypeError
```

