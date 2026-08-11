// a fn that remembers the env in which it is created even after the outer fn has finished its execution

// function outerF(){
//     let out = " this is outer"

//     function innerFunction(){
//         console.log(out);
//     }
//     return innerFunction;

// }

// const closure = outerF();
// closure();


function counter(){
    let count=0;
    return {
        increment : function(){
            count++;
            return count;
        },
         decrement : function(){
            count--;
            return count;
        },
         displayCount : function(){
            let message = "current count "+count;
            return message;
        }
    }
}

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.increment());

