let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const single = document.querySelector(".single");
const best3 = document.querySelector(".best3");
let mode;

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return " Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  window.alert(`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`);
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  window.alert(`${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost.`);
}

function draw(userChoice, computerChoice){
  window.alert(`${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
  if (mode === 'single') {
    // end game, hide game UI
    document.getElementById("game-ui").style.display="none";
    // reset user and compuer score
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
  } else if (mode === 'best_of_3') {
    if (userScore === 2 || computerScore === 2) {
      // end game, hide game UI
      document.getElementById("game-ui").style.display="none";
      // reset user and compuer score
      userScore_span.innerHTML = 0;
      computerScore_span.innerHTML = 0;
    }
  }
}

// these listeners should be added front the start
rock_div.addEventListener('click', function() {
  game("r");
})

paper_div.addEventListener('click', function() {
  game("p");
})

scissors_div.addEventListener('click', function() {
  game("s");
})

var singleRound = function () {
  // 1. show game UI, using css display property
  document.getElementById("game-ui").style.display="inline";
  // 2. set mode to single
  mode = 'single';
}

var best3Mode = function () {
  // 1. show game UI, using css display property
  document.getElementById("game-ui").style.display="inline";
  // 2. set mode to best_of_3
  mode = 'best_of_3';
}

single.addEventListener('click', function(){
  singleRound();
})

best3..addEventListener('click', function(){
  best3Mode();
})
