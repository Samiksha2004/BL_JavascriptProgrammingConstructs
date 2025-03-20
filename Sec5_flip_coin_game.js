const prompt = require("prompt-sync")(); 

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails"; 
    console.log(`Flip: ${flip}`);

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Score -> Heads: ${headsCount} | Tails: ${tailsCount}`);
}

if (headsCount === 11) {
    console.log("🎉 Heads wins the game with 11 points!");
} else {
    console.log("🎉 Tails wins the game with 11 points!");
}
