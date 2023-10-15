const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  console.log(typeof li.id);
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();

  if (toDos.length <= 33 || savedToDos <= 33) {
    toDoInput.classList.remove("hidden");
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  // span.innerText = newTodo;
  span.innerText = newTodo.text;
  const xmarkIcon = document.createElement("i");
  xmarkIcon.className = "fa-solid fa-circle-xmark fa-xl";
  // fontawesome -- <i class="fa-solid fa-circle-xmark"></i>;
  xmarkIcon.addEventListener("click", deleteTodo);

  if (toDos.length >= 33 || savedToDos >= 33) {
    console.log(toDos.length);
    toDoInput.classList.add("hidden");
  }

  li.append(span);
  li.append(xmarkIcon);
  toDoList.append(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
