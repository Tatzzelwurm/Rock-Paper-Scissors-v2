let humanScore = 0;
let computerScore = 0;
const computerChoiceText = document.querySelector("#computerChoice")
const humanChoiceText = document.querySelector("#humanChoice")
const computerScoreText = document.querySelector("#computerScore")
const humanScoreText = document.querySelector("#humanScore")
const display = document.querySelector("#display")
const menu = document.querySelector("#menuContainer")
const gameContainer = document.querySelector("#gameContainer")
const playBtn = document.querySelector(".playBtn")
const backToMenuBtn = document.querySelector("#backToMenuBtn")
const body = document.body

playBtn.addEventListener("mouseenter",() => playBtn.classList.add("btn-hover"))
playBtn.addEventListener("mouseleave",() => playBtn.classList.remove("btn-hover"))
playBtn.addEventListener("click", () => startNewGame())

backToMenuBtn.addEventListener("mouseenter",() => playBtn.classList.add("btn-hover"))
backToMenuBtn.addEventListener("mouseleave",() => playBtn.classList.remove("btn-hover"))
backToMenuBtn.addEventListener("click", () => returnToMenu())



function startNewGame() {
gameContainer.style.visibility = "visible"
gameContainer.style.height = "500px"
playBtn.classList.remove("btn-hover")
body.removeChild(menu)
}

function returnToMenu() {
  gameContainer.style.visibility = ""
  gameContainer.style.height = ""
  body.appendChild(menu)
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
humanScoreText.textContent = humanScore
computerScoreText.textContent = computerScore
}

function playGame(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    display.textContent = "Game OVER!"
    return;
  }

  let x = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  humanChoiceText.textContent = x
  computerChoiceText.textContent = computerChoice

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

  updateScore()

  display.textContent = roundResult

  if (humanScore === 5) {
    gameResultText.textContent =
      "||| Game over! Human defeated the machine! |||";
      display.textContent = "GAME OVER!"
  } else if (computerScore === 5) {
    gameResultText.textContent =
      "||| Game over! This time the machine was smarter! |||";
      display.textContent = "GAME OVER!"
  }
  
}

const buttons = document.querySelectorAll(".b");

buttons.forEach(button => 
  button.addEventListener("click", () => playGame(button.id, getComputerChoice())) )


