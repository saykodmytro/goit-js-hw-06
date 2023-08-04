const list = document.querySelector("#categories");

const arrayLi = list.children;
console.log("Number of categories: ", arrayLi.length);

[...arrayLi].forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});
