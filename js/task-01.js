const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElementsArr = item.querySelectorAll("li");
  const categoryElements = categoryElementsArr.length;

  console.log(`Category: ${categoryName}`);
  //   console.dir(`categoryElementsArr: ${categoryElementsArr}`);
  console.log(`Elements: ${categoryElements}`);
});
