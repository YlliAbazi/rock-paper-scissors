/* 

Rock Paper Scissors GAME

What goes into the game: 
1. Get input from the player to choose his weapon (provide the options) -> function getUserChoice;
2. Generate a random number to help make the choice of the computer weapon -> function getComputerChoice;
3. Inform the user of result after each round.
4. Do the above for five round.
5. Keep track of score and declare the winner.

## COMBINATIONS ##

Rock > Scissors
Paper > Rock
Scissors > Paper

rock == rock
paper == paper
scissors == scissors

Paper < Scissors
Scissors < Rock
Rock < Paper

*/

function getUserChoice() {
  let userSelection = prompt("What weapon (rock, paper, scissors) do you chose for this round?: ");
  return userSelection;
}

function getComputerChoice (){
  let randomNumber = Math.floor(Math.random() * (4 - 1 ) + 1)
  let computerSelection;
  if (randomNumber == 1 ) {
    computerSelection = "rock"
  } else if (randomNumber == 2) {
    computerSelection = "paper"
  } else {
    computerSelection = "scissors"
  }
  return computerSelection;
}

function playRound (userSelection, computerSelection, round) {
  const r = 'rock';
  const p = 'paper';
  const s = 'scissors';

  if ((userSelection === r && computerSelection === s) || 
        (userSelection === p && computerSelection === r) || 
          (userSelection === s && computerSelection === p)) {

    return `Round ${round}: User won. ${userSelection} beats ${computerSelection}`;

  } else if ((userSelection === p && computerSelection === s) || 
                (userSelection === s && computerSelection === r) || 
                  (userSelection === r && computerSelection === p)) {
    
     return `Round ${round}: Computer won. ${computerSelection} beats ${userSelection}`;

    } else {
    
      return `Round ${round}: It's a tie. ${userSelection} = ${computerSelection}`;

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
      userScore++
    } else if (result.includes('Computer won.')){
      computerScore++
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

console.log('To play Rock-Paper-Scissors type "game()" in the console line and hit Enter.')