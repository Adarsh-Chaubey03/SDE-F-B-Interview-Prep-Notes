# useEffect and useLayoutEffect

---

useEffect and useLayoutEffect are both used to perform side effects, but the main difference is when they run relative to the browser painting the UI.

## useEffect

useEffect runs after React has committed the DOM update and after the browser has had a chance to paint.
It is the preferred choice for most side effects such as API calls, subscriptions, and timers.

```text
React render
↓
DOM update
↓
Browser paints
↓
useEffect runs
```

## useLayoutEffect

useLayoutEffect runs after React has updated the DOM but before the browser paints the updated screen.
It is useful when I need to measure or modify the DOM before the user sees it, such as measuring an element's size or position.
Because useLayoutEffect can block painting, I should use useEffect unless I specifically need to perform work before the browser paints

```text
React render
↓
DOM update
↓
useLayoutEffect runs
↓
Browser paints
```

useLayoutEffect can delay browser painting, so it should only be used when the effect needs to happen before the user sees the updated UI.
Otherwise, useEffect is the preferred choice

## What does "painted" mean in React?

"Painted" means the browser has taken the updated DOM and actually displayed the updated pixels on the user's screen.
