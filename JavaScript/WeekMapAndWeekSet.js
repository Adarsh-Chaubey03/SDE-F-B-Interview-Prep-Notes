// WEAKMAP & WEAKSET

// WeakMap:
// A WeakMap is a collection of key-value pairs where the keys must be objects.
// The keys are held weakly, so if there is no other reference to a key object,
// it can be garbage-collected.

// WeakSet:
// A WeakSet is a collection that stores only objects.
// Objects are held weakly and can be garbage-collected when there are no other
// references to them.

// Key Points:
// • WeakMap → object keys only; values can be anything.
// • WeakSet → objects only; no primitive values.
// • Both are NOT iterable.
// • Both do NOT have a `size` property.
// • Both support garbage collection of unreferenced objects.
// • Useful for temporary/private metadata associated with objects.
// • Main purpose → avoid keeping objects alive unnecessarily.

// Example:

const weakMap = new WeakMap();

let user = { name: "Adarsh" };

weakMap.set(user, "User Data");

console.log(weakMap.get(user));

user = null;


// WeakSet

const weakSet = new WeakSet();

let person = { name: "Adarsh" };

weakSet.add(person);

console.log(weakSet.has(person));

person = null;