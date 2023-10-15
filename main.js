console.log('To play Rock-Paper-Scissors type "game()" in the console line and hit Enter.');

function getUserChoice() {
    let userSelection = prompt('What weapon (rock, paper, scissors) do you chose for this round?: ');
    return userSelection;
}

function getComputerChoice (){
    const choices = ['rock', 'paper', 'scissors'];
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

function playRound (userSelection, computerSelection, currentRound) {
    // following shorthand constants to make the code more readable in if-statement
    const r = 'rock';
    const p = 'paper';
    const s = 'scissors';

    if (userSelection === computerSelection) {
        return `Round ${currentRound}: It's a tie. ${userSelection} = ${computerSelection}`;

    } else if ((userSelection === r && computerSelection === s) || 
                    (userSelection === p && computerSelection === r) || 
                        (userSelection === s && computerSelection === p)) {
        return `Round ${currentRound}: User won. ${userSelection} beats ${computerSelection}`;
    } else {
        return `Round ${currentRound}: Computer won. ${computerSelection} beats ${userSelection}`;
    } 
}

function game() {
    let userScore = 0;
    let computerScore = 0;

  
    for (let i = 1; i <= 5; i++) {

        const a = getUserChoice();
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
