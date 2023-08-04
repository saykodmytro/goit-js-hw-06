function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

btnColor.addEventListener("click", onClick);

function onClick() {
  span.style.backgroundColor = getRandomHexColor();
}
