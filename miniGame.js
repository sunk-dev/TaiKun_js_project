const patterns = ['q', 'w', 'e', 'a', 's', 'd'];
const patternDisplay = document.getElementById('pattern-display');
const inputElement = document.getElementById('input');
const messageElement = document.getElementById('message');
const startButton = document.getElementById('start');

let isGameStarted = false;
let currentPattern = [];
let userInput = '';
let timer;

startButton.addEventListener('click', startGame);
inputElement.addEventListener('input', checkInput);

function startGame() {
  if (isGameStarted) {
    return;
  }

  isGameStarted = true;
  messageElement.textContent = '';
  inputElement.value = '';
  userInput = '';
  generatePattern();
  displayPattern();
  inputElement.disabled = false;

  timer = setTimeout(() => {
    isGameStarted = false;
    inputElement.disabled = true;
    checkMatch();
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
  patternDisplay.textContent = currentPattern.join(' ');
}

function checkInput() {
  userInput = inputElement.value.trim().toLowerCase();
  if (userInput.length === 7) {
    clearTimeout(timer);
    checkMatch();
  }
}

function checkMatch() {
  if (userInput === currentPattern.join('')) {
    messageElement.textContent = '일치합니다!';
  } else {
    messageElement.textContent = '일치하지 않습니다!';
  }
  inputElement.disabled = true;
}
