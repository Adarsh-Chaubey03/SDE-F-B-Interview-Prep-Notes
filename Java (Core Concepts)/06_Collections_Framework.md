# G. Collections Framework — Q76–88

### Priority: Extremely High

## Q76. What is the Java Collections Framework?

### Definition

The **Java Collections Framework (JCF)** is a set of **interfaces, classes, and algorithms** used to store and manipulate groups of objects.

It provides commonly used data structures such as:

- `ArrayList`
- `LinkedList`
- `HashSet`
- `TreeSet`
- `HashMap`
- `PriorityQueue`

### Basic Structure

```text
                 Iterable
                    |
               Collection
          /          |          \
       List         Set       Queue
        |            |           |
   ArrayList      HashSet    PriorityQueue
   LinkedList     TreeSet
   Vector         LinkedHashSet
```

`Map` is separate from `Collection`:

```text
Map
├── HashMap
├── LinkedHashMap
├── TreeMap
└── Hashtable
```

### Example

```java
List<Integer> numbers = new ArrayList<>();

numbers.add(10);
numbers.add(20);
numbers.add(30);

System.out.println(numbers);
```

Output:

```text
[10, 20, 30]
```

### Interview Answer

> The Java Collections Framework provides interfaces, implementations, and algorithms for storing and manipulating groups of objects.

---

## Q77. Difference between `Collection` and `Collections`?

### Definition

`Collection` and `Collections` are different things.

### `Collection`

`Collection` is an **interface**.

It is the root interface for most collection types such as:

```text
List
Set
Queue
```

Example:

```java
Collection<Integer> numbers = new ArrayList<>();

numbers.add(10);
numbers.add(20);
```

### `Collections`

`Collections` is a **utility class** in `java.util`.

It provides static utility methods such as:

```java
Collections.sort(list);
Collections.reverse(list);
Collections.shuffle(list);
Collections.max(list);
Collections.min(list);
```

### Example

```java
List<Integer> numbers =
        new ArrayList<>(Arrays.asList(30, 10, 20));

Collections.sort(numbers);

System.out.println(numbers);
```

Output:

```text
[10, 20, 30]
```

### Easy Way to Remember

> **Collection = interface**  
> **Collections = utility class**

---

## Q78. Difference between `List`, `Set`, and `Map`?

### Definition

These interfaces represent different ways of storing data.

### List

A `List`:

- Maintains an order
- Allows duplicate elements
- Provides index-based access

### Example

```java
List<Integer> list = new ArrayList<>();

list.add(10);
list.add(20);
list.add(10);
```

Result:

```text
[10, 20, 10]
```

### Set

A `Set`:

- Does not allow duplicate elements
- Generally does not provide index-based access
- Ordering depends on the implementation

### Example

```java
Set<Integer> set = new HashSet<>();

set.add(10);
set.add(20);
set.add(10);
```

The set contains `10` only once.

### Map

A `Map` stores **key-value pairs**.

- Keys are unique
- Values can be duplicated

### Example

```java
Map<Integer, String> students = new HashMap<>();

students.put(1, "Adarsh");
students.put(2, "Rahul");
```

Conceptually:

```text
1 → Adarsh
2 → Rahul
```

### Comparison

| Feature | List | Set | Map |
|---|---|---|---|
| Stores | Elements | Elements | Key-value pairs |
| Duplicates | Allowed | Not allowed | Keys not duplicated |
| Ordering | Usually maintained | Depends on implementation | Depends on implementation |
| Index access | Yes | No | No |
| Example | `ArrayList` | `HashSet` | `HashMap` |

### Interview Trap

> `Map` is **not** a subtype of `Collection`.

---

## Q79. Difference between `ArrayList` and `LinkedList`?

### Definition

Both implement the `List` interface, but they use different internal structures.

### ArrayList

Uses a **resizable array** internally.

```text
[10][20][30][40]
```

### LinkedList

Uses a **doubly linked list**.

```text
10 ⇄ 20 ⇄ 30 ⇄ 40
```

### Comparison

| Feature | ArrayList | LinkedList |
|---|---|---|
| Internal structure | Dynamic array | Doubly linked list |
| Random access | O(1) | O(n) |
| Insert/remove at end | O(1) amortized | O(1) |
| Insert/remove in middle | O(n) due to shifting | O(1) after reaching node |
| Memory | Less overhead | More overhead per node |
| Cache locality | Better | Worse |
| Typical use | General-purpose List | Frequent insertion/removal when position/node is known |

### Example

```java
List<Integer> list = new ArrayList<>();

list.add(10);
list.add(20);
list.add(30);

System.out.println(list.get(1));
```

Output:

```text
20
```

### Important Interview Trap

Do not say:

> "LinkedList insertion is always O(1)."

Finding the required position can take O(n). The actual link adjustment is O(1) once the relevant node is reached.

---

## Q80. ArrayList vs Vector?

### Definition

Both `ArrayList` and `Vector` are resizable-array implementations of `List`.

### Main Difference

`Vector` is **synchronized**, while `ArrayList` is not.

### Comparison

| Feature | ArrayList | Vector |
|---|---|---|
| Internal structure | Dynamic array | Dynamic array |
| Synchronized | No | Yes |
| Performance | Generally faster | Generally slower due to synchronization |
| Status | Modern/common | Legacy class |
| Thread safety | Not synchronized | Synchronized methods |

### Example

```java
ArrayList<Integer> list = new ArrayList<>();
Vector<Integer> vector = new Vector<>();
```

### Which Should You Use?

For normal single-threaded code:

> Prefer `ArrayList`.

For concurrent use, choose an appropriate concurrent collection based on the actual requirement instead of automatically choosing `Vector`.

### Interview Point

`Vector` is considered a **legacy collection class**.

---

## Q81. ArrayList vs Stack?

### Definition

`ArrayList` is a general-purpose dynamic array, while `Stack` represents a **LIFO (Last In, First Out)** data structure.

### ArrayList

```java
ArrayList<Integer> list = new ArrayList<>();
```

It provides operations such as:

```text
add()
get()
remove()
```

### Stack

```java
Stack<Integer> stack = new Stack<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop());
```

Output:

```text
20
```

### Comparison

| ArrayList | Stack |
|---|---|
| General-purpose List | LIFO data structure |
| Index-based access | `push`, `pop`, `peek` |
| Not synchronized | Inherits synchronization from `Vector` |
| Modern general-purpose list | Legacy class |

### Preferred Modern Approach

For a stack in new code, Java generally recommends using `Deque`:

```java
Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);
stack.push(20);

System.out.println(stack.pop());
```

Output:

```text
20
```

### Interview Point

> `Stack` is a legacy class. `ArrayDeque` is generally preferred for stack operations in new code.

---

## Q82. HashSet vs LinkedHashSet vs TreeSet?

### Definition

All three implement `Set` and do not allow duplicate elements.

### HashSet

- Uses hashing
- No guaranteed iteration order
- Basic operations are O(1) expected

```java
Set<Integer> set = new HashSet<>();
```

### LinkedHashSet

- Uses hashing plus a linked structure
- Maintains **insertion order**
- Basic operations are O(1) expected

```java
Set<Integer> set = new LinkedHashSet<>();

set.add(30);
set.add(10);
set.add(20);
```

Iteration order:

```text
30 10 20
```

### TreeSet

- Maintains elements in sorted order
- Uses a balanced tree structure
- Basic operations are O(log n)

```java
Set<Integer> set = new TreeSet<>();

set.add(30);
set.add(10);
set.add(20);
```

Iteration:

```text
10 20 30
```

### Comparison

| Feature | HashSet | LinkedHashSet | TreeSet |
|---|---|---|---|
| Duplicates | No | No | No |
| Order | No guaranteed order | Insertion order | Sorted order |
| Basic operations | O(1) expected | O(1) expected | O(log n) |
| Internal structure | Hash table | Hash table + linked structure | Balanced tree |
| Null | Generally permits one `null` | Generally permits one `null` | Natural ordering generally does not permit `null` |

### Which Should You Choose?

```text
Need fast lookup, order doesn't matter
→ HashSet

Need insertion order
→ LinkedHashSet

Need sorted elements
→ TreeSet
```

---

## Q83. HashMap vs Hashtable?

### Definition

Both store key-value pairs, but `Hashtable` is a legacy synchronized class.

### HashMap

```java
Map<Integer, String> map = new HashMap<>();
```

Characteristics:

- Not synchronized
- Allows one `null` key
- Allows multiple `null` values
- Generally faster
- Modern/general-purpose choice

### Hashtable

```java
Map<Integer, String> table = new Hashtable<>();
```

Characteristics:

- Synchronized
- Does not allow `null` keys
- Does not allow `null` values
- Legacy class

### Comparison

| HashMap | Hashtable |
|---|---|
| Not synchronized | Synchronized |
| Allows one `null` key | Does not allow `null` key |
| Allows `null` values | Does not allow `null` values |
| Generally faster | Generally slower |
| Modern/common | Legacy |

### Which Should You Use?

Normally:

> Prefer `HashMap` for non-concurrent use.

For concurrent access, consider an appropriate concurrent collection such as `ConcurrentHashMap`.

---

## Q84. HashMap vs ConcurrentHashMap?

### Definition

`HashMap` is not designed for concurrent structural access without external synchronization.

`ConcurrentHashMap` is designed for **concurrent access by multiple threads**.

### Example

```java
Map<Integer, String> map =
        new ConcurrentHashMap<>();
```

### Comparison

| HashMap | ConcurrentHashMap |
|---|---|
| Not thread-safe for concurrent structural access | Designed for concurrent access |
| Allows one `null` key and `null` values | Does not allow `null` keys or values |
| Generally faster in single-threaded use | Optimized for concurrent use |
| External synchronization may be required | Provides concurrency mechanisms |

### Important Point

Do not say:

> "ConcurrentHashMap locks the entire map."

Modern implementations use finer-grained concurrency mechanisms and non-blocking techniques for many operations.

### Null Example

```java
ConcurrentHashMap<Integer, String> map =
        new ConcurrentHashMap<>();

map.put(null, "Hello");
```

This throws `NullPointerException`.

### Why no null?

It avoids ambiguity between:

```text
key is absent
```

and:

```text
key exists with a null value
```

This is particularly important for concurrent operations.

---

## Q85. How does HashMap work internally?

### Definition

`HashMap` stores data as **key-value pairs** using hashing and buckets.

Example:

```java
HashMap<String, Integer> map = new HashMap<>();

map.put("Adarsh", 90);
```

Conceptually:

```text
"Adarsh"
   ↓
hash
   ↓
bucket index
   ↓
entry
   ↓
90
```

### Step 1 — Calculate Hash

When:

```java
map.put(key, value);
```

is called, Java obtains the key's hash code:

```java
key.hashCode();
```

Modern JDK implementations also apply a hash-spreading transformation before determining the bucket.

### Step 2 — Determine Bucket

The hash is used to determine which bucket should contain the entry.

```text
hash → bucket index
```

Modern implementations maintain the table capacity as a power of two.

### Step 3 — Store the Entry

An entry conceptually contains:

```text
key
value
hash
next/reference when needed
```

### Step 4 — Handle Collisions

Different keys can map to the same bucket.

Conceptually:

```text
Bucket
  ↓
Node → Node → Node
```

If a bucket becomes sufficiently crowded and the required conditions are met, the collision structure can be converted into a balanced tree.

### `get()` Operation

For:

```java
map.get(key);
```

the process is roughly:

```text
key
 ↓
hash
 ↓
bucket
 ↓
compare hash/key
 ↓
equals()
 ↓
value
```

### Complexity

Average/expected:

```text
put()    → O(1)
get()    → O(1)
remove() → O(1)
```

Under severe collision conditions, tree bins can improve lookup behavior toward:

```text
O(log n)
```

for the affected bucket.

### Resize

When the number of entries crosses the threshold based on:

```text
capacity × load factor
```

the table is resized.

The commonly used default load factor is:

```text
0.75
```

Resizing increases the table capacity and redistributes entries.

### Interview Answer

> HashMap uses a hash table with buckets. It uses a key's hash to locate a bucket and `equals()` to distinguish keys when necessary. Collisions can be stored in linked nodes and sufficiently large collision structures can be treeified under appropriate conditions.

---

## Q86. What is hashing?

### Definition

**Hashing** is the process of converting a key into a numerical hash value using a hash function.

In Java:

```java
key.hashCode();
```

produces an integer hash code.

The hash helps determine where the key-value entry should be stored.

### Example

```java
String key = "Java";

int hash = key.hashCode();

System.out.println(hash);
```

### Concept

```text
Key
 ↓
hashCode()
 ↓
Hash
 ↓
Bucket
```

### Important Properties

Two equal objects **must** have the same hash code.

But two different objects **can** have the same hash code.

That is a **hash collision**.

### Interview Point

Hashing allows data structures such as `HashMap` and `HashSet` to perform lookup efficiently on average.

---

## Q87. What happens when two keys have the same hash code?

### Definition

When two keys have the same hash code, a **hash collision** occurs.

Example:

```text
Key A → hash = 100
Key B → hash = 100
```

They may be placed in the same bucket.

### Does HashMap lose one key?

**No**, provided the keys are not equal.

Conceptually:

```text
Bucket
   ↓
Entry A
   ↓
Entry B
```

When retrieving a key, Java uses the hash information to find the bucket and then uses `equals()` to identify the correct key.

### Example

```java
class Person {
    int id;

    Person(int id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Person)) return false;

        Person other = (Person) obj;
        return this.id == other.id;
    }
}
```

Here every `Person` deliberately has the same hash code, but `equals()` distinguishes different IDs.

### Interview Answer

> When two keys have the same hash code, they can go to the same bucket. HashMap then uses equality comparison to distinguish the keys. This is called collision handling.

---

## Q88. Why are `equals()` and `hashCode()` related?

### Definition

`equals()` and `hashCode()` must follow a specific contract for hash-based collections such as `HashMap` and `HashSet`.

The main rule is:

> If two objects are equal according to `equals()`, they **must have the same hash code**.

But:

> Two objects having the same hash code do **not necessarily have to be equal**.

### Example

If:

```java
a.equals(b) == true
```

then:

```text
a.hashCode() == b.hashCode()
```

must also be true.

But:

```text
a.hashCode() == b.hashCode()
```

does not guarantee:

```text
a.equals(b) == true
```

because collisions are possible.

### Why is this important?

Suppose:

```java
HashMap<Student, String> map;
```

When:

```java
map.get(student);
```

is called, HashMap roughly performs:

```text
hashCode()
    ↓
find bucket
    ↓
equals()
    ↓
find exact key
```

If two equal objects have different hash codes, they may be placed in different buckets and the HashMap may fail to find a logically equal key.

### Example

```java
class Student {
    int id;

    Student(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Student)) return false;

        Student other = (Student) obj;
        return id == other.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}
```

Now:

```java
Student s1 = new Student(101);
Student s2 = new Student(101);

System.out.println(s1.equals(s2));
```

Output:

```text
true
```

And their hash codes are also equal.

### Interview Rule

```text
equals() true
      ↓
same hashCode() REQUIRED

same hashCode()
      ↓
equals() true NOT guaranteed
```

---

# Quick Revision — Q76–88

| Q | Key Point |
|---|---|
| 76 | Collections Framework provides interfaces, implementations, and algorithms for groups of objects |
| 77 | `Collection` = interface; `Collections` = utility class |
| 78 | `List` = ordered/duplicates; `Set` = unique; `Map` = key-value pairs |
| 79 | `ArrayList` = dynamic array; `LinkedList` = doubly linked list |
| 80 | `ArrayList` is unsynchronized; `Vector` is synchronized and legacy |
| 81 | `Stack` is legacy LIFO; prefer `Deque`/`ArrayDeque` for new stack implementations |
| 82 | `HashSet` = no guaranteed order; `LinkedHashSet` = insertion order; `TreeSet` = sorted order |
| 83 | `HashMap` = unsynchronized + permits nulls; `Hashtable` = synchronized + no null keys/values |
| 84 | `ConcurrentHashMap` = designed for concurrent access; doesn't allow null keys/values |
| 85 | `HashMap` uses hashing, buckets, collision handling, and can treeify heavily populated buckets |
| 86 | Hashing converts a key into a hash value used to locate a bucket |
| 87 | Same hash → collision; HashMap uses equality comparison to distinguish keys |
| 88 | Equal objects must have equal hash codes; equal hash codes don't imply equality |

---

# Most Important Interview Traps

### Trap 1 — `Collection` vs `Collections`

```text
Collection  → interface
Collections → utility class
```

### Trap 2 — `Map` is not a `Collection`

```text
Collection
├── List
├── Set
└── Queue

Map
├── HashMap
├── TreeMap
└── Hashtable
```

### Trap 3 — LinkedList insertion

Do not simply say:

```text
LinkedList insertion = O(1)
```

Finding the position can take O(n). The link adjustment is O(1) after the relevant node is reached.

### Trap 4 — HashMap internals

Don't say only:

> HashMap uses an array of linked lists.

Modern Java implementations can treeify sufficiently large collision structures.

### Trap 5 — Hash collision

Same hash code does **not** mean same key.

```text
same hash
   ↓
collision
   ↓
equals() distinguishes keys
```

### Trap 6 — `equals()` / `hashCode()`

Remember:

```text
a.equals(b) == true
        ↓
a.hashCode() == b.hashCode()
```

But:

```text
same hashCode()
        ↓
does NOT guarantee equals() == true
```

### Trap 7 — HashMap vs ConcurrentHashMap

`ConcurrentHashMap` is not simply a faster `HashMap`. It is specifically designed for concurrent access and has different null-handling behavior.

---

# Highest-Priority Questions in This Set

### Tier 1

- **Q78** — List vs Set vs Map
- **Q79** — ArrayList vs LinkedList
- **Q82** — HashSet vs LinkedHashSet vs TreeSet
- **Q83** — HashMap vs Hashtable
- **Q84** — HashMap vs ConcurrentHashMap
- **Q85** — HashMap internals
- **Q87** — Hash collisions
- **Q88** — `equals()` and `hashCode()`

### Tier 2

- **Q76** — Collections Framework
- **Q77** — Collection vs Collections
- **Q80** — ArrayList vs Vector
- **Q81** — ArrayList vs Stack
- **Q86** — Hashing

## One Connected Concept to Remember

Q85, Q87, and Q88 are one connected topic:

```text
Key
 ↓
hashCode()
 ↓
Hash
 ↓
Bucket
 ↓
Collision?
 ↓
equals()
 ↓
Correct key/value
```

Understanding this flow is more important than memorizing the three answers separately.
