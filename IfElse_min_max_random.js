// Generate 5 random 3-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // Random number between 100-999
}

// Find the minimum and maximum values
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

// Output results
console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
