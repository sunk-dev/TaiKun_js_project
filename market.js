const price = {
  egg: 10,
};
const level = {
  chicken: 1,
  cow:1,
  sheep:1,
  duck:1,
  goat:1,
  pig:1,
};

const $forceBtns = document.querySelector('.sell_modal__content');
$forceBtns.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    
  
    if (e.target.id === `chick-force-btn`) {
   
      if (level.chicken === 5) {
        e.target.disabled = 'disabled';
        alert(`5단계전부 강화 완료`);
        return;
      } else {
        price.egg += 20;
        level.chicken++;
        alert(`닭강화레벨 ${level.chicken}`);
      }
      price.egg += 20;
    } else if (e.target.id === `cow-force-btn`) {
    } else if (e.target.id === `sheep-force-btn`) {
    } else if (e.target.id === `duck-force-btn`) {
    } else if (e.target.id === `goat-force-btn`) {
    } else if (e.target.id === `pig-force-btn`) {
    }
  }
});
