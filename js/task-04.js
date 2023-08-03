let counterValue = 0;

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const valEl = document.querySelector("#value");

btnPlus.addEventListener("click", onClick);
btnMinus.addEventListener("click", onClick);

function onClick(evt) {
  const xxx = evt.currentTarget;
  const value = xxx.textContent;
  counterValue = counterValue + Number(value);
  valEl.textContent = counterValue;
}
