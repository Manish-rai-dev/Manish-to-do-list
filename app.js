
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(event) {
  console.log("hello");

  
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  
  todoDiv.appendChild(newTodo);
  
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add('complete-button');
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = ""
}

function deleteCheck(event) {
  const item = event.target;
  
  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement;

    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  }

  if (item.classList[0] === 'complete-button') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }

}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}


