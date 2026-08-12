// ==========================================
// var, let, and const in JavaScript
// ==========================================


// 1. HOISTING
// ------------------------------------------
// var is hoisted and initialized with undefined.
// Therefore, it can be accessed before declaration.

console.log(x); // undefined
var x = 10;


// let and const are also hoisted,
// but they remain in the Temporal Dead Zone (TDZ)
// until their declaration is reached.

// console.log(y); // ReferenceError
let y = 20;

// console.log(z); // ReferenceError
const z = 30;


// 2. var
// ------------------------------------------
// Function-scoped
// Can be reassigned
// Can be redeclared

var a = 10;

a = 20;       // Allowed

var a = 30;   // Allowed


// 3. let
// ------------------------------------------
// Block-scoped
// Can be reassigned
// Cannot be redeclared in the same scope

let b = 10;

b = 20;       // Allowed

// let b = 30; // Error


// 4. const
// ------------------------------------------
// Block-scoped
// Cannot be reassigned
// Cannot be redeclared

const c = 10;

// c = 20;    // Error

// const c = 30; // Error


// 5. BLOCK SCOPE
// ------------------------------------------
// var is not block-scoped.

{
    var p = 100;
}

console.log(p); // 100


// let and const are block-scoped.

{
    let q = 200;
    const r = 300;
}

// console.log(q); // Error
// console.log(r); // Error


// 6. MODERN JAVASCRIPT
// ------------------------------------------
// Use const by default.
// Use let when the value needs to change.
// Avoid var in modern JavaScript.