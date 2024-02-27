
window.onload = (event) => {

  let userName = prompt('Enter your name')


  if (userName === null) {
    document.getElementById('response-text').innerText = 'Please enter your name'
    document.getElementById('response-text').classList = 'Display text-light h3'
  }

  if (!userName.trim()) {
    alert('Please enter a name!')
    userName = prompt('Enter your name')
  }
  document.getElementById('response-text').innerText = `${userName}`
};



function playRound(playerChoice) {
  const options = ['rock', 'paper', 'scissors'];
  const computerChoice = options[Math.floor(Math.random() * 3)]
  if(playerChoice === 'rock') {
    document.getElementById('response-image').src = 'images/rock.png'
  }
  if(playerChoice === 'paper') {
    document.getElementById('response-image').src = 'images/paper.png'
  }
  if(playerChoice === 'scissors') {
    document.getElementById('response-image').src = 'images/scissors.png'
  }

  if (computerChoice === 'rock') {
    document.getElementById('response-image').src = 'images/rock.png'
  }
  if (computerChoice === 'paper') {
    document.getElementById('response-image').src = 'images/paper.png'
  }
  if (computerChoice === 'scissors') {
    document.getElementById('response-image').src = 'images/scissors.png'
  }

  let outcome
  if (playerChoicee === computerChoice) {
    outcome = "It's a tie!"
  } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
    outcome = "You win!";
  } else {
    outcome = "Computer wins!";
  }

}