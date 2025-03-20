const prompt = require("prompt-sync")(); // Import prompt-sync for user input

// Take input from the user
let num = parseInt(prompt("Enter a number: "));

console.log(`Prime factors of ${num} are:`);

// First, divide the number by 2 until it is odd
while (num % 2 === 0) {
    console.log(2);
    num = num / 2;
}

// Check for odd prime factors from 3 onwards
for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
        console.log(i);
        num = num / i;
    }
}

// If num is still greater than 2, it's a prime factor
if (num > 2) {
    console.log(num);
}
