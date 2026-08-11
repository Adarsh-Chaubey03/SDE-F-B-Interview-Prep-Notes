# What happens internally when a React application starts loading?


## First Appearance / What Happens First

> **When a React application starts, the browser first loads the HTML, JavaScript, and other required assets. The JavaScript bundle is executed, and React starts from the application's entry point, such as main.jsx. React creates the root and renders the main component into the root DOM element. React then builds its element tree, performs reconciliation, and commits the required changes to the DOM. Finally, the browser paints the updated UI on the screen.**

## Flow

```text
Browser loads HTML + JS + CSS
            ↓
JavaScript executes
            ↓
Entry point (main.jsx)
            ↓
createRoot()
            ↓
App component renders
            ↓
Reconciliation
            ↓
Commit DOM changes
            ↓
Browser paints UI
```

## Important Points

> **1. `createRoot()` connects React to the DOM root element.**

> **2. React renders the component tree.**

> **3. Reconciliation determines what needs to change.**

> **4. React commits the required changes to the DOM.**

> **5. The browser paints the updated UI.**

### Typical Entry Point

```javascript
createRoot(document.getElementById("root")).render(
    <App />
);
```

> **Interview Line:**  
> "React starts from the entry point, creates a root, renders the component tree, reconciles changes, commits the necessary DOM updates, and the browser paints the UI."
