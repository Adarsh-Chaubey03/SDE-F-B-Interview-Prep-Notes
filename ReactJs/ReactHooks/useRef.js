// useRef is a React Hook that lets us store a value that persists between renders without causing a re-render when that value changes.
//  It is also commonly used to directly access a DOM element.


//             useState	                                                        useRef
// Stores state for rendering	                        Stores a mutable value/reference
// Updating it schedules a re-render	                Changing .current does not schedule a re-render
// Used when UI needs the updated value            	Used when UI does not need to re-render
// State value is accessed directly	                Value is accessed through .current

import { useRef } from "react";

function App() {
    const count = useRef(0);

    function increase() {
        count.current++;
        console.log(count.current);
    }

    return (
        <button onClick={increase}>
            Increase
        </button>
    );
}

export default App;