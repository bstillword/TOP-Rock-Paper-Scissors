// JavaScript source code
function playGame(e) {
    player = document.getElementById('playerScore');
    comp = document.getElementById('compScore');
    banner = document.getElementById('winBanner');
    playerWin = parseInt(player.innerText);
    computerWin = parseInt(comp.innerText);


    winner = playRound(e);
    if (winner == "player") {
        playerWin += 1;
        player.innerText = playerWin;

    } else if (winner == "comp") {
        computerWin++;
        comp.innerText = computerWin;
    }
    
    if (playerWin == 5) {
        banner.innerText = ("Congratulations, human versus machine, human won!")

    } else if (computerWin == 5) {
        banner.innerText = ("Unfortunately, human versus machine, machine wins the day!")
    }

    if (playerWin == 5 || computerWin == 5) {
        player.innerText = 0;
        comp.innerText = 0;
    }

}
function playRound(playerChoice) {
    goodChoice = false;
    compChoice = computerPlay();
    if (playerChoice == "rock" && compChoice == "scissors" || playerChoice == "paper" && compChoice == "rock" || playerChoice == "scissors" && compChoice == "paper") {
        banner.innerText = "Player won this round with: " + playerChoice + " and Computer lost this round with: " + compChoice + "!";
        return "player";
    } else if (playerChoice == "rock" && compChoice == "paper" || playerChoice == "paper" && compChoice == "scissors" || playerChoice == "scissors" && compChoice == "rock") {
        banner.innerText = "Computer won this round with: " + compChoice + " and Player lost this round with: " + playerChoice + "!"
        return "comp";
    } else {
        banner.innerText = ("This was a tie round!");
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
