// Global Variables
const playerChoices = document.querySelectorAll(".btn")

let computerScore = 0
let playerScore = 0


// Side Menu Script

function openLeft() {
    document.getElementById(sideMenu);
    document.getElementById(gameDiv);
    sideMenu.style.width = "350px";
    gameDiv.style.marginLeft = "350px";
}

function closeLeft() {
    document.getElementById(sideMenu);
    document.getElementById(gameDiv);
    sideMenu.style.width="0px"
    gameDiv.style.marginLeft = "0px";
}

// Main UI Script
const endTitle = document.getElementById("endTitle")
const endMsg = document.getElementById("endMsg")
const btnRestart = document.getElementById("btnRestart")
const endOverlay = document.getElementById("endOverlay")
const endBox = document.getElementById("endBox")
const playerScoreText = document.getElementById("playerScoreText")
const computerScoreText = document.getElementById("computerScoreText")
const roundMsg = document.getElementById("roundMsg")

function endGame() {
    
    endOverlay.classList.add("activate-overlay");
    endBox.classList.add("activate-endbox");

    if (computerScore == 5) {
        endTitle.textContent = "Ow Shoot...";
        endMsg.textContent = "Looks like you've lost the Game"
    }

    else if (playerScore == 5) {
        endTitle.textContent = "Bazinga!";
        endMsg.textContent = "You've won the Game!"
    }
}

// Game script

playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener("click", function() {
        playRound(playerChoice.dataset.choice)
    })
})

function computerChoice() {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    return options[Math.floor(Math.random() * options.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function playRound(playerSelection) {

    computerSelection = computerChoice(); 
    

    if (playerSelection == computerSelection) {

        roundMsg.textContent = ("This round was a Tie - Go Again!")

        console.log('This Round was a tie!');

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "lizard") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "spock") ||
    (playerSelection == "scissors" && computerSelection == "lizard") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "lizard" && computerSelection == "paper") ||
    (playerSelection == "lizard" && computerSelection == "spock") ||
    (playerSelection == "spock" && computerSelection == "scissors") ||
    (playerSelection == "spock" && computerSelection == "rock")) {

        playerScore++;
        
        roundMsg.textContent = (capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!" + " You have WON this round!");
        playerScoreText.textContent = ("Player Score: " + playerScore);

        console.log(playerSelection + " beats " + computerSelection + "\nYou have WON this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);

        if (playerScore == 5) {
            console.log("Congrats! You've WON the GAME!");
            endGame();
         }

    }

    else {
        computerScore++;

        roundMsg.textContent = (capitalizeFirstLetter(playerSelection) + " loses to " + capitalizeFirstLetter(computerSelection) + "!" + " You have LOST this round");
        computerScoreText.textContent = ("Computer Score: " + computerScore);

        console.log(playerSelection + " loses to " + computerSelection + "\nYou have LOST this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);

        if (computerScore == 5) {
            console.log("Ow Shoot, You've LOST the GAME!");
            endGame();                               
        }
    }
}

function restartGame() {
    window.location.reload();
}
