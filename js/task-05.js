const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput(evt) {
  evt.currentTarget.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = evt.currentTarget.value);

  //   if (evt.currentTarget.value === "") {
  //     outputEl.textContent = "Anonymous";
  //   } else {
  //     outputEl.textContent = evt.currentTarget.value;
  //   }
}
