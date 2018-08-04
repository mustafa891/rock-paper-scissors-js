let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const userComputerSpan = document.getElementById("computer-score");
const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


// Generating computer choice at random
const getComputerChoice = () => {
  const choiceList = ["rock", "paper", "scissors"]
  const randomNumber = Math.floor(Math.random()*3);
  return (choiceList[randomNumber]);
}


// Comparing computerChoice and userChoice
const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch(userChoice + computerchoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      console.log("USER WINS")
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      console.log("COMPUTER WINS")
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("TIE")
      break;
  }

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

game();
