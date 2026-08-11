
// takes function as argument and returns a function

const number = [1, 2, 3, 4, 5];

const double = number.map(function(num) {
    return num * 2;
});

console.log(double);
