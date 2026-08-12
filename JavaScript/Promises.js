// handle asynchronous task for more readable and structured approach 
// better than call back for handling outputs
// A promise represents a value that may be available in the future.
// It allows you to write asynchronous code that’s easier to manage, using .then() for success and .catch() for error
// pending, fulfilled, rejected

const data = {
    name: "john",
    age: 20
}

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

fetchData().then(
    data=> {
        console.log("Data ", data);      
    }
).catch(err=>{
    console.log(err);
})





