// Loops in JavaScript are control structures used to repeat a block of code multiple times
// as long as a specified condition remains true.
// They eliminate the need to write the same line of code repeatedly, making your programs more efficient
// Types of loops
// 1. Standard Loops
// a. for Loop
    for (let i = 1; i <= 5; i++) {
        console.log("FOR LOOP", i);
    }
// b. while Loop
    let i = 1;
    while (i <= 5) {
        console.log("WHILE LOOP", i);
        i++;
    }
// c. do...while Loop
    let j = 1;
    do {
        console.log("DO...WHILE LOOP", j);
        j++;
    } while (j <= 5);


// 2. Specialized Collection Loops
// a. for...in Loop - Iterates over the properties/keys of an object
    const user = { name: 'Alice', age: 25 };
    for (const key in user) {
        console.log("FOR...IN LOOP", key, user[key]); // Prints key and its value
    }
// b. for...of Loop - Iterates over the values of an object such as an array, string, or set
    const colors = ['red', 'green', 'blue'];
    for (const color of colors) {
        console.log("FOR...OF LOOP", color); // Prints each color
    }