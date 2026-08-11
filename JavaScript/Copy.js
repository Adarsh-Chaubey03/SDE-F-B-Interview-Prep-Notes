// SHALLOW COPY
// • Copies only the top-level properties.
// • Nested objects/arrays are still referenced.
// • Changes to nested data affect the original.

// DEEP COPY
// • Copies all levels, including nested objects/arrays.
// • No shared references.
// • Changes to nested data do not affect the original.

// Example:
const original = {
    name: "Adarsh",
    address: {
        city: "Imphal"
    }
};

const shallow = { ...original };
const deep = structuredClone(original);

shallow.address.city = "Delhi";

console.log(original.address.city); // Delhi

deep.address.city = "Mumbai";

console.log(original.address.city); // Delhi