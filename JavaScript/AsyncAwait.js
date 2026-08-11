// async returns a promise
//await - pause the execution of the code until the promise is resolved and then returns the resolved value
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();

        console.log("Data fetched successfully");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

fetchData();
