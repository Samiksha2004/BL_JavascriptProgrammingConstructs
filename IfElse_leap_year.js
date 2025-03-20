const year = process.argv[2]; // Taking input from command line

if (!year || isNaN(year) || year.length !== 4) {
    console.log("Please enter a valid 4-digit year.");
} else {
    const numYear = parseInt(year);

    if ((numYear % 4 === 0 && numYear % 100 !== 0) || (numYear % 400 === 0)) {
        console.log(`${numYear} is a Leap Year.`);
    } else {
        console.log(`${numYear} is NOT a Leap Year.`);
    }
}
