// Conditions in JavaScript are code expressions that evaluate whether something is true or false
// to control the program's decision-making process. Known as conditional statements, they allow
// your code to take different actions based on different inputs, user actions, or states
// 1. The if Statement
    let speed = 75;

    if (speed > 60) {
    console.log("You are speeding!");
    }
// 2. The if...else Statement
    let age = 16;

    if (age >= 18) {
    console.log("You can vote.");
    } else {
    console.log("You are too young to vote.");
    }
// 3. The if...else if...else Statement
    let rating = 4;

    if (rating === 5) {
    console.log("Excellent");
    } else if (rating === 4) {
    console.log("Good");
    } else {
    console.log("Needs improvement");
    }
// 4. The switch Statement
    let day = "Monday";

    switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break; // Stops execution from bleeding into the next case
    case "Friday":
        console.log("Weekend is almost here!");
        break;
    default:
        console.log("Just another regular day.");
    }
// 5. The ternary Operator
    let isMember = true;
    let price = isMember ? "$10.00" : "$20.00"; 
    console.log(price);
