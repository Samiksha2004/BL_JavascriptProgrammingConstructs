const readline = require("readline");

// Creating an interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking for three numbers
rl.question("Enter three numbers (a, b, c) separated by space: ", function(input) {
    let [a, b, c] = input.split(" ").map(Number);

    // Performing arithmetic operations
    let op1 = a + b * c;
    let op2 = a % b + c;
    let op3 = c + a / b;
    let op4 = a * b + c;

    // Storing the results in an array
    let results = [op1, op2, op3, op4];

    // Finding the maximum and minimum values
    let max = Math.max(...results);
    let min = Math.min(...results);

    // Displaying results
    console.log(`Results:`);
    console.log(`1. a + b * c = ${op1}`);
    console.log(`2. a % b + c = ${op2}`);
    console.log(`3. c + a / b = ${op3}`);
    console.log(`4. a * b + c = ${op4}`);
    console.log(`Maximum Value: ${max}`);
    console.log(`Minimum Value: ${min}`);

    rl.close();
});
