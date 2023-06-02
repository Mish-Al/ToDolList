const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task-button');
const task = document.getElementById('task');
const tasks = []; // array of strings

function addTask() {
  const taskString = task.value;
  const newTask = document.createElement('li');
  newTask.textContent = taskString;
  taskList.appendChild(newTask);
  tasks.push(taskString);
}

addTaskButton.addEventListener("click", addTask);