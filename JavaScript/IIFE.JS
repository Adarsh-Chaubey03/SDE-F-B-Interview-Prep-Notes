// Immediately Invoked Function Expression

// normal fucntion 
function greet(){
    console.log(("Hello World"))
}

// prints only when called
greet()


// IIFE
;(function() {
    console.log("IIFE");
})();