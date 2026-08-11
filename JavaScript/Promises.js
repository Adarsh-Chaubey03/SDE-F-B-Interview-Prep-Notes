// handle asynchronous task for more readable and structured approach 
// better than call back for handling outputs

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



// use of async and await in js
// async returns a promise
//await - pause the execution of the code until the promise is resolved and then returns the resolved value