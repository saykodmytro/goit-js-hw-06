function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
console.log(inputEl);
const createBtn = document.querySelector("[data-create]");
console.log(createBtn);
const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);
const boxesContainer = document.querySelector("#boxes");
console.log(boxesContainer);

createBtn.addEventListener("click", createBoxesOnClick);
function createBoxesOnClick() {}

destroyBtn.addEventListener("click", destroyBoxesOnClick);
function destroyBoxesOnClick() {}
