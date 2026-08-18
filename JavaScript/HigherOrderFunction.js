// HIGHER-ORDER FUNCTION (HOF)
//
// A higher-order function is a function that either:
// 1. Takes another function as an argument, OR
// 2. Returns a function.
//
// Here, `map()` is a higher-order function because it takes a function
// as an argument and applies that function to every element of the array.

const number = [1, 2, 3, 4, 5];

const double = number.map(function(num) {
    // The callback function receives each array element as `num`
    // and returns its doubled value.
    return num * 2;
});

console.log(double); // [2, 4, 6, 8, 10]