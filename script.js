let name = prompt('Enter your name')
document.getElementById('response-text').innerText = `${name}`

if (name === null) {
  document.getElementById('response-text').innerText = 'Please ask a question'
  document.getElementById('response-text').classList = 'Display text-danger'
}

if (!name.trim()) {
  alert('Please enter a name!')
  return
}
let message = `Congratulations, ${name} you won the game.`

let objArray = ["rock", "paper", "scissors",]
function playRound(userSelection) {
  const computerChoice = Math.floor(Math.random() * objArray.length)
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};