function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
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
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Loose! ${playerSelection} looses against ${computerSelection}`;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
