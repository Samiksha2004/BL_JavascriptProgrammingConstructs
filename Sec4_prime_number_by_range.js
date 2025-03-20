const prompt = require("prompt-sync")();

let start = parseInt(prompt("Enter the start of the range: "));
let end = parseInt(prompt("Enter the end of the range: "));

console.log(`Prime numbers between ${start} and ${end} are:`);

for (let num = start; num <= end; num++) {
    if (num < 2) continue; // Skip numbers less than 2

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
