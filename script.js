
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


let message = `Congratulations, ${userName} you won the game.`

let objArray = ["rock", "paper", "scissors",]

function playRound(userSelection) {
  const computerChoice = objArray[Math.floor(Math.random() * 3)]
  let result = "";

  if(userSelection === computerChoice){
    result = "It's a tie!"
  }

  else{
    switch(userSelection){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
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