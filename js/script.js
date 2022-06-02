let playerScore = 0
let computerScore = 0

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)]
}

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = 'paper';

    if (playerSelection == computerSelection) {
        console.log('This Round was a tie!');
    }

    else if ((playerSelection == 'rock' && computerSelection == 'scissors')||
    (playerSelection == 'scissors' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log(playerSelection + ' beats ' + computerSelection + ' you have WON this round!');
    }

    else {
        console.log(playerSelection + ' loses to ' + computerSelection + ' you have LOST this round!')
    }
}

console.log(playRound())