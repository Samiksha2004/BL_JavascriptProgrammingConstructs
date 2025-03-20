const initialMoney = 100;
const goal = 200;
let money = initialMoney;
let totalBets = 0;
let totalWins = 0;

while (money > 0 && money < goal) {
    totalBets++;

    let betResult = Math.random() < 0.5; // 50% chance to win or lose
    if (betResult) {
        money++; // Win ₹1
        totalWins++;
    } else {
        money--; // Lose ₹1
    }
}

console.log(`Total bets made: ${totalBets}`);
console.log(`Total wins: ${totalWins}`);
if (money === 0) {
    console.log("The gambler went broke! 💸");
} else {
    console.log("The gambler reached the goal of ₹200! 🎉");
}
