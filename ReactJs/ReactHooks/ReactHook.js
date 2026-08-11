
/* 
 React Hooks are functions provided by React that allow functional components to use features such as state, side effects,
 context, and references. 
 Before Hooks were introduced, state and lifecycle-related functionality was primarily handled using class components.
Hooks made it possible to manage these features directly inside functional components.

| Hook          | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `useState`    | Manages component state                          |
| `useEffect`   | Handles side effects                             |
| `useContext`  | Accesses context values                          |
| `useRef`      | Stores mutable values or references DOM elements |
| `useMemo`     | Memoizes a computed value                        |
| `useCallback` | Memoizes a function                              |

*/

import { useState } from "react";

function Counter(){
 const[count, setCount] = useState(0);

 return(
  <button onClick={()=> setCount(count+1)}> Increase </button>
 );
}