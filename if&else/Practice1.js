// Generate 5 random 3-digit numbers
let min = 999;
let max = 100;

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // generates number between 100-999
    console.log(`Random number ${i + 1}:`, num);
    
    if (num < min) {
        min = num;
    }
    if (num > max) {
        max = num;
    }
}

console.log("Minimum value is:", min);
console.log("Maximum value is:", max);
