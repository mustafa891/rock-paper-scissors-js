let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const userComputerSpan = document.getElementById("computer-score");
const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


const computerChoice = () => {
  const listChoices = ["rock", "paper", "scissors"]
  const randomChoice = listChoices[Math.floor(Math.random()*3)];
  // console.log(randomChoice)
}

const game = (userChoice) => {
  console.log(userChoice);
}

const main = () => {
  rockDiv.addEventListener('click', function()  {
    game("rock")
  })

  paperDiv.addEventListener('click', function(){
    game("paper");
  })

  scissorsDiv.addEventListener('click', function(){
    game("scissors");
  })
}

main();
computerChoice();
