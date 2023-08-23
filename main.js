//menu 버튼
//헤더에 menu 버튼
const $menuBtn = document.getElementById("menu");
// 메뉴 모달
const $menuModal = document.querySelector("body .menu-modal");
//메뉴 모달 안에서 x 버튼
const $exitBtn = document.getElementById("exit-btn");

//메뉴 모달을 사라지게 하는
const exitMenuModalHandler = (e) => {
  console.log(`취소 버튼 눌림`);
  $menuModal.classList.remove("show");
};

//메뉴 모달을 보여주는 showMenuModalHandler
const showMenuModalHandler = (e) => {
  $menuModal.classList.add("show");
};

//menu 버튼에 클릭이벤트
$menuBtn.addEventListener("click", showMenuModalHandler);
$exitBtn.addEventListener("click", exitMenuModalHandler);

// 요구사항 버튼
// 헤더에 요구사항 버튼
const $demendBtn = document.getElementById("demend");
// console.log($demendBtn);

// 요구사항 모달엘리먼트
const $demendModal = document.querySelector(".demend-modal");
const $buyBtn = $demendModal.querySelector(".buy-btn");
// console.log($demendModal);

// 구매 실패 모달
const $buyFailModal = document.querySelector(".buy-fail-modal");
// 구매 실패 모달 텍스트와 버튼
const $buyFailModalContent = $buyFailModal.querySelector(".modal__content");
const $buyFailModalBtn = $buyFailModal.querySelector(".modal__actions");
const buyFailModalClose = (e) => {
  $buyFailModal.classList.remove(CLASS_VISIBLE);
};

const buyFailModalHandler = (animalName, price) => {
  $buyFailModal.classList.add(CLASS_VISIBLE);
  $buyFailModalContent.textContent = `${animalName}의 가격은 ${price}입니다.`;
};
$buyFailModalBtn.addEventListener("click", buyFailModalClose);

let animalName = "";
let price = 0;

// 닫기버튼

const $demendModalCloseBtn = $demendModal.querySelector(".modal__actions");
// 요구사항 확인 컨텐츠들
const $modal__content = document.querySelector(".modal__content");
const CLASS_VISIBLE = "visible";

const demendCloseModal = (e) => {
  $demendModal.classList.remove(CLASS_VISIBLE);
};

const showDemendModalHandler = (e) => {
  $demendModal.classList.add(CLASS_VISIBLE);
};
const finishGameHandler = (e) => {
  location.href = "end.html";
};
// 요구사항 버튼을 눌렀을 때 모달을 띄움
$demendBtn.addEventListener("click", showDemendModalHandler);

// 구매 버튼 클릭시 게임 종료
$buyBtn.addEventListener("click", finishGameHandler);
// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$demendModalCloseBtn.addEventListener("click", demendCloseModal);

// 미니게임 버튼
const $miniGameBtn = document.getElementById("miniGame");
const $gameContainer = document.querySelector(".game-container");
const $outBtn = $gameContainer.querySelector(".out-btn");

const showGameHandler = () => {
  $gameContainer.classList.add(CLASS_VISIBLE);
};
const closeGameHandler = () => {
  $gameContainer.classList.remove(CLASS_VISIBLE);
};
$miniGameBtn.addEventListener("click", showGameHandler);
$outBtn.addEventListener("click", closeGameHandler);
// 판매 버튼
const $sellBtn = document.getElementById("sell");

const $sellModal = document.querySelector(".sell-modal");

const $sellModalCloseBtn = $sellModal.querySelector(".sell_modal__actions");

const $sell_modal__content = document.querySelector(".sell_modal__content");
const $egg = $sell_modal__content.querySelector(".egg");
const $milk = $sell_modal__content.querySelector(".milk");
const $fleece = $sell_modal__content.querySelector(".fleece");
const $duckegg = $sell_modal__content.querySelector(".duckegg");
const $goatMilk = $sell_modal__content.querySelector(".goatMilk");
const $truffle = $sell_modal__content.querySelector(".truffle");
// 판매버튼 선언
const $money = document.getElementById("money");

const closeModal = (e) => {
  $sellModal.classList.remove(CLASS_VISIBLE);
};

const showSellModalHandler = (e) => {
  $sellModal.classList.add(CLASS_VISIBLE);
};

// 요구사항 버튼을 눌렀을 때 모달을 띄움
$sellBtn.addEventListener("click", showSellModalHandler);

// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$sellModalCloseBtn.addEventListener("click", closeModal);

// 동물 버튼 누를 때 +1 되는 애니메이션 선언
const itemChicken = document.querySelector(".item-chicken");
const itemCow = document.querySelector(".item-cow");
const itemSheep = document.querySelector(".item-sheep");
const itemDuck = document.querySelector(".item-duck");
const itemGoat = document.querySelector(".item-goat");
const itemPig = document.querySelector(".item-pig");
let canClick = true;

//-------버튼 클릭 이벤트들(오영석)---------

const agg = document.getElementById("animal1");
let aggValue = 0;
agg.addEventListener("click", () => {
  console.log("닭 버튼을 클릭했습니다");
  aggValue++;
  console.log("계란: ", aggValue);

  $egg.textContent = `계란: ${aggValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemChicken.style.animation = "none"; // 애니메이션 제거
  itemChicken.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemChicken.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});
const milk = document.getElementById("animal2");
let milkValue = 0;
milk.addEventListener("click", () => {
  console.log("젖소 버튼을 클릭했습니다");
  milkValue++;
  console.log("우유: ", milkValue);
  $milk.textContent = `우유: ${milkValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemCow.style.animation = "none"; // 애니메이션 제거
  itemCow.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemCow.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});
const fleece = document.getElementById("animal3");
let fleeceValue = 0;
fleece.addEventListener("click", () => {
  console.log("양 버튼을 클릭했습니다");
  fleeceValue++;
  console.log("양털: ", fleeceValue);
  $fleece.textContent = `양털: ${fleeceValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemSheep.style.animation = "none"; // 애니메이션 제거
  itemSheep.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemSheep.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});
const duckEgg = document.getElementById("animal4");
let duckEggValue = 0;
duckEgg.addEventListener("click", () => {
  console.log("오리 버튼을 클릭했습니다");
  duckEggValue++;
  console.log("오리알: ", duckEggValue);
  $duckegg.textContent = `오리알: ${duckEggValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemDuck.style.animation = "none"; // 애니메이션 제거
  itemDuck.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemDuck.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});
const goatsMilk = document.getElementById("animal5");
let goatsMilkValue = 0;
goatsMilk.addEventListener("click", () => {
  console.log("염소 버튼을 클릭했습니다");
  goatsMilkValue++;
  console.log("염소젖: ", goatsMilkValue);
  $goatMilk.textContent = `염소젖: ${goatsMilkValue}`;
  // 동물 버튼 텍스트 애니메이션
  itemGoat.style.animation = "none"; // 애니메이션 제거
  itemGoat.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemGoat.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});
const truffle = document.getElementById("animal6");
let truffleValue = 0;
truffle.addEventListener("click", () => {
  console.log("돼지 버튼을 클릭했습니다");
  truffleValue++;
  console.log("트러플: ", truffleValue);
  $truffle.textContent = `트러플: ${truffleValue}`;
  // 동물 버튼 텍스트 애니메이션
  itemPig.style.animation = "none"; // 애니메이션 제거
  itemPig.style.visibility = "visible"; // 텍스트 보이기
  setTimeout(() => {
    itemPig.style.animation = "fadeInAndOut 2s ease-out forwards"; // 애니메이션 다시 적용
  }, 0);
});

// 상품가격 지정
aggPrice = 30;
milkPrice = 50;
fleecePrice = 100;
duckEggPrice = 180;
goatsMilkPrice = 300;
trufflePrice = 500000;

let totalMoney = 0;

const sellBtn = document.getElementById("asd");
sellBtn.addEventListener("click", () => {
  // 각 상품의 개수와 가격을 이용하여 해당 상품들의 가격을 총 수익에 추가
  totalMoney +=
    aggValue * aggPrice +
    milkValue * milkPrice +
    fleeceValue * fleecePrice +
    duckEggValue * duckEggPrice +
    goatsMilkValue * goatsMilkPrice +
    truffleValue * trufflePrice;
  console.log("현재 자산: ", totalMoney);

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

$egg.textContent = `계란 : ${aggValue}`;
$milk.textContent = `우유 : ${milkValue}`;
$fleece.textContent = `양털 : ${fleeceValue}`;
$duckegg.textContent = `오리알 : ${fleeceValue}`;
$goatMilk.textContent = `염소젖 : ${fleeceValue}`;
$truffle.textContent = `트러플 : ${fleeceValue}`;

$money.textContent = `현재자산 : ${totalMoney}원`;

// 판매 버튼 이벤트
const sellButton = document.getElementById("sell");
sellButton.addEventListener("click", () => {
  console.log("판매버튼");
});

const $imgFn1 = document.querySelector(".imgFn1");
const $imgFn2 = document.querySelector(".imgFn2");
const $imgFn3 = document.querySelector(".imgFn3");
const $imgFn4 = document.querySelector(".imgFn4");
const $imgFn5 = document.querySelector(".imgFn5");

$imgFn1.addEventListener("click", (e) => {
  animalName = "소";
  price = 1000;
  if (totalMoney >= 1000) {
    totalMoney -= 1000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    milk.classList.add("visible");
    $imgFn1.classList.add("invisible");
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn2.addEventListener("click", () => {
  animalName = "양";
  price = 2000;
  if (totalMoney >= 2000) {
    totalMoney -= 2000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    fleece.classList.add("visible");
    $imgFn2.classList.add("invisible");
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn3.addEventListener("click", () => {
  animalName = "오리";
  price = 4000;
  if (totalMoney >= 4000) {
    totalMoney -= 4000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    duckEgg.classList.add("visible");
    $imgFn3.classList.add("invisible");
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn4.addEventListener("click", () => {
  animalName = "염소";
  price = 7200;
  if (totalMoney >= 7200) {
    totalMoney -= 7200;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    goatsMilk.classList.add("visible");
    $imgFn4.classList.add("invisible");
  } else {
    buyFailModalHandler(animalName, price);
  }
});
$imgFn5.addEventListener("click", () => {
  animalName = "돼지";
  price = 12000;
  if (totalMoney >= 12000) {
    totalMoney -= 12000;
    $money.textContent = `현재자산 : ${totalMoney}원`;
    truffle.classList.add("visible");
    $imgFn5.classList.add("invisible");
  } else {
    buyFailModalHandler(animalName, price);
  }
});
const audioElement = document.getElementById("bg-music");
const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play();
    toggleButton.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
  } else {
    audioElement.pause();
    toggleButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  }
});

// 슬롯머신
document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  const numbers = generateRandomNumbers();
  const isAllSame = checkAllSame(numbers);

  if (isAllSame) {
    console.log("같을 때");
  } else {
    console.log("다를 때");
  }

  const randomNumbersHTML = numbers
    .map(
      (number) =>
        `<img class="number-image" src="./image_slotMachine/${number}.png" alt="${number}">`
    )
    .join("");

  document.getElementById("randomNumbers").innerHTML = `${randomNumbersHTML}`;
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
