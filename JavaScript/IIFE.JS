// Immediately Invoked Function Expression (IIFE)
// A function that is executed immediately after it is defined.

// Normal function
function greet() {
    console.log("Hello World");
}

// Prints only when explicitly called
greet();

// IIFE
// Executes immediately without needing a separate function call.
;(function() {
    console.log("IIFE");
})();