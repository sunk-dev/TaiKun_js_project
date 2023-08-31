const patterns = ["q", "w", "e", "a", "s", "d"];
const patternDisplay = document.getElementById("pattern-display");
const messageElement = document.getElementById("message");
const startButton = document.getElementById("start");
const retryButton = document.getElementById("retry");
const timerElement = document.getElementById("timer");
const score = document.getElementById("score");

let isGameStarted = false;
let currentPattern = [];
let userInput = "";
let gameTimeout;
let timerInterval;
let currentInputIndex = 0;
let timerValue = 0;
let totalPoint = 0;

startButton.addEventListener("click", startGame);
retryButton.addEventListener("click", retryGame);

function startGame() {
  if (isGameStarted) {
    return;
  }

  isGameStarted = true;
  messageElement.textContent = "";
  userInput = "";
  currentInputIndex = 0;
  generatePattern();
  displayPattern();
  retryButton.disabled = true;

  window.addEventListener("keydown", handleKey);

  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  timerValue = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerValue++;
    updateTimerDisplay();
  }, 1000);

  gameTimeout = setTimeout(() => {
    endGame();
    messageElement.textContent = "시간 초과!";
  }, 5000);
}

function generatePattern() {
  currentPattern = [];
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * patterns.length);
    currentPattern.push(patterns[randomIndex]);
  }
}

function displayPattern() {
  patternDisplay.innerHTML = "";
  currentPattern.forEach((char, index) => {
    const charElement = document.createElement("div");
    charElement.textContent = char;
    charElement.classList.add("pattern-char");
    if (index === currentInputIndex && userInput.length === index) {
      charElement.classList.add("wrong-char");
    }
    patternDisplay.appendChild(charElement);
  });
}

function handleKey(event) {
  const pressedKey = event.key.toLowerCase();
  if (isGameStarted && patterns.includes(pressedKey)) {
    userInput += pressedKey;
    checkInput();
  } else if (isGameStarted) {
    endGame();
  }
}

function checkInput() {
  if (userInput.length === 7) {
    checkMatch();
  } else if (
    userInput.length > 0 &&
    !patterns.includes(userInput[userInput.length - 1])
  ) {
    endGame();
  } else if (userInput.length === currentPattern.length) {
    if (userInput !== currentPattern.join("")) {
      markWrongInput();
    }
    endGame();
  } else if (userInput.length === currentInputIndex + 1) {
    currentInputIndex++;
    displayPattern();
  }
}

function markWrongInput() {
  const patternChars = patternDisplay.querySelectorAll(".pattern-char");
  patternChars[currentInputIndex].classList.add("wrong-char");
}

function endGame() {
  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  messageElement.textContent = "틀렸습니다!";
  startButton.disabled = true;
  retryButton.disabled = false;
  isGameStarted = false;
  window.removeEventListener("keydown", handleKey);
}

function retryGame() {
  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  messageElement.textContent = "";
  userInput = "";
  currentInputIndex = 0;
  resetPatternDisplay();
  retryButton.disabled = true;
  startButton.disabled = false;
  totalPoint = 0;
  score.textContent = `현재점수: ${totalPoint}점`;
  generatePattern();
  displayPattern();
  startGame();
}

function resetPatternDisplay() {
  const patternChars = patternDisplay.querySelectorAll(".pattern-char");
  patternChars.forEach((charElement) => {
    charElement.classList.remove("wrong-char");
  });
}

function checkMatch() {
  if (userInput === currentPattern.join("")) {
    clearTimeout(gameTimeout);
    clearInterval(timerInterval);
    messageElement.textContent = "일치합니다!";
    isGameStarted = false;
    startButton.textContent = "다음 문제";
    retryButton.disabled = false;
    totalPoint += 1;
    score.textContent = `현재점수: ${totalPoint}점`;
  } else {
    markWrongInput();
    endGame();
  }
}

function updateTimerDisplay() {
  timerElement.textContent = `타이머: ${timerValue}초`;
}

document
  .querySelector(".game-container .out-btn")
  .addEventListener("click", () => {
    if (isGameStarted) {
      endGame();
    }
    messageElement.textContent = "";
    userInput = "";
    currentInputIndex = 0;
    resetPatternDisplay();
    retryButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(gameTimeout);
    clearInterval(timerInterval);
    timerValue = 0;
    totalPoint = 0;
    score.textContent = `현재점수: ${totalPoint}점`;
    startButton.textContent = "게임 시작";
    messageElement.textContent = "미니게임 타자연습!";
    updateTimerDisplay();
    patternDisplay.innerHTML = ""; // pattern-display 초기화
  });
