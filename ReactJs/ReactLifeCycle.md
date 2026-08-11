

**What is the React component lifecycle? Explain Initialization, Mounting, Updating, and Unmounting.**

### Interview Answer

> "The React component lifecycle describes the different stages a component goes through from being initialized to being removed from the UI.
>
> **Initialization** is the stage where the component is prepared with its initial values and state. For example:
>
> ```javascript
> const [count, setCount] = useState(0);
> ```
>
> Here, `0` is the initial state.
>
> **Mounting** happens when the component is rendered for the first time and added to the DOM. For example:
>
> ```javascript
> function App() {
>     return <h1>Hello</h1>;
> }
> ```
>
> After the component is committed to the DOM, an effect such as:
>
> ```javascript
> useEffect(() => {
>     console.log("Component mounted");
> }, []);
> ```
>
> can run.
>
> **Updating** happens when the component's state or props change. For example:
>
> ```javascript
> setCount(1);
> ```
>
> React renders the component again and commits the necessary UI changes.
>
> **Unmounting** happens when the component is removed from the UI, such as when navigating from one page to another. If the component has resources such as timers, subscriptions, event listeners, or WebSocket connections, they should be cleaned up:
>
> ```javascript
> useEffect(() => {
>     const timer = setInterval(() => {
>         console.log("Running");
>     }, 1000);
>
>     return () => {
>         clearInterval(timer);
>     };
> }, []);
> ```
>
> The cleanup function runs when the component is unmounted and also before the effect is re-run when its dependencies change."

### Easy Flow

```text
Initialization
      ↓
Mounting
      ↓
Updating
      ↓
Unmounting
```

