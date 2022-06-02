let playerScore = 0
let computerScore = 0
let playerChoice = prompt("What's you choice: Rock, Paper or Scissors?")

// Function to make the computer returns a random value
function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

// Round function that compares the player choice (prompt on page load) to computer random choice
function playRound(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    playerSelection = playerChoice;

    if (playerSelection == computerSelection) {
        console.log('This Round was a tie!');
    }

    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'scissors' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore++;

        console.log(playerSelection + " beats " + computerSelection + "\nYou have WON this round!");

        if (playerScore == 5) {
            console.log("Congratulations you've WON the GAME!!!")
        }
    }

    else {

        computerScore++;

        console.log(playerSelection + " loses to " + computerSelection + "\nYou have LOST this round!")
        
        if (computerScore == 5) {
            console.log("Ow Shoot, you've LOST the GAME!")
        }
    
    }
}

// Prints round result and current score
console.log(playRound());
console.log("Computer Score: " + computerScore);
console.log("Player Score: " + playerScore);
