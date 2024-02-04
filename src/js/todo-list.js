const todoListHTML = document.querySelector(".todo-section__list");
const todoInputHTML = document.querySelector(".todo-list-input-form input[type=text]")
const todoSubmitForm = document.querySelector(".todo-list-input-form");

const TODOS_KEY = "TodoList"

let todoList = [];

// functions

function removeTodoListItem(event) {
    const li = event.target.parentElement;
    
    todoList = todoList.filter((todoObject) => todoObject.id !== parseInt(li.id))
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    li.remove();
}

function printTodoList(todoObject) {
    const newTodoListItemContents = document.createElement("span");
    const newTodoListItemRemoveBtn = document.createElement("input");
    const newTodoListItem = document.createElement("div");

    // set contents
    newTodoListItemContents.innerText = todoObject.text;
    newTodoListItemContents.classList.add("todo-section__list__text");

    newTodoListItemRemoveBtn.type = "submit";
    newTodoListItemRemoveBtn.value = "X";
    newTodoListItemRemoveBtn.classList.add("todo-section__list__btn");
    
    newTodoListItem.classList.add("todo-section__list__item");
    newTodoListItem.id = todoObject.id;

    // set listener
    newTodoListItemRemoveBtn.addEventListener("click", removeTodoListItem);

    // organize
    newTodoListItem.append(newTodoListItemContents);
    newTodoListItem.append(newTodoListItemRemoveBtn);
    todoListHTML.append(newTodoListItem);

}

function todoSubmitHandler(event) {
    const todoObject = {
        text: todoInputHTML.value,
        id: Date.now()
    };

    // reset process
    event.preventDefault();
    todoInputHTML.value = "";

    // process
    printTodoList(todoObject);

    // save data to localStorage
    todoList.push(todoObject);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    
    console.log(todoList);
}

// setting listener

todoSubmitForm.addEventListener("submit", todoSubmitHandler);

// main

if ( localStorage.getItem(TODOS_KEY) !== null ){
    todoList = JSON.parse(localStorage.getItem(TODOS_KEY));
}
if ( todoList.length !== 0 ){
    todoList.forEach(element => {
        printTodoList(element);
    });
}

