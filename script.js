window.onload = (event) => {
  let userName = prompt("Enter your name");

  if (userName === null) {
    document.getElementById("response-text").innerText =
      "Please enter your name";
    document.getElementById("response-text").classList =
      "Display text-light h3";
  }

  if (!userName.trim()) {
    alert("Please enter a name!");
    userName = prompt("Enter your name");
  }
  document.getElementById("response-text").innerText = `${userName}`;
};
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const outcomeElement = document.getElementById('outcome');
let roundsplayedElement = document.getElementById('roundsPlayed')

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playRound(playerChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (playerChoice === "rock") {
    document.getElementById("change-image").src = "images/rock.png";
  }
  if (playerChoice === "paper") {
    document.getElementById("change-image").src = "images/paper.png";
  }
  if (playerChoice === "scissors") {
    document.getElementById("change-image").src = "images/scissors.png";
  }

  if (computerChoice === "rock") {
    document.getElementById("response-image").src = "images/rock.png";
  }
  if (computerChoice === "paper") {
    document.getElementById("response-image").src = "images/paper.png";
  }
  if (computerChoice === "scissors") {
    document.getElementById("response-image").src = "images/scissors.png";
  }
  if (playerChoice === computerChoice) {
    outcomeElement.textContent = "It's a tie!";
    roundsPlayed++;
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
   
) {
    outcomeElement.textContent = 'You win!';
    playerScore++; 
    roundsPlayed++;
} else {
    outcomeElement.textContent = 'You lose!';
    computerScore++;
    roundsPlayed++;
}
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;
roundsplayedElement.textContent = `Rounds played: ${roundsPlayed}`
}