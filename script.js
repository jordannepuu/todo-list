// Leaf fall logic
function createLeaf() {
  const leaf = document.createElement('div');
  const leafTypes = ['red-leaf', 'yellow-leaf', 'green-leaf'];
  const leafType = leafTypes[Math.floor(Math.random() * leafTypes.length)];

  leaf.classList.add('leaf', leafType);
  leaf.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  leaf.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random fall duration
  leaf.style.opacity = Math.random() + 0.5; // Random opacity

  document.body.appendChild(leaf);

  // Remove the leaf after it falls
  setTimeout(() => {
    leaf.remove();
  }, 10000); // Matches animation duration
}

// Generate leaves every second
setInterval(createLeaf, 1000);

// Rest of your To-Do List code...
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const title = document.getElementById('title');

// Function to display current day, date, and month
function updateTitle() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();

  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  title.textContent = `${dayOfWeek}, ${month} ${day} - To-Do List`;
}

updateTitle();
addTaskBtn.addEventListener('click', addTask);

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
