const inputEl = document.querySelector("#validation-input");

const currentLength = inputEl.dataset.length;
let enteredInputCount = 0;

inputEl.addEventListener("input", onInput);
function onInput(evt) {
  enteredInputCount = evt.currentTarget.value.length;
}

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (Number(currentLength) === Number(enteredInputCount)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
