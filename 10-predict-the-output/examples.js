// 1. Hoisting with var

console.log(hoistingVar);

var hoistingVar = 10; // Logs undefined
// why? var declarations are hoisted and initialized with undefined,
// but the assignment happens only when execution reaches that line.

// 2. Hoisting with let

console.log(hoistingLet);

let hoistingLet = 10; // Logs: ReferenceError: Cannot access 'hoistingLet' before initialization
// why? The period between entering the scope and reaching the declaration is called the Temporal Dead Zone (TDZ).

// 3. var vs let

console.log(hoisting3a); // Logs: undefined
console.log(hoisting3b); // Logs: ReferenceError: Cannot access 'hoisting3b' before initialization

var hoisting3a = 10;
let hoisting3b = 20; 

// 4. Function declaration hoisting

functionDeclarationHoisting();

function functionDeclarationHoisting() {
    console.log("Function declaration hoisted."); // Logs: Function declaration hoisted.
}

// 5. Function expression hoisting

functionExpressionHoisting();

var functionExpressionHoisting = function() {
    console.log("Function expression hoisted."); // Logs: TypeError: functionExpressionHoisting is not a function
};

// 6. Function declaration vs variable

console.log(foo); // Logs: [Function: foo]
// why? Function declarations are hoisted with their function value,
// while var is initialized as undefined

var foo = "A";

function foo() {
    return "B";
}

// 7. Shadowing

let a = 10;

{
    let a = 20;
    console.log(a); // logs: 20 this is because chis console log runs in the inner block where a is 20
}

console.log(a); // logs: 10 this is because this console log runs in the outer block where a is 10

// why? The inner a shadows the outer a.

// 8. var shadowing

var shadowingVarA = 10;

function test() {
    var shadowingVarA = 20;
    console.log(shadowingVarA); // Logs: 20 this is because this console log runs in the inner function where shadowingVarA is 20
}

test();

console.log(shadowingVarA); // Logs: 10 this is because this console log runs in the outer scope where shadowingVarA is 10
// why? The function has its own function-scoped shadowingVarA

// 9. Illegal shadowing

// let illegalShadowing = 10;

// {
//     var illegalShadowing = 20;
// }

// this throws syntax error as You cannot declare a var variable 
// in an inner block if it conflicts with an existing let in the enclosing scope.

// but this works

var legalShadowing = 10;

{
    let legalShadowing = 20;
    console.log(legalShadowing); // Logs: 20
}

// 10. Closure — basic

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    }
}

const counter = outer();

counter(); // Logs: 1
counter(); // Logs: 2
counter(); // Logs: 3

// why? The inner function forms a closure over count.

// Even though outer() has finished executing, the returned function still has access to count.

// A closure is created when a function remembers and can access variables 
// from its lexical scope even after the outer function has finished execution

// 11. Multiple closures

function multipleClosures() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            console.log(count);
        }
    }
}

const counter2 = multipleClosures();

counter2.increment();
counter2.increment();
counter2.getCount(); // Logs: 2

// why? Both functions share the same closed-over count

// 12. Classic closure + var

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Logs: 3, 3, 3
    }, 0);
}

// why? var is function-scoped, so all callbacks refer to the same i
// After the loop finishes: i === 3
// All callbacks execute later and read 3


// 13. Fix using let

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Logs: 0, 1, 2
    }, 1000);
}

// why? let is block-scoped, so each callback has its own copy of i
// let creates a new binding for each iteration.

// 15. Event Loop — basic

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

// Logs: A, C, B

// why? Synchronous code executes first.
// Call Stack
//  ↓
//  A
//  C

// Task Queue
//   ↓
//   B

// 16. Promise vs setTimeout

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Logs: A, D, C, B

// Execution order
// 1. Synchronous code
// 2. Microtasks
// 3. Macrotasks

// 17. Multiple Promises and timeout

console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

Promise.resolve().then(() => {
    console.log("3");
});

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");

// Logs: 1, 5, 2, 3, 4

// Microtasks execute in FIFO order before the timer task.

// 18. Nested Promise + setTimeout

console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    })
});

Promise.resolve().then(() => {
    console.log("D");

    setTimeout(() => {
        console.log("E");
    }, 0);
});

console.log("F");

// Logs: A, F, D, B, C, E

// 19. async/await

console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");

// Logs: A, B, D, C

// why? async function starts synchronously. So: A B When execution reaches: await Promise.resolve();
// the rest of the function is scheduled as a microtask Then: D Finally: C

// 20. async/await + setTimeout

console.log("1");

async function test() {
    console.log("2");

    await Promise.resolve();

    console.log("3");

    setTimeout(() => {
        console.log("4");
    }, 0);
}

test();

setTimeout(() => {
    console.log("5");
}, 0);

console.log("6");

// Logs: 1, 2, 6, 3, 5, 4

// why? Synchronous: 1, 2, 6 Microtask: 3 Macrotask: 5, 4

// 21. Event loop tricky question

console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("promise");

    setTimeout(() => {
        console.log("inner timeout");
    }, 0);
});

console.log("end");

// Logs: start, end, promise, timeout, inner timeout

// 22. Closure + asynchronous code

function test() {
    let value = 10;

    setTimeout(() => {
        console.log(value);
    }, 1000);

    value = 20;
}

test();

// Logs: 20
// Why? The callback closes over the variable, not a snapshot of its original value.

// 23. const object mutation

const user = {
    name: "John"
};

user.name = "Alex";

console.log(user.name);

// Logs: Alex

// Why? const prevents reassignment of the variable binding, not mutation of the object.
// But: const user = {}; user = {}; gives: TypeError

// 24. Type coercion

console.log(1 + "2"); // Logs: "12" because the number 1 is coerced to a string and concatenated with "2"
console.log("5" - 2); // Logs: 3 because the string "5" is coerced to a number and subtracted by 2
console.log("5" + 2); // Logs: "52" because the number 2 is coerced to a string and concatenated with "5"

// Why? + can mean string concatenation & - forces numeric conversion.

// 25. == vs ===

console.log(5 == "5"); // Logs: true because == performs type coercion and compares the values after converting "5" to a number
console.log(5 === "5"); // Logs: false because === checks for both value and type, and the types are different (number vs string)

// Why? == performs type coercion, === checks both type and value.

// 26. Tricky null

console.log(null == undefined); // Logs: true because == considers null and undefined equal in value but not in type
console.log(null === undefined); // Logs: false because === checks for both value and type, and null and undefined are different types
// type of null is object and type of undefined is undefined

// 27. Boolean coercion

console.log(Boolean(0)); // Logs: false because 0 is falsy
console.log(Boolean("0")); // Logs: true because non-empty strings are truthy
console.log(Boolean("")); // Logs: false because empty strings are falsy
console.log(Boolean([])); // Logs: true because non-empty arrays are truthy
console.log(Boolean({})); // Logs: true because non-empty objects are truthy

// Remember: 
// 0       → false
// ""      → false
// null    → false
// undefined → false
// NaN     → false

// 28. typeof

console.log(typeof null); // Logs: object because of a historical bug in JavaScript
console.log(typeof undefined); // Logs: undefined
console.log(typeof []); // Logs: object because arrays are objects in JavaScript
console.log(typeof {}); // Logs: object because {} is an object
console.log(typeof function() {}); // Logs: function because functions are a special type of object in JavaScript
console.log(typeof null === "object"); // Logs: true because of the historical bug in JavaScript

// 29. Advanced Event Loop Question


console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");

    Promise.resolve().then(() => {
        console.log("4");
    });
});

setTimeout(() => {
    console.log("5");
}, 0);

console.log("6");

// Logs: 1, 6, 3, 4, 2, 5

// 30. One of the hardest common questions

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);

    Promise.resolve().then(() => {
        console.log("E");
    });
});

setTimeout(() => {
    console.log("F");
}, 0);

console.log("G");

// Logs: A, G, C, E, B, F, D

// 31. Promise.all

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(values => {
    console.log(values);
});

// Logs: [1, 2, 3]

// why?: The order is based on input order, not completion order.

// 32. finally

Promise.resolve("Success")
    .then(value => {
        console.log(value);
        return "Next";
    })
    .finally(() => {
        console.log("Finally");
    })
    .then(value => {
        console.log(value);
    });

// Logs: Success, Finally, Next

// why? finally runs after the previous then, but before the next then. It does not affect the value passed to the next then.
// finally() doesn't normally change the fulfilled value

// 33. Promise returning Promise

Promise.resolve(1)
    .then(value => {
        return Promise.resolve(value + 1);
    })
    .then(value => {
        console.log(value);
    });

// Logs: 2
// The promise chain waits for the returned Promise

// 34. Promise chaining

Promise.resolve(1)
    .then(value => {
        console.log(value);
        return value + 1;
    })
    .then(value => {
        console.log(value);
    });

// Logs: 1, 2

// 35. Promise executor

console.log("A");

new Promise((resolve) => {
    console.log("B");
    resolve();
}).then(() => {
    console.log("C");
});

console.log("D");

// Logs: A, B, D, C
// why? The Promise executor runs synchronously, but .then() runs as a microtask.

// 36. Promise error handling

Promise.resolve()
    .then(() => {
        throw new Error("Error in then");
    })
    .catch(error => {
        console.log(error.message);
    });

// Logs: Error in then
// why? The catch() method handles errors thrown in the previous then() in the promise chain.

// 37. Nested scope

let x = 1;

function outer() {
    let x = 2;

    function inner() {
        let x = 3;

        console.log(x);
    }

    inner();
}

outer();

// Logs: 3
// why? JavaScript searches from the innermost lexical environment outward

// 38. let version

let b = 10;

function test() {
    console.log(b);

    let b = 20;
}

test();

// Logs: ReferenceError: Cannot access 'b' before initialization
// why? Because the local b exists in the TDZ and shadows the outer b

// 39. A very common interview trap

var c = 10;

function test() {
    console.log(c);

    var c = 20;
}

test();

// Logs: undefined
// why? Because the local c is hoisted and initialized with undefined, shadowing the outer c