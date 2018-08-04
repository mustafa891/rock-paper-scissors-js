let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoresDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".result > p");

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");


// Generating computer choice at random
const getComputerChoice = () => {
  const choiceList = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random()*3);
  return (choiceList[randomNumber]);
};


// Convert lowercase choice to uppercase
const convertToUp = (word) => {
  switch(word) {
    case "rock":
      return "Rock";
      break;
    case "paper":
      return "Paper";
      break;
    case "scissors":
      return "Scissors"
      break;
  }
};


// Output for user win
const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  const randomWin = ["beats", "smashes", "destroys", "obliterates"];
  const randomNumber = Math.floor(Math.random() * 4);
  const winEmojis = ["😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽"]
  const randomNumberEmoji = Math.floor(Math.random() * 6);
  resultDiv.innerHTML = `${convertToUp(userChoice)} ${randomWin[randomNumber]} ${convertToUp(computerChoice)}. You win! ${winEmojis[randomNumberEmoji]}`;
};

// Output for user lose / computer win
const lose = (userChoice, computerChoice) => {
  computerScore++
  computerScoreSpan.innerHTML = computerScore;
  const randomWin = ["beats", "smashes", "destroys", "obliterates"];
  const randomNumber = Math.floor(Math.random() * 4);
  const loseEmojis = ["😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽‍♀️"]
  const randomNumberEmoji = Math.floor(Math.random() * 7);
  resultDiv.innerHTML = `${convertToUp(computerChoice)} ${randomWin[randomNumber]} ${convertToUp(userChoice)}. You lose! ${loseEmojis[randomNumberEmoji]}`;

};

// Output for tie
const tie = (userChoice, computerChoice) => {
  const tieEmojis = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"]
  const randomNumberEmoji = Math.floor(Math.random() * 6);
  resultDiv.innerHTML = `${convertToUp(computerChoice)} matches ${convertToUp(userChoice)}. It's a tie! ${tieEmojis[randomNumberEmoji]}`;
};




// Comparing computerChoice and userChoice
const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  // console.log(userChoice)
  // console.log(computerChoice)

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }

};

const main = () => {
  rockDiv.addEventListener('click', function()  {
    game("rock");
  });

  paperDiv.addEventListener('click', function(){
    game("paper");
  });

  scissorsDiv.addEventListener('click', function(){
    game("scissors");
  });
};


main();
