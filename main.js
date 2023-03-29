//
//  JS File
//

const form = document.querySelector("#form");
const item = document.querySelector("#form-input");
const list = document.querySelector("#list-bottom-items");
const remove = document.querySelector("#list-bottom-remove")

form.addEventListener("submit", addToList);

function addToList(event) {
  event.preventDefault();
  console.log(item.value);
  console.log("Item added");

  const myList = document.createElement("li");
  const removeItem = document.createElement("button");
  removeItem.textContent = "x";
  myList.textContent = `${item.value}`;
  list.appendChild(myList);
  remove.appendChild(removeItem);

  form.reset();
}