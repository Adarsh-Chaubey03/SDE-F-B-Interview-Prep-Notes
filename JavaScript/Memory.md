# Stack vs Heap Memory

## Simplest Definition

* **Stack:** Stores function calls, local variables, and other short-lived data.
* **Heap:** Stores dynamically allocated data such as objects and arrays.

## Key Differences

| Feature    | Stack                              | Heap                             |
| ---------- | ---------------------------------- | -------------------------------- |
| Stores     | Function calls, local variables    | Objects, arrays, dynamic data    |
| Speed      | Faster                             | Relatively slower                |
| Management | Automatically managed              | Managed dynamically              |
| Lifetime   | Usually tied to function execution | Can exist beyond a function call |
| Size       | Generally smaller                  | Generally larger                 |

## Simple Example

```javascript
function greet() {
  const name = "Adarsh";        // Local variable
  const user = { age: 22 };     // Object stored in heap
  console.log(name, user);
}

greet();
```

### Interview Answer

> The stack manages function calls and local execution data, while the heap stores dynamically allocated data such as objects and arrays. Stack memory is generally faster and automatically managed, whereas heap memory is used for data with dynamic size and lifetime.
