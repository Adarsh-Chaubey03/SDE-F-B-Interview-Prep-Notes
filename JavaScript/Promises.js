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





