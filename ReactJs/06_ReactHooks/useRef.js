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

// useRef lets you hold onto something between renders without causing re-renders. 
// A real-world example: you can use useRef to store a reference to an input element so that when a user clicks a button, you programmatically focus that input


// Imagine you have a sticky note that you keep on your desk. That sticky note can hold a number, a word, or a reminder. 
// useRef is like that sticky note—it lets you save something (like an input box) and keep it there between page updates. 
// For example, if you want to focus an input field when a user clicks a button, you use useRef to point to that input and 
// tell it, “Hey, focus now!”