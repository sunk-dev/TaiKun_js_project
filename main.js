//요구사항 모달 구현(이승한
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
const $egg = $modal__content.querySelector(".egg");
const CLASS_VISIBLE = "visible";
const closeModal = (e) => {
  $demendModal.classList.remove(CLASS_VISIBLE);
};

const showDemendModalHandler = (e) => {
  $demendModal.classList.add(CLASS_VISIBLE);
};

// 요구사항 버튼을 눌렀을 때 모달을 띄움
$demendBtn.addEventListener("click", showDemendModalHandler);

// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$demendModalCloseBtn.addEventListener("click", closeModal);

// 동물 버튼 누를 때 +1 되는 애니메이션 선언
const itemText = document.querySelector('.item-text');
let canClick = true;

//-------버튼 클릭 이벤트들(오영석)---------
const agg = document.getElementById("animal1");
let aggValue = 0;
agg.addEventListener("click", () => {
  console.log("닭 버튼을 클릭했습니다");
  aggValue++;
  console.log("계란: ", aggValue);
  $egg.textContent = `계란: 5/${aggValue}`;

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const milk = document.getElementById("animal2");
let milkValue = 0;
milk.addEventListener("click", () => {
  console.log("젖소 버튼을 클릭했습니다");
  milkValue++;
  console.log("우유: ", milkValue);

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const fleece = document.getElementById("animal3");
let fleeceValue = 0;
fleece.addEventListener("click", () => {
  console.log("양 버튼을 클릭했습니다");
  fleeceValue++;
  console.log("양털: ", fleeceValue);

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const duckEgg = document.getElementById("animal4");
let duckEggValue = 0;
duckEgg.addEventListener("click", () => {
  console.log("오리 버튼을 클릭했습니다");
  duckEggValue++;
  console.log("오리알: ", duckEggValue);

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const goatsMilk = document.getElementById("animal5");
let goatsMilkValue = 0;
goatsMilk.addEventListener("click", () => {
  console.log("염소 버튼을 클릭했습니다");
  goatsMilkValue++;
  console.log("염소젖: ", goatsMilkValue);

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});
const truffle = document.getElementById("animal6");
let truffleValue = 0;
truffle.addEventListener("click", () => {
  console.log("돼지 버튼을 클릭했습니다");
  truffleValue++;
  console.log("트러플: ", truffleValue);

  // 동물 버튼 텍스트 애니메이션
  itemText.style.animation = 'none'; // 애니메이션 제거
  itemText.style.visibility = 'visible'; // 텍스트 보이기
  setTimeout(() => {
    itemText.style.animation = 'fadeInAndOut 2s ease-out forwards'; // 애니메이션 다시 적용
  }, 0);
});


