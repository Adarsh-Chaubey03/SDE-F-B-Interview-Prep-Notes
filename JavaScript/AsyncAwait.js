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


// synchronous code runs line by line, blocking further execution until each task finishes,
//  while asynchronous code allows non-blocking operations, so other code can run while waiting for tasks (like I/O) to complete. 
// JavaScript handles asynchrony using its event loop, along with callbacks, promises, and async/await.
