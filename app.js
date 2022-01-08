
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMcontentLoaded', getTodos);  //EventListener is a method 

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



//to get the value inputs

function addTodo(event) {
  //console.log("hello");
  event.preventDefault();
  const todoDiv = document.createElement('div');   //creating a div
  todoDiv.classList.add('todo');
  const newTodo = document.createElement('li'); // creating a list
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  
  todoDiv.appendChild(newTodo);   // making the li as the child of the div
  
  if(todoInput.value.length!== 0)
  {
    saveLocalTodos(todoInput.value);
  }
  else
  {
    alert("Nothing has been inputted");
    return;
  }
  


  const completedButton = document.createElement('button');   // creating a button
  completedButton.innerHTML = '<i class="fa fa-check"></i>';   //adding the fontawsome icon
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);                       // making the button a child of div

  const trashButton = document.createElement('button');        //creating a button
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';       // adding the fontawsome icon
  trashButton.classList.add('trash-button');                   //giving it a class name
  todoDiv.appendChild(trashButton);                           //making button a child of div
  todoList.appendChild(todoDiv);                              //making the created div a child of UL
  todoInput.value = "";                                       //making the value to null to reset it.
}

function deleteCheck(event) {
  const item = event.target;                              //ignite the div
  
  if (item.classList[0] === 'trash-button') {           //does trash button clicked
    const todo = item.parentElement;               //then in this case make todo equals to the parent of div that is UL
    todo.remove();                                      //remove the UL
  }

  if (item.classList[0] === "complete-button") {   //if the checked button is clicked
    const todo = item.parentElement;                // make the todo to UL
    todo.classList.add("completed");             // get the styling of completed class
  }

}


function saveLocalTodos(todo)
{
  let todos;
  if(window.localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(window.localStorage.getItem("todos"));
  }
  todos.push(todo);
  window.localStorage.setItem("todos", JSON.stringify(todos));


}

function getTodos()
{


  let todos;
  if(window.localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(window.localStorage.getItem("todos"));
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
  if(window.localStorage.getItem("todos") === null)
  {
    todos=[];
  }
  else
  {
    todos= JSON.parse(window.localStorage.getItem("todos"));
  }
    const todoIndex= todo.children[0].innerText;
todos.splice(todos.indexOf(todoIndex),1);
window.localStorage.setItem("todos", JSON.stringify(todos));
}


const clear = document.querySelector(".clear");
clear.addEventListener('click', function()
{
window.localStorage.clear();
location.reload();
});




const dataElement = document.getElementById("date");
let options={weekday: 'long', month: 'short', day:'numeric'};
let today = new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US",options);
