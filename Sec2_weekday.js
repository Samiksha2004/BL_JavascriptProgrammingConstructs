const readline = require("readline");

// Creating an interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking the user for input
rl.question("Enter a number (1-7) to get the corresponding weekday: ", function (num) {
    switch (num) {
        case "1": console.log("Sunday"); break;
        case "2": console.log("Monday"); break;
        case "3": console.log("Tuesday"); break;
        case "4": console.log("Wednesday"); break;
        case "5": console.log("Thursday"); break;
        case "6": console.log("Friday"); break;
        case "7": console.log("Saturday"); break;
        default: console.log("Invalid input! Please enter a number between 1 and 7.");
    }
    rl.close();
});
