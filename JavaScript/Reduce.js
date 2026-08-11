const arr = [1,2,3,4,5]

// reduces array to a single value by applying a function on each element
const sum = arr.reduce((acc,num)=>acc+num,0);
console.log(sum);
