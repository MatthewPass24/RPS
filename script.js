let name = prompt('Enter your name')
ket
let message = `Congratulations, ${name} you won the game.`

let objArray = ["rock", "paper", "scissors",]
function playRound(userSelection) {
    const computerChoice = Math.floor(Math.random() * objArray.length )
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