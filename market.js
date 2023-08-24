const price = {
  egg: 10,
};
const level = {
  chicken: 1,
};

const $forceBtns = document.querySelector('.sell_modal__content');
$forceBtns.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // const ask = alert(confirm(`강화 하시겠습니까?`));
    const target = e.targrt;
    console.log(`버튼 눌림 `, target.tagName);
    if (target.id === `chick-force-btn`) {
      //   console.log(ask);
      if (level.chicken === 5) {
        target.disabled = 'disabled';
        alert(`5단계전부 강화 완료`);
        return;
      } else {
        price.egg += 20;
        level.chicken++;
        alert(`닭강화레벨 ${level.chicken}`);
      }
      price.egg += 20;
    } else if (target.id === `cow-force-btn`) {
    } else if (target.id === `sheep-force-btn`) {
    } else if (target.id === `duck-force-btn`) {
    } else if (target.id === `goat-force-btn`) {
    } else if (target.id === `pig-force-btn`) {
    }
  }
});
