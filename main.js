//
//  JS File
//

const form = document.querySelector("#form");
const item = document.querySelector("#form-input");
const list = document.querySelector("#list-bottom-items");
const remove = document.querySelector("#list-bottom-remove")
const denominator = document.querySelector("#denominator")

form.addEventListener("submit", addToList);

remove.addEventListener("click", removeFromList);

if (addToList()) {
  denominator = denominator + 1;
}

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

function removeFromList(removeItem, myList) {

  console.log("Item removed");

  remove.removeChild(removeItem);
  list.removeChild(myList);


}