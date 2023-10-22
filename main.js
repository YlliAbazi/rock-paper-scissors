let userScore = 0;
let computerScore = 0;
let round = 0;

const userScoreDisplay = document.querySelector(".userScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const roundDisplay = document.querySelector(".round");
const roundWinner = document.querySelector(".roundWinner");


function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

function playRound (userSelection, computerSelection, currentRound) {
    // following shorthand constants to make the code more readable in if-statement
    const r = 'rock';
    const p = 'paper';
    const s = 'scissors';

    roundDisplay.textContent = `Rounds Played: ${round}`;

    if (userSelection === computerSelection) {
        round++;
        roundDisplay.textContent = `Rounds Played: ${round}`;
        return `Round ${currentRound + 1}: It's a tie. ---> ${userSelection} = ${computerSelection}`;

    } else if ((userSelection === r && computerSelection === s) || 
                    (userSelection === p && computerSelection === r) || 
                        (userSelection === s && computerSelection === p)) {
        round++;
        roundDisplay.textContent = `Rounds Played: ${round}`;
        userScore++;
        userScoreDisplay.textContent = `User Score: ${userScore}`;
        if (userScore === 5 || computerScore === 5) {
            endGame();
        }
        return `Round ${currentRound + 1}: User won. ---> ${userSelection} beats ${computerSelection}`;
    } else {
        round++;
        roundDisplay.textContent = `Rounds Played: ${round}`;
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        if (userScore === 5 || computerScore === 5) {
            endGame();
        }
        return `Round ${currentRound + 1}: Computer won. ---> ${computerSelection} beats ${userSelection}`;
    } 
}

const rockSelector = document.querySelector(".rockSelector");
const paperSelector = document.querySelector(".paperSelector");
const scissorsSelector = document.querySelector(".scissorsSelector");

let userChoice;

rockSelector.addEventListener('click', e => {
    userChoice = e.target.textContent.toLowerCase();
    roundWinner.textContent = playRound(userChoice, getComputerChoice(), round);
});

paperSelector.addEventListener('click', e => {
    userChoice = e.target.textContent.toLowerCase();
    roundWinner.textContent = playRound(userChoice, getComputerChoice(), round);
});

scissorsSelector.addEventListener('click', e => {
    userChoice = e.target.textContent.toLowerCase();
    roundWinner.textContent = playRound(userChoice, getComputerChoice(), round);
});

function endGame() {
    const letteredNumbers = ["one", "two", "three", "four", "five"];
    rockSelector.disabled = true;
    paperSelector.disabled = true;
    scissorsSelector.disabled = true;

    const declareGameWinner = document.querySelector(".declareGameWinner");
    const gameWinnerHeader = document.createElement("h1");
    const newGameBtn = document.createElement("button");
    newGameBtn.className = "newGameBtn";

    newGameBtn.textContent = "Start new game";

    if (userScore > computerScore) {
        gameWinnerHeader.textContent = `User won the game with ${letteredNumbers[userScore-1]} (${userScore}) points to ${letteredNumbers[computerScore-1]} (${computerScore}).`;
    } else {
        gameWinnerHeader.textContent = `Computer won the game with ${letteredNumbers[computerScore-1]} (${computerScore}) points to ${letteredNumbers[userScore-1]} (${userScore}).`;
    }

    declareGameWinner.appendChild(gameWinnerHeader);
    declareGameWinner.appendChild(newGameBtn);

    newGameBtn.addEventListener("click", () => location.reload());
}