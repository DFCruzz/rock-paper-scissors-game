// Global Variables
const playerChoices = document.querySelectorAll(".btn")
const endTitle = document.getElementById("endTitle")
const endMsg = document.getElementById("endMsg")
const btnRestart = document.getElementById("btnRestart")
const endOverlay = document.getElementById("endOverlay")
const endBox = document.getElementById("endBox")
const playerScoreText = document.getElementById("playerScoreText")
const computerScoreText = document.getElementById("computerScoreText")
const roundMsg = document.getElementById("roundMsg")
const playerChoiceImg = document.getElementById("playerChoiceImg")
const computerChoiceImg = document.getElementById("computerChoiceImg")
const playerBox = document.getElementById("playerBox")
const computerBox = document.getElementById("computerBox")

let computerScore = 0
let playerScore = 0


// Side Menus Script
const leftSideMenu = document.getElementById("leftSideMenu")
const rightSideMenu = document.getElementById("rightSideMenu")
const gameDiv = document.getElementById("gameDiv")
const footer = document.getElementById("footer")


function openLeft() {
    leftSideMenu.style.width = "350px";
    rightSideMenu.style.width = "0px";
    gameDiv.style.marginLeft = "350px";
    footer.style.marginLeft = "350px";
    return closeRight();   
}

function closeLeft() {
    leftSideMenu.style.width="0px"
    gameDiv.style.marginLeft = "0px";
    footer.style.marginLeft = "0px"
}

function openRight() {
    rightSideMenu.style.width = "350px"
    gameDiv.style.marginRight = "350px";
    footer.style.marginRight = "350px";
    return closeLeft();
}

function closeRight() {
    rightSideMenu.style.width = "0px"
    gameDiv.style.marginRight = "0px";
    footer.style.marginRight = "0px";
}

// Main UI Script
function displayChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock": playerChoiceImg.src = "./img/RockNoBG.png"
        break
        case "paper": playerChoiceImg.src = "./img/PaperNoBG.png"
        break
        case "scissors": playerChoiceImg.src = "./img/ScissorsNoBG.png"
        break
        case "lizard": playerChoiceImg.src = "./img/LizardNoBG.png"
        break
        case "spock": playerChoiceImg.src = "./img/SpockNoBG.png"
        break
    }

    switch (computerSelection) {
        case "rock": computerChoiceImg.src = "./img/RockNoBG.png"
        break
        case "paper": computerChoiceImg.src = "./img/PaperNoBG.png"
        break
        case "scissors": computerChoiceImg.src = "./img/ScissorsNoBG.png"
        break
        case "lizard": computerChoiceImg.src = "./img/LizardNoBG.png"
        break
        case "spock": computerChoiceImg.src = "./img/SpockNoBG.png"
        break
    }
}

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

        roundMsg.textContent = ("This round was a Tie - Go Again!");

        displayChoices(playerSelection, computerSelection);

        playerBox.classList.remove("winner", "loser");
        computerBox.classList.remove("winner", "loser");
       
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

        displayChoices(playerSelection, computerSelection);

        playerBox.classList.remove("winner", "loser");
        computerBox.classList.remove("winner", "loser");
        playerBox.classList.add("winner");
        computerBox.classList.add("loser");
        
        console.log(playerSelection + " beats " + computerSelection + "\nYou have WON this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);

        if (playerScore == 5) {
            console.log("Congrats! You've WON the GAME!");
            return endGame();
         }

    }

    else {
        computerScore++;

        roundMsg.textContent = (capitalizeFirstLetter(playerSelection) + " loses to " + capitalizeFirstLetter(computerSelection) + "!" + " You have LOST this round");
        computerScoreText.textContent = ("Computer Score: " + computerScore);

        displayChoices(playerSelection, computerSelection);

        playerBox.classList.remove("winner", "loser");
        computerBox.classList.remove("winner", "loser");
        computerBox.classList.add("winner");
        playerBox.classList.add("loser");

        console.log(playerSelection + " loses to " + computerSelection + "\nYou have LOST this round!");

        console.log("Computer Score: " + computerScore);
        console.log("Player Score: " + playerScore);

        if (computerScore == 5) {
            console.log("Ow Shoot, You've LOST the GAME!");
            return endGame();                               
        }
    }
}

function restartGame() {
    window.location.reload();
}
