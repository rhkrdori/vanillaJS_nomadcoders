const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input") // todo-form id 아래의 input 태그
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintToDo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = '✔';
    button.addEventListener("click", deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodo.text;

    toDoList.append(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}