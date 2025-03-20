const prompt = require("prompt-sync")(); 

console.log("Think of a number between 1 and 100.");
console.log("I will guess it in a few steps.");

let low = 1;
let high = 100;
let mid;

while (low <= high) {
    mid = Math.floor((low + high) / 2); 
    let response = prompt(`Is your number ${mid}? (yes/lower/higher): `).toLowerCase();

    if (response === "yes") {
        console.log(`Yay! I found your magic number: ${mid}`);
        break;
    } else if (response === "lower") {
        high = mid - 1; 
    } else if (response === "higher") {
        low = mid + 1; 
    } else {
        console.log("Please enter a valid response (yes/lower/higher).");
    }
}
