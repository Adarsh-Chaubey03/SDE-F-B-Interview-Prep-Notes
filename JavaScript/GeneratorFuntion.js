// GENERATOR FUNCTION 

// A generator function is a function that can pause its execution using `yield`
// and resume from where it stopped when `next()` is called.

// Syntax:

function* functionName() {
    yield value;
}

Example:

function* infiniteSequence() {
    let num = 1;

    while (true) {
        yield num;
        num++;
    }
}

const seq = infiniteSequence();

console.log(seq.next()); // { value: 1, done: false }
console.log(seq.next()); // { value: 2, done: false }
console.log(seq.next()); // { value: 3, done: false }

// Key Points:
// • `function*` defines a generator.
// • `yield` pauses execution and returns a value.
// • `next()` resumes execution.
// • Generator maintains its execution state between `next()` calls.
// • Useful for lazy evaluation and handling sequences/iterators.