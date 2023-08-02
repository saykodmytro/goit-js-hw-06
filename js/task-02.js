const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElem = document.querySelector("#ingredients");
// console.dir(ingredientsElem);

const ingradArr = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

console.log(ingradArr);

ingredientsElem.append(...ingradArr);
