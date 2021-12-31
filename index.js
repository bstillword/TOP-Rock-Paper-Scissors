// JavaScript source code
game();
function game() {
    playerWin = 0;
    computerWin = 0;

    while (playerWin < 5 && computerWin < 5) {
        winner = playRound();
        if (winner == "player") {
            playerWin++;
        } else if (winner == "comp") {
            computerWin++;
        }
    }
    if (playerWin == 5) {
        console.log("Congratulations, human versus machine, human won!")
    } else {
        console.log("Unfortunately, human versus machine, machine wins the day!")
    }
}
function playRound() {
    goodChoice = false;
    playerChoice = "";
    compChoice = computerPlay();
    while (!goodChoice) {
        choice = prompt("Please input rock, paper or scissors: ");
        choice = choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            playerChoice = choice;
            goodChoice = true;
        } else {
            alert("You need to pick rock, paper or scissors");
        }
    }
    if (playerChoice == "rock" && compChoice == "scissors" || playerChoice == "paper" && compChoice == "rock" || playerChoice == "scissors" && compChoice == "paper") {
        console.log("Player won with this round with: " + playerChoice + " and Computer lost this round with: " + compChoice + "!")
        return "player";
    } else if (playerChoice == "rock" && compChoice == "paper" || playerChoice == "paper" && compChoice == "scissors" || playerChoice == "scissors" && compChoice == "rock") {
        console.log("Computer won with this round with: " + compChoice + " and Player lost this round with: " + playerChoice + "!")
        return "comp";
    } else {
        console.log("This was a tie round!")
        return "tie";
    }
}

function computerPlay() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "rock";
    } else if (compChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}