// Get command-line argument
const n = parseInt(process.argv[2]);


if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let harmonicNumber = 0;
    
    console.log(`Harmonic Series for n = ${n}:`);
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
        console.log(`1/${i} = ${1/i}`);
    }
    
    console.log(`\nHarmonic Number H(${n}) = ${harmonicNumber.toFixed(6)}`);
}
