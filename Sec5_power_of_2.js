const prompt = require("prompt-sync")(); 


let n = parseInt(prompt("Enter the value of n: "));

let power = 0; 
let result = 1; 

console.log(`Powers of 2 up to 2^${n} or 256:`);

while (power <= n && result <= 256) {
    console.log(`2^${power} = ${result}`);
    power++;
    result = Math.pow(2, power);
}
