// While `useState` is great for managing simple state transitions, `useReducer` is used for more complex state logic, 
// especially when state transitions depend on the previous state or involve multiple sub-values. 

// It works similarly to a Redux-like reducer, where you dispatch actions to update state.
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }

  return state;
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}
