// useState is a React Hook that allows functional components to maintain state. It returns the current state value 
// and a setter function. When the setter is called with a new value, React schedules an update and the component can
// re-render with the new state. If the new state depends on the previous state, I use the functional form
//  such as setCount(prev => prev + 1).

import { useState } from "react";

function Counter(){
 const[count, setCount] = useState(0);

 return(
  <button onClick={()=> setCount(count+1)}> Increase </button>
 );
}
