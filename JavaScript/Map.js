// MAP METHOD
//
// `map()` creates a NEW array by applying the specified function
// to each element of an existing array.
//
// Syntax:
// array.map(callbackFunction);
//
// The original array is NOT modified.

const number = [1, 2, 3, 4, 5];

const double = number.map(num => num * 2);

console.log(number); // [1, 2, 3, 4, 5]
console.log(double); // [2, 4, 6, 8, 10]