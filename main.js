const agg = document.getElementById("animal1");
let aggValue = 0;
agg.addEventListener("click", () => {
  console.log("닭 버튼을 클릭했습니다");
  aggValue++;
  console.log("계란: ", aggValue);
});
const milk = document.getElementById("animal2");
let milkValue = 0;
milk.addEventListener("click", () => {
  console.log("젖소 버튼을 클릭했습니다");
  milkValue++;
  console.log("우유: ", milkValue);
});
const fleece = document.getElementById("ainmal3");
let fleeceValue = 0;
fleece.addEventListener("click", () => {
  console.log("양 버튼을 클릭했습니다");
  fleeceValue++;
  console.log("양털: ", fleeceValue);
});
const duckEgg = document.getElementById("animal4");
let duckEggValue = 0;
duckEgg.addEventListener("click", () => {
  console.log("오리 버튼을 클릭했습니다");
  duckEggValue++;
  console.log("오리알: ", duckEggValue);
});
const goatsMilk = document.getElementById("animal5");
let goatsMilkValue = 0;
goatsMilk.addEventListener("click", () => {
  console.log("염소 버튼을 클릭했습니다");
  goatsMilkValue++;
  console.log("염소젖: ", goatsMilkValue);
});
const truffle = document.getElementById("animal6");
let truffleValue = 0;
truffle.addEventListener("click", () => {
  console.log("돼지 버튼을 클릭했습니다");
  truffleValue++;
  console.log("트러플: ", truffleValue);
});
