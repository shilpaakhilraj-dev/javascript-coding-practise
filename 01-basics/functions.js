// Functions are reusable blocks of code designed to perform specific tasks
// 1. Basic Structure of a Function - consists of 
// function keyword, a function name, a set of parentheses () for inputs, and curly braces {} containing the code
// 2. Common Ways to Write Functions
// Function Declaration (The standard way) - These are named functions that are hoisted
function add(a, b) {
  return a + b;
}
// Function Expression - define a function and assign it to a variable & are not hoisted
const multiply = function(a, b) {
  return a * b;
};
// Arrow Functions (Modern ES6+ Syntax) - arrow functions provide a shorter syntax.
// They omit the function keyword and use a => arrow instead
// 3. Key Components
// Parameters: Variables listed as part of the function definition
// Arguments: Values passed to the function when it is invoked / called
// Return Statement: The output of the function, which can be used elsewhere in the code
const subtract = (a, b) => a - b;
// 4. Why Use Functions? - Code Reusability, Maintainability, Organization