const prompt = require("prompt-sync")(); 


function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    
    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }
    
    return originalNum === reversedNum;
}

// Get user input for two numbers
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

// Check if the numbers are palindromes
if (isPalindrome(num1)) {
    console.log(`${num1} is a Palindrome.`);
} else {
    console.log(`${num1} is NOT a Palindrome.`);
}

if (isPalindrome(num2)) {
    console.log(`${num2} is a Palindrome.`);
} else {
    console.log(`${num2} is NOT a Palindrome.`);
}
