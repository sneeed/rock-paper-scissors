let playerScore = 0;
let computerScore = 0;
game();
console.log("%c" + printGameWinner(), "font-weight:bold;");

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
    // const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(playerSelection);
  if (playerSelection === computerSelection) {
    return `It's a tie! ${playerSelection} is the same as ${computerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    ++playerScore;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    ++computerScore;
    return `You Loose! ${playerSelection} looses against ${computerSelection}`;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function printGameWinner() {
  let string = "Game Over. ";
  if (playerScore === computerScore) {
    string += `It's a Tie. You and the computer both won ${playerScore} times.`;
  } else {
    string += `You ${
      playerScore > computerScore ? "Won" : "Lost"
    }. You won ${playerScore} times, the computer won ${computerScore} times.`;
  }
  return string;
}
