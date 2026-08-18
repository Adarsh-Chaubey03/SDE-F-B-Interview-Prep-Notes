// How do you call two different REST API endpoints at the same time?

// If the two API requests are independent, I can send them concurrently using Promise.all() with fetch() 
// or another HTTP client such as Axios. This allows both requests to start without waiting for the first request to complete.

const getData = async() => {


    const[users,product] = await Promise.all([
     fetch("/api/users"),
     fetch("/api/products")
    ]);




// Promise.all() takes multiple promises and returns a single promise that:

// resolves when all promises resolve
// rejects when any one promise rejects

// reads the response body  as JSON and converts it into javascript values
    const usersData = await users.json();
    const productsData = await products.json();

    console.log(usersData);
    console.log(productsData);
}

//  If any promise passed to Promise.all() rejects, the Promise.all() itself immediately rejects
//  with that rejection reason. It does not return the successful results of the other promises.



// If you're using try...catch:
try {
    const result = await Promise.all([
        fetch("/api/users"),
        fetch("/api/products"),
        fetch("/api/orders")
    ]);

    console.log(result);
} catch (error) {
    console.log("Error:", error);
}

// The catch block handles the rejection.

// 4 type of promises
// ALL        → Everyone must succeed
// ALLSETTLED → Everyone must finish
// RACE       → First to finish
// ANY        → First to succeed