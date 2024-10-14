// Get DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    ${taskText} 
    <button class="delete-btn">Delete</button>
  `;

  listItem.addEventListener('click', () => listItem.classList.toggle('done'));
  listItem.querySelector('.delete-btn').addEventListener('click', () => listItem.remove());

  taskList.appendChild(listItem);
  newTaskInput.value = ''; // Clear input field
}
