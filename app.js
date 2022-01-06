
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMcontentLoaded', getTodos);

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



function addTodo(event) {
  console.log("hello");

  
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  
  todoDiv.appendChild(newTodo);
  
saveLocalTodos(todoInput.value);


  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  
  if (item.classList[0] === 'trash-button') {
    const todo = item.parentElement;
    todo.remove(); 
  }

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

}


function saveLocalTodos(todo)
{
  let todos;
  if(localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));


}

function getTodos()
{


  let todos;
  if(localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(localStorage.getItem("todos"));
  }
todos.forEach(function(todo)
{
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  
  todoDiv.appendChild(newTodo);


  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
});
}

function removeLocalTodos(todo)
{
  let todos;
  if(localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(localStorage.getItem("todos"));
  }
    const todoIndex= todo.children[0].innerText;
todos.splice(todos.indexOf(todoIndex),1);
localStorage.setItem("todos", JSON.stringify(todos));
}


const clear = document.querySelector(".clear");
clear.addEventListener('click', function()
{
localStorage.clear();
location.reload();
});

const dataElement = document.getElementById("date");
let options={weekday: 'long', month: 'short', day:'numeric'};
let today = new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US",options);
