let playerChoice = prompt("Rock, Paper or Scissors?")
let playerScore = 0
let computerScore = 0

function computerChoice() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerChoice();
    playerSelection = playerChoice;


    if (playerSelection == computerSelection) {
        console.log('This Round was a tie!');
    }

    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'scissors' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log(playerSelection + ' beats ' + computerSelection + '\nYou have WON this round!');
    }

    else {
        console.log(playerSelection + ' loses to ' + computerSelection + '\nYou have LOST this round!')
    }
}

console.log(playRound())