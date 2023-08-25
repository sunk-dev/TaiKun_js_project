// 자산 nan으로 뜨는거 해결하기

//menu 버튼
//헤더에 menu 버튼
const $menuBtn = document.getElementById('menu');
// 메뉴 모달
const $menuModal = document.querySelector('body .menu-modal');
//메뉴 모달 안에서 x 버튼

const $exitBtn = document.querySelector('body .menu-modal .out-btn');

// 게임방법 버튼
const $howToPlayBtn = document.getElementById('how-to-play-btn');
// 게임방법 모달
const $howToPlayModal = document.querySelector('.how-to-paly-modal');
const $howToPlayExit = document.querySelector(
  '.how-to-paly-modal .how-to-paly_modal__actions .out-btn'
);
//게임정보모달
const $gameInfoBtn = document.getElementById('game-info-btn');
const $gameInfoModal = document.querySelector('.game-info-modal');
const $gameInfoExit = document.querySelector(
  '.game-info-modal .game-info_modal__actions .out-btn'
);
//end-game-btn
const $endGameBtn = document.getElementById('end-game-btn');

//메뉴 모달을 사라지게 하는
const exitMenuModalHandler = (e) => {
  console.log(`취소 버튼 눌림`);

  $menuModal.classList.remove('visible');
};

//메뉴 모달을 보여주는 showMenuModalHandler
const showMenuModalHandler = (e) => {
  $menuModal.classList.add('visible');
};

const showHandler = (e) => {
  const id = e.target.id;
  if (id === 'how-to-play-btn') {
    $howToPlayModal.classList.add('visible');
  } else if (id === 'game-info-btn') {
    console.log(`게임 정보버튼 눌림`);
    $gameInfoModal.classList.add('visible');
  }
};
const hideHandler = (e) => {
  const exitBtnClass = e.target.closest('div').className;
  if (exitBtnClass === 'how-to-paly_modal__actions') {
    $howToPlayModal.classList.remove('visible');
  } else if (exitBtnClass === 'game-info_modal__actions') {
    $gameInfoModal.classList.remove('visible');
  }
};
const exitHandler = (e) => {
  location.href = './start.html';
};

//menu 버튼에 클릭이벤트
$menuBtn.addEventListener('click', showMenuModalHandler);
$exitBtn.addEventListener('click', exitMenuModalHandler);
$howToPlayBtn.addEventListener('click', showHandler);
$howToPlayExit.addEventListener('click', hideHandler);
$gameInfoBtn.addEventListener('click', showHandler);
$gameInfoExit.addEventListener('click', hideHandler);
$endGameBtn.addEventListener('click', exitHandler);
// 요구사항 버튼
// 헤더에 요구사항 버튼
const $demendBtn = document.getElementById('demend');
// console.log($demendBtn);

// 요구사항 모달엘리먼트

const $demendModal = document.querySelector('.demend-modal');
const $buyBtn = $demendModal.querySelector('.buy-btn');

// console.log($demendModal);

// 구매 실패 모달
const $buyFailModal = document.querySelector('.buy-fail-modal');
// 구매 실패 모달 텍스트와 버튼
const $buyFailModalContent = $buyFailModal.querySelector('.modal__content');
const $buyFailModalBtn = $buyFailModal.querySelector('.modal__actions');
const buyFailModalClose = (e) => {
  $buyFailModal.classList.remove(CLASS_VISIBLE);
};

const buyFailModalHandler = (animalName, price) => {
  $buyFailModal.classList.add(CLASS_VISIBLE);
  $buyFailModalContent.textContent = `${animalName}의 가격은 ${price}입니다.`;
};
$buyFailModalBtn.addEventListener('click', buyFailModalClose);

let animalName = '';
let price = 0;

// 닫기버튼

const $demendModalCloseBtn = $demendModal.querySelector('.modal__actions');
// 요구사항 확인 컨텐츠들
const $modal__content = document.querySelector('.modal__content');
const CLASS_VISIBLE = 'visible';

const demendCloseModal = (e) => {
  $demendModal.classList.remove(CLASS_VISIBLE);
};

const showDemendModalHandler = (e) => {
  $demendModal.classList.add(CLASS_VISIBLE);
};
const finishGameHandler = (e) => {
  location.href = 'end.html';
};
// 요구사항 버튼을 눌렀을 때 모달을 띄움
$demendBtn.addEventListener('click', showDemendModalHandler);

// 구매 버튼 클릭시 게임 종료
$buyBtn.addEventListener('click', finishGameHandler);
// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$demendModalCloseBtn.addEventListener('click', demendCloseModal);

// 미니게임 버튼
const $miniGameBtn = document.getElementById('miniGame');
const $gameContainer = document.querySelector('.game-container');
const $outBtn = $gameContainer.querySelector('.out-btn');

const showGameHandler = () => {
  $gameContainer.classList.add(CLASS_VISIBLE);
};
const closeGameHandler = () => {
  $gameContainer.classList.remove(CLASS_VISIBLE);
};
$miniGameBtn.addEventListener('click', showGameHandler);
$outBtn.addEventListener('click', closeGameHandler);
// 판매 버튼
const $sellBtn = document.getElementById('sell');

const $sellModal = document.querySelector('.sell-modal');

const $sellModalCloseBtn = $sellModal.querySelector('.sell_modal__actions');

const $sell_modal__content = document.querySelector('.sell_modal__content');
const $egg = $sell_modal__content.querySelector('.egg');
const $milk = $sell_modal__content.querySelector('.milk');
const $fleece = $sell_modal__content.querySelector('.fleece');
const $duckegg = $sell_modal__content.querySelector('.duckegg');
const $goatMilk = $sell_modal__content.querySelector('.goatMilk');
const $truffle = $sell_modal__content.querySelector('.truffle');
// 판매버튼 선언
const $money = document.getElementById('money');
const $coin = document.getElementById('coin');

const closeModal = (e) => {
  $sellModal.classList.remove(CLASS_VISIBLE);
};

const showSellModalHandler = (e) => {
  $sellModal.classList.add(CLASS_VISIBLE);
};

// 판매 버튼을 눌렀을 때 모달을 띄움
$sellBtn.addEventListener('click', showSellModalHandler);

// 판매의 닫기 버튼을 눌렀을 때 닫는 기능
$sellModalCloseBtn.addEventListener('click', closeModal);

// 동물 버튼 누를 때 +1 되는 애니메이션 선언
const itemChicken = document.querySelector('.item-chicken');
const itemCow = document.querySelector('.item-cow');
const itemSheep = document.querySelector('.item-sheep');
const itemDuck = document.querySelector('.item-duck');
const itemGoat = document.querySelector('.item-goat');
const itemPig = document.querySelector('.item-pig');
let canClick = true;

//-------버튼 클릭 이벤트들(오영석)---------

const agg = document.getElementById('animal1');
let aggValue = 0;
agg.addEventListener('click', () => {
  console.log('닭 버튼을 클릭했습니다');
  aggValue++;
  console.log('계란: ', aggValue);

  $egg.textContent = `계란: ${aggValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemChicken.style.animation = 'none'; // 애니메이션 제거
  itemChicken.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemChicken.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const milk = document.getElementById('animal2');
let milkValue = 0;
milk.addEventListener('click', () => {
  console.log('젖소 버튼을 클릭했습니다');
  milkValue++;
  console.log('우유: ', milkValue);
  $milk.textContent = `우유: ${milkValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemCow.style.animation = 'none'; // 애니메이션 제거
  itemCow.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemCow.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const fleece = document.getElementById('animal3');
let fleeceValue = 0;
fleece.addEventListener('click', () => {
  console.log('양 버튼을 클릭했습니다');
  fleeceValue++;
  console.log('양털: ', fleeceValue);
  $fleece.textContent = `양털: ${fleeceValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemSheep.style.animation = 'none'; // 애니메이션 제거
  itemSheep.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemSheep.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const duckEgg = document.getElementById('animal4');
let duckEggValue = 0;
duckEgg.addEventListener('click', () => {
  console.log('오리 버튼을 클릭했습니다');
  duckEggValue++;
  console.log('오리알: ', duckEggValue);
  $duckegg.textContent = `오리알: ${duckEggValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemDuck.style.animation = 'none'; // 애니메이션 제거
  itemDuck.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemDuck.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const goatsMilk = document.getElementById('animal5');
let goatsMilkValue = 0;
goatsMilk.addEventListener('click', () => {
  console.log('염소 버튼을 클릭했습니다');
  goatsMilkValue++;
  console.log('염소젖: ', goatsMilkValue);
  $goatMilk.textContent = `염소젖: ${goatsMilkValue}`;
  // 동물 버튼 텍스트 애니메이션
  itemGoat.style.animation = 'none'; // 애니메이션 제거
  itemGoat.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemGoat.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const truffle = document.getElementById('animal6');
let truffleValue = 0;
truffle.addEventListener('click', () => {
  console.log('돼지 버튼을 클릭했습니다');
  truffleValue++;
  console.log('트러플: ', truffleValue);
  $truffle.textContent = `트러플: ${truffleValue}`;
  // 동물 버튼 텍스트 애니메이션
  itemPig.style.animation = 'none'; // 애니메이션 제거
  itemPig.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemPig.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});

// 상품가격 지정
const itemPrice = {
  aggPrice: +30,
  milkPrice: +50,
  fleecePrice: +100,
  duckEggPrice: +180,
  goatsMilkPrice: +300,
  trufflePrice: +500000,
};

const itemLevel = {
  chicken: +1,
  cow: +1,
  sheep: +1,
  duck: +1,
  goat: +1,
  pig: +1,
};
const needToCoin = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50,
};
//동물들 단계별로 증가되는 돈
const moneyByLevel = {
  chicken: [5, 10, 20, 35, 60],
  cow: [30, 50, 80, 110, 170],
  sheep: [70, 130, 200, 350, 450],
  duck: [200, 320, 470, 850, 1500],
  goat: [800, 1200, 2000, 4000, 9000],
  pig: [5000, 15000, 30000, 50000, 200000],
};

let totalMoney = 1000000000;
let totalCoin = 1000000;

const sellBtn = document.getElementById('asd');
sellBtn.addEventListener('click', () => {
  // 각 상품의 개수와 가격을 이용하여 해당 상품들의 가격을 총 수익에 추가
  totalMoney +=
    aggValue * itemPrice.aggPrice +
    milkValue * itemPrice.milkPrice +
    fleeceValue * itemPrice.fleecePrice +
    duckEggValue * itemPrice.duckEggPrice +
    goatsMilkValue * itemPrice.goatsMilkPrice +
    truffleValue * itemPrice.trufflePrice;
  console.log(typeof aggPrice);

  // 모든 value 값을 0으로 초기화
  aggValue = 0;
  milkValue = 0;
  fleeceValue = 0;
  duckEggValue = 0;
  goatsMilkValue = 0;
  truffleValue = 0;

  $egg.textContent = `계란 : ${aggValue}`;
  $milk.textContent = `우유 : ${milkValue}`;
  $fleece.textContent = `양털 : ${fleeceValue}`;
  $duckegg.textContent = `오리알 : ${fleeceValue}`;
  $goatMilk.textContent = `염소젖 : ${fleeceValue}`;
  $truffle.textContent = `트러플 : ${fleeceValue}`;

  $money.textContent = `현재자산 : ${totalMoney}원`;
});

$money.textContent = `현재자산 : ${totalMoney}원`;
$coin.textContent = `현재코인 : ${totalCoin}개`;

// 판매 버튼 이벤트
const sellButton = document.getElementById('sell');
sellButton.addEventListener('click', () => {
  console.log('판매버튼');
});

const $imgFn1 = document.querySelector('.imgFn1');
const $imgFn2 = document.querySelector('.imgFn2');
const $imgFn3 = document.querySelector('.imgFn3');
const $imgFn4 = document.querySelector('.imgFn4');
const $imgFn5 = document.querySelector('.imgFn5');

$imgFn1.addEventListener('click', (e) => {
  animalName = '소';
  price = 1000;
  if (totalMoney >= 1000) {
    totalMoney -= 1000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    milk.classList.add('visible');
    $imgFn1.classList.add('invisible');
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn2.addEventListener('click', () => {
  animalName = '양';
  price = 2000;
  if (totalMoney >= 2000) {
    totalMoney -= 2000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    fleece.classList.add('visible');
    $imgFn2.classList.add('invisible');
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn3.addEventListener('click', () => {
  animalName = '오리';
  price = 4000;
  if (totalMoney >= 4000) {
    totalMoney -= 4000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    duckEgg.classList.add('visible');
    $imgFn3.classList.add('invisible');
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn4.addEventListener('click', () => {
  animalName = '염소';
  price = 7200;
  if (totalMoney >= 7200) {
    totalMoney -= 7200;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    goatsMilk.classList.add('visible');
    $imgFn4.classList.add('invisible');
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn5.addEventListener('click', () => {
  animalName = '돼지';
  price = 12000;
  if (totalMoney >= 12000) {
    totalMoney -= 12000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    truffle.classList.add('visible');
    $imgFn5.classList.add('invisible');
  } else {
    buyFailModalHandler(animalName, price);
  }
});
const audioElement = document.getElementById('bg-music');
const toggleButton = document.getElementById('toggle-btn');

toggleButton.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    toggleButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    audioElement.pause();
    toggleButton.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
  }
});

// 마켓모달띄우기
const $marketBtn = document.getElementById('market');
const marketModal = document.querySelector('.market-modal');
$marketBtn.addEventListener('click', (e) => {
  marketModal.classList.add('visible');
});
const $marketCloseBtn = document.querySelector(
  '.market-modal .market_modal__actions .out-btn'
);
$marketCloseBtn.addEventListener('click', (e) => {
  marketModal.classList.remove('visible');
});

//마켓 동물 강화 텍스트 가져오기
const $chickenP = document.querySelector('.force_item .egg.forBorder');
const $cowP = document.querySelector('.milk.forBorder');
const $sheepP = document.querySelector('.fleece.forBorder');
const $duckP = document.querySelector('.duckegg.forBorder');
const $goatP = document.querySelector('.goatMilk.forBorder');
const $pigP = document.querySelector('.truffle.forBorder');

const $forceBtns = document.querySelector('.market_modal__content');
$forceBtns.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.id === `chick-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.chicken]) {
        if (itemLevel.chicken === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`닭 강화완료`);
          totalCoin -= needToCoin[itemLevel.chicken];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.chicken++;
          itemPrice.aggPrice = moneyByLevel.chicken[itemLevel.chicken - 1];
          $chickenP.textContent = `닭 ${itemLevel.chicken}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    } else if (e.target.id === `cow-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.cow]) {
        if (itemLevel.cow === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`소 강화완료`);
          totalCoin -= needToCoin[itemLevel.cow];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.cow++;
          itemPrice.milkPrice = moneyByLevel.cow[itemLevel.cow - 1];
          $cowP.textContent = `소 ${itemLevel.cow}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    } else if (e.target.id === `sheep-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.sheep]) {
        if (itemLevel.sheep === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`양 강화완료`);
          totalCoin -= needToCoin[itemLevel.sheep];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.sheep++;
          itemPrice.fleecePrice = moneyByLevel.sheep[itemLevel.sheep - 1];
          $sheepP.textContent = `양 ${itemLevel.sheep}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    } else if (e.target.id === `duck-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.duck]) {
        if (itemLevel.duck === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`오리 강화완료`);
          totalCoin -= needToCoin[itemLevel.duck];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.duck++;
          itemPrice.duckEggPrice = moneyByLevel.duck[itemLevel.duck - 1];
          $duckP.textContent = `오리 ${itemLevel.duck}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    } else if (e.target.id === `goat-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.goat]) {
        if (itemLevel.goat === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`염소 강화완료`);
          totalCoin -= needToCoin[itemLevel.goat];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.goat++;
          itemPrice.goatsMilkPrice = moneyByLevel.goat[itemLevel.goat - 1];
          $goatP.textContent = `염소 ${itemLevel.goat}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    } else if (e.target.id === `pig-force-btn`) {
      if (totalCoin >= needToCoin[itemLevel.pig]) {
        if (itemLevel.pig === 5) {
          e.target.disabled = 'disabled';
          alert(`5단계전부 강화 완료`);
          return;
        } else {
          alert(`돼지 강화완료`);
          totalCoin -= needToCoin[itemLevel.pig];
          coin.textContent = `현재코인 : ${totalCoin}개`;
          itemLevel.pig++;
          itemPrice.trufflePrice = moneyByLevel.pig[itemLevel.pig - 1];
          $pigP.textContent = `돼지 ${itemLevel.pig}단계`;
        }
      } else {
        alert(
          `코인이 부족합니다! 다른 게임을 통해 코인을 얻으세요 \n 현재보유 코인:${totalCoin}`
        );
      }
    }
  }
});

// 슬롯머신
const $slotMachine = document.querySelector('.slot-Machine');
const $footerslotMachine = document.getElementById('slotMachine');
const $startButton = document.getElementById('startButton');
const $outButton = document.getElementById('outButton');
$coin.textContent = `현재코인 : ${totalCoin}`;

function startSlotMachine() {
  if (totalCoin < 1) {
    alert('소지코인이 부족합니다.');
  } else {
    const numbers = generateRandomNumbers();
    const isAllSame = checkAllSame(numbers);

    if (isAllSame) {
      alert('당첨!');
      totalCoin += 30;
      $coin.textContent = `현재코인 : ${totalCoin}원`;
    } else {
      totalCoin -= 1;
      $coin.textContent = `현재코인 : ${totalCoin}원`;
    }

    const randomNumbersHTML = numbers
      .map(
        (number) =>
          `<img class="number-image" src="./image_slotMachine/${number}.png" alt="${number}">`
      )
      .join('');

    document.getElementById('randomNumbers').innerHTML = `${randomNumbersHTML}`;
  }

  function generateRandomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 9) + 1;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  function checkAllSame(numbers) {
    const firstNumber = numbers[0];
    return numbers.every((number) => number === firstNumber);
  }
}
const closeSlotHandler = () => {
  $slotMachine.classList.remove(CLASS_VISIBLE);
};
const openSlotHandler = () => {
  $slotMachine.classList.add(CLASS_VISIBLE);
  const startNum = `<img class="number-image" src="./image_slotMachine/7.png" alt="7" />
  <img class="number-image" src="./image_slotMachine/7.png" alt="7" />
  <img class="number-image" src="./image_slotMachine/7.png" alt="7" />`;
  document.getElementById('randomNumbers').innerHTML = `${startNum}`;
};
$startButton.addEventListener('click', startSlotMachine);
$outButton.addEventListener('click', closeSlotHandler);
$footerslotMachine.addEventListener('click', openSlotHandler);

// 미니게임 js
const patterns = ['q', 'w', 'e', 'a', 's', 'd'];
const patternDisplay = document.getElementById('pattern-display');
const messageElement = document.getElementById('message');
const startBtn = document.getElementById('start');
const retryButton = document.getElementById('retry');
const timerElement = document.getElementById('timer');
const score = document.getElementById('score');
const coin = document.getElementById('coin');

let isGameStarted = false;
let currentPattern = [];
let userInput = '';
let gameTimeout;
let timerInterval;
let currentInputIndex = 0;
let timerValue = 0;
let totalPoint = 0;

startBtn.addEventListener('click', startGame);
retryButton.addEventListener('click', retryGame);

function startGame() {
  totalMoney -= 500;
  $money.textContent = `현재자산 : ${totalMoney}원`;
  if (isGameStarted) {
    return;
  }

  isGameStarted = true;
  messageElement.textContent = '';
  userInput = '';
  currentInputIndex = 0;
  generatePattern();
  displayPattern();
  retryButton.disabled = true;

  window.addEventListener('keydown', handleKey);

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
    messageElement.textContent = '시간 초과!';
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
  patternDisplay.innerHTML = '';
  currentPattern.forEach((char, index) => {
    const charElement = document.createElement('div');
    charElement.textContent = char;
    charElement.classList.add('pattern-char');
    if (index === currentInputIndex && userInput.length === index) {
      charElement.classList.add('wrong-char');
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
    if (userInput !== currentPattern.join('')) {
      markWrongInput();
    }
    endGame();
  } else if (userInput.length === currentInputIndex + 1) {
    currentInputIndex++;
    displayPattern();
  }
}

function markWrongInput() {
  const patternChars = patternDisplay.querySelectorAll('.pattern-char');
  patternChars[currentInputIndex].classList.add('wrong-char');
}

function endGame() {
  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  messageElement.textContent = '틀렸습니다!';
  startBtn.disabled = true;
  retryButton.disabled = false;
  isGameStarted = false;
  window.removeEventListener('keydown', handleKey);
}

function retryGame() {
  clearTimeout(gameTimeout);
  clearInterval(timerInterval);
  messageElement.textContent = '';
  userInput = '';
  currentInputIndex = 0;
  resetPatternDisplay();
  retryButton.disabled = true;
  startBtn.disabled = false;
  totalPoint = 0;
  score.textContent = `현재점수: ${totalPoint}점`;
  generatePattern();
  displayPattern();
  startGame();
}

function resetPatternDisplay() {
  const patternChars = patternDisplay.querySelectorAll('.pattern-char');
  patternChars.forEach((charElement) => {
    charElement.classList.remove('wrong-char');
  });
}

function checkMatch() {
  if (userInput === currentPattern.join('')) {
    clearTimeout(gameTimeout);
    clearInterval(timerInterval);
    messageElement.textContent = '일치합니다!';
    isGameStarted = false;
    startBtn.textContent = '다음 문제';
    retryButton.disabled = false;
    totalPoint += 1;
    score.textContent = `현재점수: ${totalPoint}점`;
    totalCoin += 1;
    coin.textContent = `현재코인 : ${totalCoin}개`;
  } else {
    markWrongInput();
    endGame();
  }
}

function updateTimerDisplay() {
  timerElement.textContent = `타이머: ${timerValue}초`;
}

document
  .querySelector('.game-container .out-btn')
  .addEventListener('click', () => {
    if (isGameStarted) {
      endGame();
    }
    messageElement.textContent = '';
    userInput = '';
    currentInputIndex = 0;
    resetPatternDisplay();
    retryButton.disabled = true;
    startBtn.disabled = false;
    clearTimeout(gameTimeout);
    clearInterval(timerInterval);
    timerValue = 0;
    totalPoint = 0;
    score.textContent = `현재점수: ${totalPoint}점`;
    startBtn.textContent = '게임 시작';
    messageElement.textContent = '미니게임 타자연습!';
    updateTimerDisplay();
    patternDisplay.innerHTML = ''; // pattern-display 초기화
  });
