const prompt = require("prompt-sync")(); 


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function getPalindrome(num) {
    let reversedNum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        reversedNum = (reversedNum * 10) + digit;
        temp = Math.floor(temp / 10);
    }
    
    return reversedNum;
}


let num = parseInt(prompt("Enter a number: "));


if (isPrime(num)) {
    console.log(`${num} is a Prime number.`);
    
    let palindrome = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindrome}.`);
    
   
    if (isPrime(palindrome)) {
        console.log(`The Palindrome ${palindrome} is also Prime.`);
    } else {
        console.log(`The Palindrome ${palindrome} is NOT Prime.`);
    }
} else {
    console.log(`${num} is NOT a Prime number.`);
}
