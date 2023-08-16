// 헤더에 요구사항 버튼
const $demendBtn = document.getElementById("demend");
console.log($demendBtn);

// 요구사항 모달엘리먼트
const $demendModal = document.querySelector(".demend-modal");
console.log($demendModal);

const $demendModalCloseBtn = $demendModal.querySelector(".out-btn");

const CLASS_VISIBLE = "visible";

const showDemendModalHandler = (e) => {
  $demendModal.classList.add(CLASS_VISIBLE);
};

// 요구사항 버튼을 눌렀을 때 모달을 띄움
$demendBtn.addEventListener("click", showDemendModalHandler);

// 요구사항 모달의 닫기 버튼을 눌렀을 때 닫는 기능
$demendModalCloseBtn.addEventListener("click", close);
