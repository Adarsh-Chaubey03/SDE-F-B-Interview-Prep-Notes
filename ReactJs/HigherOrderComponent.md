# Higher-Order Component (HOC) in React

## Simplest Definition

A **Higher-Order Component (HOC)** is a function that **takes a component and returns a new enhanced component**.

It is mainly used to **reuse logic across multiple components**.

## Simple Example

```jsx
function withAuth(Component) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h1>Please Login</h1>;
    }

    return <Component {...props} />;
  };
}

// Enhanced component
const ProtectedPage = withAuth(HomePage);
```

Here, `withAuth()` adds **authentication logic** to `HomePage`.

## Common Uses

* Authentication
* Data fetching
* Logging
* Permission checking
* Reusing common behavior

## Interview Answer

> A Higher-Order Component is a function that takes a React component and returns a new enhanced component. It is used to reuse common logic across multiple components.
