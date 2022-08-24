let playerScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playRound(this.id, getComputerChoice());
  });
});

updatePlayerScore();

function playRound(playerSelection, computerSelection) {
  let msg;
  playerSelection = capitalizeFirstLetter(playerSelection);
  if (playerSelection === computerSelection) {
    msg = `It's a tie! ${playerSelection} is the same as ${computerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    ++playerScore;
    msg = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    ++computerScore;
    msg = `You Loose! ${playerSelection} looses against ${computerSelection}`;
  }

  const p = document.createElement("p");
  p.textContent = msg;
  results.appendChild(p);

  updatePlayerScore();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function endGame() {
  printGameWinner();
  disableAllButtons();
}

function printGameWinner() {
  let msg = "Game Over. ";
  if (playerScore === computerScore) {
    msg += `It's a Tie. You and the computer both won ${playerScore} times.`;
  } else {
    msg += `You ${
      playerScore > computerScore ? "Won" : "Lost"
    }. You won ${playerScore} times, the computer won ${computerScore} times.`;
  }
  const p = document.createElement("p");
  p.textContent = msg;
  p.style.fontWeight = "bold";
  results.appendChild(p);
}

function disableAllButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.setAttribute("disabled", "true"));
}

function updatePlayerScore() {
  const playerScoreElement = document.querySelector("#playerScore");
  const computerScoreElement = document.querySelector("#computerScore");

  playerScoreElement.textContent = `Player Score: ${playerScore}`;
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

// TODO optimize random computer choice
