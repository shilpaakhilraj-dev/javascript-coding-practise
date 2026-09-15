// A datatype is a classification that tells a computer what kind of value a piece of data has,
// what meaning is attached to it, 
// and what operations can be performed on it.
// There are 8 basic datatypes and are split into two categories
// CATEGORY 1: Primitive Datatypes - simple, immutable values stored directly in the memory stack
// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Null
// 6. Undefined
// 7. Symbol
// CATEGORY 2: Non-Primitive Datatypes - complex structures stored in the memory heap
// 1. Object
// 2. Array
// 3. Function

// Primitive
let name = "John";       // string
let age = 30;            // number
let isActive = true;     // boolean
let value;               // undefined
let empty = null;        // null
let id = 123456789n;     // bigint
let symbol = Symbol();   // symbol

// Non-primitive
const user = {
  name: "John"
}; // object

const numbers = [1, 2, 3]; // array

console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof value);
console.log(typeof empty);
console.log(typeof id);
console.log(typeof symbol);
console.log(typeof user);
console.log(typeof numbers);


// Important interview questions:
console.log(typeof null); // object (this is a known bug in JavaScript)
console.log(typeof NaN);  // number (NaN stands for Not-a-Number, but its type is number)
console.log(typeof function(){}); // function (functions are a special type of object in JavaScript)
console.log(typeof []); // object (arrays are a type of object in JavaScript)
console.log(typeof {}); // object (plain objects are of type object in JavaScript)
console.log(typeof undefined); // undefined (undefined is a primitive type in JavaScript)