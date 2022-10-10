const addButton = document.querySelector("#btn-addTodo");
let input = document.querySelector("#inputBox");
const contianer = document.querySelector("#tasks-container");

function createTodoItem(itemName) {
  let itemBox = document.createElement("li");
  itemBox.classList.add("item");

  let todoItem = document.createElement("span");
  todoItem.innerText = itemName;
  todoItem.classList.add("todo-item");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Delete";
  removeButton.classList.add("removeButton");

  itemBox.append(todoItem, removeButton);
  contianer.appendChild(itemBox);

  removeButton.addEventListener("click", () => {
    contianer.removeChild(itemBox);
  });
}

addButton.addEventListener("click", () => {
  if (input.value != "") {
    createTodoItem(input.value);
    input.value = "";
  } else {
    alert("Enter a task.");
  }
});
