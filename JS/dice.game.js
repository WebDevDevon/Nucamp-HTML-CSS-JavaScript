function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        let total = goldCoins + roll;
        alert("you roll a " + roll + ".");
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        if (roll === 4) {
            alert("1 coin will be reduced from your total\n\n Your total coins are " + total + ".")
            total = total - 1;
        }
        if (roll < 5) {
            continue;
        }
        alert("Congratulations, you win " + roll + " gold coins!\n\n Your total coins are " + total + ".");
        goldCoins += roll;

    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}