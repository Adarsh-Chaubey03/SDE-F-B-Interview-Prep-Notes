
function cook(ing1, ing2) {
    console.log(`${this.name} is having meal with ${ing1} and ${ing2}`);
}

const adam = { name: "adam" };

// call - specify parameter one by one
//      - Invokes the function immediately
cook.call(adam, "rice", "beans");


// Apply - invokes immediately but takes argument as array all at once
cook.apply(adam, ["rice", "beans"]);

// Bind - not immediately invokes the funtion --->  returns a function
const cookforAdam = cook.bind(adam, "rice","beans")

// executed only when it is called 
cookforAdam();