// Get DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const title = document.getElementById('title');

// Function to display current day, date, and month with Ghost and Jack-o'-lantern emojis
function updateTitle() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();

  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  // Add ghost emoji at the start and Jack-o'-lantern emoji at the end
  title.textContent = `👻 ${dayOfWeek}, ${month} ${day} - To-Do List 🎃`;
}

}

// Call the updateTitle function when the page loads
updateTitle();

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
