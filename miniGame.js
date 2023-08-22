const patterns = ["q", "w", "e", "a", "s", "d"];
    const patternDisplay = document.getElementById("pattern-display");
    const messageElement = document.getElementById("message");
    const startButton = document.getElementById("start");
    const retryButton = document.getElementById("retry");

    let isGameStarted = false;
    let currentPattern = [];
    let userInput = "";
    let gameTimeout; // 타임아웃을 저장하기 위한 변수

    startButton.addEventListener("click", startGame);
    retryButton.addEventListener("click", retryGame);

    function startGame() {
      if (isGameStarted) {
        return;
      }

      isGameStarted = true;
      messageElement.textContent = "";
      userInput = "";
      generatePattern();
      displayPattern();
      retryButton.disabled = true;

      window.addEventListener("keydown", handleKey);

      // 5초 후에 게임 종료
      clearTimeout(gameTimeout); // 이전의 타임아웃 제거
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
      patternDisplay.textContent = currentPattern.join(" ");
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
      } else if (userInput.length > 0 && !patterns.includes(userInput[userInput.length - 1])) {
        endGame();
      } else if (userInput.length === patternDisplay.textContent.length && userInput !== patternDisplay.textContent) {
        endGame();
      }
    }

    function endGame() {
      clearTimeout(gameTimeout); // 타임아웃 제거
      messageElement.textContent = "일치하지 않습니다!";
      retryButton.disabled = false;
      isGameStarted = false;
      window.removeEventListener("keydown", handleKey);
    }

    function retryGame() {
      clearTimeout(gameTimeout); // 타임아웃 제거
      messageElement.textContent = "";
      userInput = "";
      retryButton.disabled = true;

      generatePattern();
      displayPattern();
      startGame(); // 문제를 다시 시작
    }

    function checkMatch() {
      if (userInput === currentPattern.join("")) {
        messageElement.textContent = "일치합니다!";
        isGameStarted = false; // 문제 풀이 성공 시 게임 종료
        startButton.textContent = "다음 문제";
        retryButton.disabled = false;
      } else {
        endGame();
      }
    }