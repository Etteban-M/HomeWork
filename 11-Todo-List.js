


const todoList = [];

function addTodo() {

 const inputElement = document.querySelector('.js-todo-name');
  const todoName = inputElement.value;
  

  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = '';



}