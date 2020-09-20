const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const createIngredientsCard = ingredients.map((listItem) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = listItem;

  return itemRef;
});

ingredientsRef.append(...createIngredientsCard);
