const prompt = require("prompt-sync")(); 

console.log("Choose conversion type:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

const choice = parseInt(prompt("Enter your choice (1-4): "));
const value = parseFloat(prompt("Enter the value to convert: "));

let result;

switch (choice) {
    case 1:
        result = value * 12; // 1 Feet = 12 Inches
        console.log(`${value} Feet = ${result} Inches`);
        break;
    case 2:
        result = value * 0.3048; // 1 Feet = 0.3048 Meter
        console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
        break;
    case 3:
        result = value / 12; // 1 Inch = 1/12 Feet
        console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
        break;
    case 4:
        result = value / 0.3048; // 1 Meter = 3.28084 Feet
        console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
