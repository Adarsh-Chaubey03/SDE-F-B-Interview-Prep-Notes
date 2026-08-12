# Double Equal (`==`) vs Triple Equal (`===`) in JavaScript

## Simplest Definition

* **`==`**** (Loose Equality):** Compares values after **type conversion** if needed.
* **`===`**** (Strict Equality):** Compares both **value and data type** without type conversion.

## Examples

### Double Equal `==`

```javascript
console.log(5 == "5"); // true
```

`"5"` is converted to the number `5`, so the values are considered equal.

### Triple Equal `===`

```javascript
console.log(5 === "5"); // false
```

The values are the same, but their types are different:

* `5` → number
* `"5"` → string

## Key Difference

| Operator | Type Conversion | Example     | Result  |
| -------- | --------------- | ----------- | ------- |
| `==`     | Yes             | `5 == "5"`  | `true`  |
| `===`    | No              | `5 === "5"` | `false` |

### Interview Answer

> `==` performs loose equality and may convert types before comparison, while `===` performs strict equality and checks both value and type. In most cases, `===` is preferred because it avoids unexpected type coercion.
