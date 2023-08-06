function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
let boxSize = 30;

createBtn.addEventListener("click", createBoxesOnClick);
function createBoxesOnClick() {
  const countBoxes = Number(inputEl.value);
  console.log("countBoxes: ", countBoxes);

  for (let i = 0; i < countBoxes; i += 1) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    boxSize += 10;
  }
}

destroyBtn.addEventListener("click", destroyBoxesOnClick);
function destroyBoxesOnClick() {
  boxesContainer.innerHTML = "";
  boxSize = 30;
}
