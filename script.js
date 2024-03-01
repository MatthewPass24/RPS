// enter username prompt
window.onload = (event) => {
  let userName = prompt("Enter your name");

  if (userName === null) {
    userName = prompt('Please enter your name:')
  }

  if (!userName.trim()) {
    alert("Please enter a name!");
    userName = prompt("Enter your name");
  }
  document.getElementById("response-text").innerText = `${userName}`;
};

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5; // Shows the total number of rounds

// variables
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('ComputerScore');
const outcomeElement = document.getElementById('outcome');
let roundsplayedElement = document.getElementById('roundsPlayed');

//function to play game
function playRound(playerChoice) {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];
  if (playerChoice === "rock") {
    document.getElementById("change-image").src = "images/Rock-Flat-icon.png";
  }
  if (playerChoice === "paper") {
    document.getElementById("change-image").src = "images/Page-With-Curl-Emoji.png";
  }
  if (playerChoice === "scissors") {
    document.getElementById("change-image").src = "images/scissors1.png";
  }

  if (computerChoice === "rock") {
    document.getElementById("response-image").src = "images/Rock-Flat-icon.png";
  }
  if (computerChoice === "paper") {
    document.getElementById("response-image").src = "images/Page-With-Curl-Emoji.png";
  }
  if (computerChoice === "scissors") {
    document.getElementById("response-image").src = "images/scissors1.png";
  }
  if (playerChoice === computerChoice) {
    outcomeElement.textContent = "It's a tie!";
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
   
) {
    outcomeElement.textContent = 'You win!';
    playerScore++; 

} else {
    outcomeElement.textContent = 'You lose!';
    computerScore++;

}
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;

// Increase the number of rounds
roundsPlayed++;

// Display rounds played
roundsplayedElement.textContent = `Round ${roundsPlayed}`;

// Check if all rounds played
if (roundsPlayed === totalRounds) {
    endGame();
}

}

function endGame() {

  // Hide the Buttons 
  document.getElementById('choices').style.display = 'none';

  // Display total rounds played
  roundsplayedElement.textContent = `Total Rounds Played: ${roundsPlayed}`;

  // Declare overall winner or loser
  let endMessage = '';
  if (playerScore > computerScore) {
      endMessage = "Congratulations, you won against the computer!";
  } else if (playerScore < computerScore) {
      endMessage = 'Not so lucky this time, the computer got the upper hand!';
  } else {
      endMessage = "It's a tie game! Try again if you want to win";
  }

  // Display the end message
  outcomeElement.textContent = endMessage;
}

// Reload the page
document.getElementById("reset").addEventListener("click", function() {

  location.reload();
})