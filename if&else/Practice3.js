// Take year from command line argument
let year = parseInt(process.argv[2]);  // e.g. node leapYear.js 2024

if (year >= 1000 && year <= 9999) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is not a Leap Year`);
    }
} else {
    console.log("Enter a valid 4-digit year");
}
