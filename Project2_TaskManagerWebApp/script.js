const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const pendingCount = document.getElementById('pendingCount');
const completedCount = document.getElementById('completedCount');
const customAlert = document.getElementById('customAlert');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (task === '' || date === '') {
    showAlert('Please enter task and date!', 'danger');
    return;
  }

  const newTask = {
    id: Date.now(),
    name: task,
    date: date,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  showAlert('Task added successfully!', 'success');

  taskInput.value = '';
  dateInput.value = '';
});

function renderTasks() {
  taskList.innerHTML = '';
  let pending = 0, completed = 0;

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item list-group-item';

    li.innerHTML = `
      <div>
        <input type="checkbox" class="form-check-input me-2" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.name} <small class="text-muted">(${task.date})</small></span>
      </div>
      <div class="task-actions">
        <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;

    taskList.appendChild(li);

    task.completed ? completed++ : pending++;
  });

  totalCount.textContent = tasks.length;
  pendingCount.textContent = pending;
  completedCount.textContent = completed;
}

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  showAlert('Task deleted!', 'warning');
}

function showAlert(message, type) {
  customAlert.textContent = message;
  customAlert.className = `custom-alert bg-${type}`;
  customAlert.classList.remove('d-none');

  setTimeout(() => {
    customAlert.classList.add('d-none');
  }, 2500);
}