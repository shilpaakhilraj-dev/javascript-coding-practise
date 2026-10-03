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