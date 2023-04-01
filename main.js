//
//  JS File
//

const form = document.querySelector("#form");
const item = document.querySelector("#form-input");
const list = document.querySelector("#list-bottom-items");
const denominator = document.querySelector("#denominator");
const numerator = document.querySelector("#numerator");

form.addEventListener("submit", addToList);

function addToList(event) {
  event.preventDefault();
  console.log(item.value);
  console.log("Item added");

  const myList = document.createElement("li");
  const spanItem = document.createElement("span");
  const removeItem = document.createElement("img");
  const doneItem = document.createElement("img");
  removeItem.addEventListener("click", removeFromList);
  doneItem.addEventListener("click", markDone);
  removeItem.src = "./images/remove.svg";
  spanItem.textContent = `${item.value}`;
  doneItem.src = "./images/checkbox-unchecked.svg";
  doneItem.classList.add("checkbox");
  list.appendChild(myList);
  myList.appendChild(doneItem);
  myList.appendChild(spanItem);
  myList.appendChild(removeItem);

  denominator.textContent = list.childElementCount;


  form.reset();
}

function removeFromList(event) {
  event.preventDefault();
  list.removeChild(this.parentElement);

  denominator.textContent = list.childElementCount;
  numerator.textContent = list.querySelectorAll(".done").length;
}

function markDone (event) {
  event.preventDefault();
  this.parentElement.classList.add("done");
  numerator.textContent = list.querySelectorAll(".done").length;

}