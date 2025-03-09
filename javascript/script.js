document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("rollDice");
    const players = document.querySelectorAll(".player");
    const winnerText = document.getElementById("winner");
    
    // Function to roll the dice and update scores
    rollButton.addEventListener("click", () => {
        let highestScore = 0;
        let winner = [];
        
        players.forEach((player, index) => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            const diceImage = player.querySelector(".dice");
            const scoreElement = player.querySelector(".score");

            // Update dice image
            diceImage.src = `images/dice${diceRoll}.png`;
            

            // Update score
            scoreElement.textContent = diceRoll;

            // Determine the highest scorer
            if (diceRoll > highestScore) {
                highestScore = diceRoll;
                winner = [index + 1];
            } else if (diceRoll === highestScore) {
                winner.push(index + 1);
            }
        });

        // Display winner message
        if (winner.length === 1) {
            winnerText.textContent = `🏆 Player ${winner[0]} Wins! 🎉`;
        } else {
            winnerText.textContent = `🤝 It's a tie between Players ${winner.join(", ")}!`;
        }
    });
});
