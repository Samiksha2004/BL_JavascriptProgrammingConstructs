const prompt = require("prompt-sync")(); // Ensure you have installed prompt-sync


function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Please enter a temperature between 0°C and 100°C.");
        return;
    }
    let degF = (degC * 9/5) + 32;
    console.log(`${degC}°C is equal to ${degF}°F`);
}

function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Please enter a temperature between 32°F and 212°F.");
        return;
    }
    let degC = (degF - 32) * 5/9;
    console.log(`${degF}°F is equal to ${degC.toFixed(2)}°C`);
}

// User Selection
console.log("Temperature Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");
let choice = parseInt(prompt("Enter your choice (1 or 2): "));

switch (choice) {
    case 1:
        let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
        celsiusToFahrenheit(celsius);
        break;
    case 2:
        let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
        fahrenheitToCelsius(fahrenheit);
        break;
    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}
