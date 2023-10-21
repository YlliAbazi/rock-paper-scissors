let userScore = 0;
let computerScore = 0;
let tie = 0;
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
        return `Round ${currentRound + 1}: User won. ---> ${userSelection} beats ${computerSelection}`;
    } else {
        round++;
        roundDisplay.textContent = `Rounds Played: ${round}`;
        computerScore++;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
        return `Round ${currentRound + 1}: Computer won. ---> ${computerSelection} beats ${userSelection}`;
    } 
}

function game() {
  
    for (let i = 1; i <= 5; i++) {

        
        const b = getComputerChoice();

        let result = playRound(a, b, i);
        console.log(result);

        if (result.includes('User won.')) {
        userScore++;
        } else if (result.includes('Computer won.')){
        computerScore++;
        }
    }

    if (userScore > computerScore) {
        console.log('User wins!');
    } else if (userScore < computerScore) {
        console.log('Computer wins!');
    } else {
        console.log("It's a tie! Type 'game()' in console to play again.");
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



//     declareWinner.textContent = result;

//     if (result.includes("User won.")) {
//         userScore++;
//         round++;
//     } else if (result.includes("Computer won.")) {
//         computerScore++;
//         round++;
//     } else {
//         round++
//     }

//     containerDiv.appendChild(declareWinner);