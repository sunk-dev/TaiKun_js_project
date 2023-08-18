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
// console.log($demendModal);

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

// 요구사항 버튼을 눌렀을 때 모달을 띄움
$demendBtn.addEventListener("click", showDemendModalHandler);

// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$demendModalCloseBtn.addEventListener("click", demendCloseModal);

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

//-------버튼 클릭 이벤트들(오영석)---------
const agg = document.getElementById("animal1");
let aggValue = 0;
agg.addEventListener("click", () => {
  console.log("닭 버튼을 클릭했습니다");
  aggValue++;
  console.log("계란: ", aggValue);
  $egg.textContent = `계란: ${aggValue}/`;
});
const milk = document.getElementById("animal2");
let milkValue = 0;
milk.addEventListener("click", () => {
  console.log("젖소 버튼을 클릭했습니다");
  milkValue++;
  console.log("우유: ", milkValue);
  $milk.textContent = `우유: 5/${milkValue}`;
});
const fleece = document.getElementById("ainmal3");
let fleeceValue = 0;
fleece.addEventListener("click", () => {
  console.log("양 버튼을 클릭했습니다");
  fleeceValue++;
  console.log("양털: ", fleeceValue);
  $fleece.textContent = `양털: 5/${fleeceValue}`;
});
const duckEgg = document.getElementById("animal4");
let duckEggValue = 0;
duckEgg.addEventListener("click", () => {
  console.log("오리 버튼을 클릭했습니다");
  duckEggValue++;
  console.log("오리알: ", duckEggValue);
  $duckegg.textContent = `오리알: 5/${duckEggValue}`;
});
const goatsMilk = document.getElementById("animal5");
let goatsMilkValue = 0;
goatsMilk.addEventListener("click", () => {
  console.log("염소 버튼을 클릭했습니다");
  goatsMilkValue++;
  console.log("염소젖: ", goatsMilkValue);
  $goatMilk.textContent = `염소젖: 5/${goatsMilkValue}`;
});
const truffle = document.getElementById("animal6");
let truffleValue = 0;
truffle.addEventListener("click", () => {
  console.log("돼지 버튼을 클릭했습니다");
  truffleValue++;
  console.log("트러플: ", truffleValue);
  $truffle.textContent = `트러플: 5/${truffleValue}`;
});

// 판매 버튼 이벤트
const buyButton = document.getElementById("buy");
buyButton.addEventListener("click", () => {
  console.log("구매버튼");
});
const sellButton = document.getElementById("sell");
sellButton.addEventListener("click", () => {
  console.log("판매버튼");
});
