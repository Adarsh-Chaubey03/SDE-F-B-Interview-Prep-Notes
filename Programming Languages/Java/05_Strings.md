

## Q56. Why is `String` immutable in Java?

### Definition
A `String` is **immutable**, meaning once a String object is created, its contents cannot be changed.

If an operation appears to modify a String, Java creates a **new String object** instead.

### Example

```java
String s = "Hello";

s.concat(" World");

System.out.println(s);
```

Output:

```text
Hello
```

`concat()` creates a new String, but it was not assigned back to `s`.

```java
s = s.concat(" World");
```

Now `s` refers to a new String:

```text
Hello World
```

### Why is String immutable?

1. **Security** — Strings are used for URLs, file paths, class names, and other sensitive values.
2. **String Pool** — Immutable Strings can safely be shared between references.
3. **Hashing** — Strings are commonly used as keys in `HashMap` and `HashSet`, so their contents must not change.
4. **Thread safety** — Immutable objects can safely be shared between threads.

### Interview Answer

> String is immutable for reasons including security, safe sharing through the String Pool, reliable hashing, and thread safety.

---

## Q57. What is the String Pool?

### Definition
The **String Pool** is a special area associated with the JVM heap that stores shared/interned String objects.

When identical String literals are used, Java can reuse the same String object.

### Example

```java
String a = "Hello";
String b = "Hello";

System.out.println(a == b);
```

Output:

```text
true
```

Conceptually:

```text
a ──────┐
        ↓
     "Hello"
        ↑
b ──────┘
```

Both references can point to the same pooled String.

### What about `new String()`?

```java
String a = new String("Hello");
String b = new String("Hello");

System.out.println(a == b);
```

Output:

```text
false
```

Each `new String()` creates a distinct String object.

### `intern()`

```java
String a = new String("Hello");
String b = a.intern();
String c = "Hello";

System.out.println(b == c);
```

Output:

```text
true
```

### Interview Point

> String literals are interned and can be shared from the String Pool. Strings created with `new String()` are separate objects, although their literal content may also exist in the pool.

---

## Q58. Difference between `String`, `StringBuilder`, and `StringBuffer`?

### Answer

| Feature | String | StringBuilder | StringBuffer |
|---|---|---|---|
| Mutable? | No | Yes | Yes |
| Thread-safe? | Immutable | No synchronization | Synchronized methods |
| Performance for repeated modification | Generally poorer | Generally best | Generally slower than StringBuilder |
| Typical use | Fixed text | Frequent modification | Mutable text where synchronized methods are needed |

### Example — String

```java
String s = "Hello";
s = s + " World";
```

A new String is created because String is immutable.

### Example — StringBuilder

```java
StringBuilder sb = new StringBuilder("Hello");

sb.append(" World");

System.out.println(sb);
```

### Example — StringBuffer

```java
StringBuffer sb = new StringBuffer("Hello");

sb.append(" World");

System.out.println(sb);
```

### Easy way to remember

```text
String        → immutable
StringBuilder → mutable + not synchronized
StringBuffer  → mutable + synchronized
```

---

## Q59. When would you use `StringBuilder`?

### Definition
Use `StringBuilder` when you need to perform **many String modifications**, especially in a single-threaded context.

Common operations include:

```text
append()
insert()
delete()
reverse()
replace()
```

### Example

```java
StringBuilder sb = new StringBuilder();

for (int i = 0; i < 5; i++) {
    sb.append(i);
}

System.out.println(sb);
```

Output:

```text
01234
```

`StringBuilder` is useful because it can modify its internal character sequence instead of creating a new immutable String for every modification.

### Complexity

For building a String of length `n`:

```text
Time:  O(n)  (amortized for append operations)
Space: O(n)
```

### Interview Point

For ordinary single-threaded String manipulation, `StringBuilder` is usually preferred over `StringBuffer`.

---

## Q60. When would you use `StringBuffer`?

### Definition
Use `StringBuffer` when you need a **mutable character sequence with synchronized methods**, particularly when the same buffer is accessed by multiple threads and that synchronization fits the required operation.

### Example

```java
StringBuffer sb = new StringBuffer();

sb.append("Hello");
sb.append(" World");

System.out.println(sb);
```

### Difference from StringBuilder

```text
StringBuilder
→ mutable
→ not synchronized
→ generally faster

StringBuffer
→ mutable
→ synchronized
→ generally slower because of synchronization
```

### Interview Point

Do not assume that using `StringBuffer` automatically makes every larger application-level operation thread-safe. Its methods are synchronized, but thread safety of a complete operation depends on how the object is used.

For most ordinary single-threaded String manipulation:

> Prefer `StringBuilder`.

---

## Q61. Difference between `==` and `.equals()` when comparing Strings?

### Definition

For objects, `==` compares **reference identity**.

`String.equals()` compares the **contents** of two Strings.

### Example

```java
String a = new String("Hello");
String b = new String("Hello");

System.out.println(a == b);
System.out.println(a.equals(b));
```

Output:

```text
false
true
```

Why?

```text
a ──→ String object 1 ("Hello")

b ──→ String object 2 ("Hello")
```

They are different objects but contain the same characters.

### String Pool Example

```java
String a = "Hello";
String b = "Hello";

System.out.println(a == b);
```

This can output:

```text
true
```

because both literals can refer to the same interned String.

### Interview Rule

For comparing String contents, use:

```java
a.equals(b)
```

not:

```java
a == b
```

---

## Q62. What happens when you create a String using `new String()`?

### Example

```java
String s = new String("Hello");
```

Two important things happen conceptually:

1. `"Hello"` is a String literal and is interned in the String Pool.
2. `new String("Hello")` creates a **new, distinct String object**.

Conceptually:

```text
String Pool
    │
    └── "Hello"

Heap
    │
    └── new String("Hello")
              ↑
              s
```

Therefore:

```java
String a = "Hello";
String b = new String("Hello");

System.out.println(a == b);
```

Output:

```text
false
```

But:

```java
System.out.println(a.equals(b));
```

Output:

```text
true
```

### Interview Point

Using `new String("Hello")` is generally unnecessary when you simply need a String with that value. A String literal is usually preferable.

---
