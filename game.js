let humanScore = 0;
let computerScore = 0;
const computerChoiceText = document.querySelector("#computerChoice");
const humanChoiceText = document.querySelector("#humanChoice");
const computerScoreText = document.querySelector("#computerScore");
const humanScoreText = document.querySelector("#humanScore");
const display = document.querySelector("#display");
const menu = document.querySelector("#menuContainer");
const gameContainer = document.querySelector("#gameContainer");
const playBtn = document.querySelector(".playBtn");
const backToMenuBtn = document.querySelector("#backToMenuBtn");
const restartGameBtn = document.querySelector("#restartGameBtn");
const crownComputer = document.querySelector("#crownComputer");
const crownPlayer = document.querySelector("#crownPlayer");
const gameElements = [
  computerChoiceText,
  humanChoiceText,
  computerScoreText,
  humanScoreText,
];
const body = document.body;

playBtn.addEventListener("mouseenter", () =>
  playBtn.classList.add("btn-hover"),
);
playBtn.addEventListener("mouseleave", () =>
  playBtn.classList.remove("btn-hover"),
);
playBtn.addEventListener("click", () => startNewGame());

backToMenuBtn.addEventListener("mouseenter", () =>
  backToMenuBtn.classList.add("btn-hover"),
);
backToMenuBtn.addEventListener("mouseleave", () =>
  backToMenuBtn.classList.remove("btn-hover"),
);
backToMenuBtn.addEventListener("click", () => returnToMenu());

restartGameBtn.addEventListener("mouseenter", () =>
  restartGameBtn.classList.add("btn-hover"),
);
restartGameBtn.addEventListener("mouseleave", () =>
  restartGameBtn.classList.remove("btn-hover"),
);
restartGameBtn.addEventListener("click", () => restartGame());

function startNewGame() {
  gameContainer.style.visibility = "visible";
  gameContainer.style.height = "500px";
  playBtn.classList.remove("btn-hover");
  body.removeChild(menu);
}

function returnToMenu() {
  gameContainer.style.visibility = "";
  gameContainer.style.height = "";
  restartGame();
  body.appendChild(menu);
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  gameElements.forEach((value) => (value.textContent = ""));
  crownComputer.style.visibility = "";
  crownPlayer.style.visibility = "";
  display.textContent = "Rock, Paper or Scissors?";
}
function getComputerChoice() {
  const a = Math.floor(Math.random() * 3);
  if (a == 0) {
    return "Rock";
  } else if (a == 1) {
    return "Paper";
  } else if (a == 2) {
    return "Scissors";
  }
}

function updateScore() {
  humanScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
}

function playGame(humanChoice, computerChoice) {
  if (humanScore === 5) {
    crownPlayer.style.visibility = "visible";
    display.textContent = "🏆 GAME OVER! Player wins. 🏆";
    return;
  } else if (computerScore === 5) {
    crownComputer.style.visibility = "visible";
    display.textContent = "🏆 GAME OVER! Computer wins. 🏆";
    return;
  }

  let x = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  humanChoiceText.textContent = x;
  computerChoiceText.textContent = computerChoice;

  let roundResult = "";

  if (x === "Rock" && computerChoice === "Paper") {
    computerScore++;
    roundResult = "You lose! Paper beats rock!";
  } else if (x === "Paper" && computerChoice === "Rock") {
    humanScore++;
    roundResult = "You win! Paper beats rock!";
  } else if (x === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    roundResult = "You lose! Rock beats scissors!";
  } else if (x === "Rock" && computerChoice === "Scissors") {
    humanScore++;
    roundResult = "You win! Rock beats scissors!";
  } else if (x === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    roundResult = "You lose! Scissors beat paper!";
  } else if (x === "Scissors" && computerChoice === "Paper") {
    humanScore++;
    roundResult = "You win! Scissors beat paper!";
  } else {
    roundResult = "It's a tie!";
  }

  updateScore();

  display.textContent = roundResult;
}

const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach((button) =>
  button.addEventListener("click", () =>
    playGame(button.id, getComputerChoice()),
  ),
);

buttons.forEach((button) =>
  button.addEventListener("mouseenter", () =>
    button.classList.add("btn-hover"),
  ),
);

buttons.forEach((button) =>
  button.addEventListener("mouseleave", () =>
    button.classList.remove("btn-hover"),
  ),
);
