function increase() {
    setCount(count + 1);
    setCount(count + 1);
}
// does not reliably mean +2.


// When multiple updates depend on the previous state, use the functional form:
function increase() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
}

//Now one click produces: 0 → 2




// | Event | Used for |
// | `onClick` | Button/element clicked |
// | `onChange` | Input/select value changed |
// | `onSubmit` | Form submitted |
// | `onFocus` | Input receives focus |
// | `onBlur` | Input loses focus |