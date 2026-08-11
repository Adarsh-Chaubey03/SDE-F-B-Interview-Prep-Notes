// flatten array -> using inbuilt function
const arr = [1,[2,3,[4,5,6]]];
const result = arr.flat(Infinity);
console.log(result);

// flatten array -> using inbuilt function
function flatten(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result=result.concat(flatten(item));
        }else{
            result.push(item);
        }
    }
    return result;
}

console.log(flatten(arr));