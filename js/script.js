let playerScore = 0
let computerScore = 0



// Function to make the computer returns a random value
function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}


// Round function that compares the player choice (prompt on page load) to computer random choice
function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerChoice();
    playerSelection = prompt("What's you choice: Rock, Paper or Scissors?").toLowerCase();

    if (playerSelection == computerSelection) {
        console.log('This Round was a tie!');

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
    }

    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'scissors' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore++;

        console.log(playerSelection + " beats " + computerSelection + "\nYou have WON this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);
    }

    else {

        computerScore++;

        console.log(playerSelection + " loses to " + computerSelection + "\nYou have LOST this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);

    }
}

function endGame() {   

    while (computerScore < 5 || playerScore < 5) {
        playRound();
            if (playerScore == 5) {
                console.log("Congrats! You've WON the GAME!")

                break
            }
            else if (computerScore == 5) {
                console.log("Ow Shoot, You've LOST the GAME!")

                break
            }
        }
    }
playGame();