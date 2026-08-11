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