// CURRYING IN JAVASCRIPT

// Currying is a technique of transforming a function that takes multiple arguments into a sequence of functions,
//  where each function takes one argument.

// Example:

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); // 9

// Key Points:
// • Converts f(a, b, c) into f(a)(b)(c).
// • Uses closures to remember previously passed arguments.
// • Useful for function reuse and partial application.
// • Commonly used in functional programming.