const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

rangeEl.addEventListener("input", onInput);

function onInput(evt) {
  spanEl.style.fontSize = evt.currentTarget.value + "px";
}
