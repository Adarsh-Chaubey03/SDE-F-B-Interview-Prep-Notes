# React: Class Components vs Functional Components

## Simplest Definition

* **Class Component:** A React component written using a JavaScript `class`. It uses lifecycle methods and `this`.
* **Functional Component:** A React component written as a JavaScript function that returns JSX. It uses **Hooks** for state and other React features.

## Simple Examples

### Class Component

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

### Functional Component

```jsx
function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}
```

## Key Differences

| Feature        | Class Component           | Functional Component          |
| -------------- | ------------------------- | ----------------------------- |
| Syntax         | JavaScript class          | JavaScript function           |
| State          | `this.state`              | `useState()`                  |
| Lifecycle      | Lifecycle methods         | `useEffect()` and other Hooks |
| `this` keyword | Required                  | Not required                  |
| Code           | Usually more verbose      | Usually shorter               |
| Hooks          | Cannot use Hooks directly | Can use Hooks                 |
| Modern React   | Legacy approach           | **Recommended approach**      |
| Performance    | Generally comparable      | Generally comparable          |
| Readability    | More boilerplate          | Usually simpler               |

## Why Choose Functional Components Today?

Functional components are preferred in modern React because:

1. **Less boilerplate**
2. **Hooks provide state and lifecycle functionality**
3. **No ****this**** binding**
4. **Logic can be easily reused with custom Hooks**
5. **Most modern React documentation and code uses them**

### Interview Answer

> A class component is a React component created using a JavaScript class, while a functional component is a JavaScript function that returns JSX. Today, functional components are generally preferred because they are simpler, require less boilerplate, and support Hooks such as `useState` and `useEffect`. Class components are mainly encountered in older React codebases.
