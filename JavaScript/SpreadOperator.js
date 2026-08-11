// The spread operator (...) is used to unpack or expand
// the elements of an array or the properties of an object.
// It is mainly used to copy, combine, or expand arrays and objects.

const numbers = [1, 2, 3];

// ...numbers expands the elements of the numbers array.
// [1, 2, 3] becomes 1, 2, 3

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Output: [1, 2, 3, 4, 5]



// Create a shallow copy

const number = [1, 2, 3];

const copy = [...number];

console.log(number);
console.log(copy);

// Output: [1, 2, 3]