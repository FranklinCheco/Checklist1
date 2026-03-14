// ===============================
// CS50 Final Project - To-Do App
// ===============================

const tasks = new Map();
let completedLog = [];

// Save tasks + log to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(Array.from(tasks.entries())));
  localStorage.setItem("completedLog", JSON.stringify(completedLog));
}

// Load tasks + log from localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    const parsed = new Map(JSON.parse(saved));
    parsed.forEach((task, id) => tasks.set(id, task));
  }
  const savedLog = localStorage.getItem("completedLog");
  if (savedLog) {
    completedLog = JSON.parse(savedLog);
  }
  displayTasks();
  displayLog();
}

// Add new task
function addTask(title, startDate, deadlineDate) {
  const safeTitle = title.replace(/[^A-Za-z0-9 ]/g, "").trim();
  if (safeTitle.length === 0) {
    alert("Task cannot be empty!");
    return;
  }

  for (let task of tasks.values()) {
    if (task.title.toLowerCase() === safeTitle.toLowerCase()) {
      alert("Task already exists!");
      return;
    }
  }

  tasks.set(tasks.size + 1, {
    title: safeTitle,
    completed: false,
    progress: 0,
    startDate: startDate || "Not set",
    deadlineDate: deadlineDate || "No deadline"
  });

  saveTasks();
  displayTasks();
}

// Delete task
function deleteTask(id) {
  tasks.delete(id);
  saveTasks();
  displayTasks();
}

// Play sound when task completes
function playCompletionSound() {
  // Use the exact filename you downloaded
  const audio = new Audio("freesound_community-magic-wand-6214.mp3");
  audio.play();
}

// Increment progress
function incrementProgress(id) {
  let task = tasks.get(id);
  if (task.progress < 100) {
    task.progress += 10;
    if (task.progress === 100) {
      task.completed = true;
      completedLog.push(`${task.title} (Completed on ${new Date().toLocaleString()})`);
      playCompletionSound();
      saveTasks();
      displayLog();
    }
    saveTasks();
    displayTasks();
  }
}

// Display tasks
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  let totalTasks = tasks.size;
  let completedCount = 0;

  const now = new Date();

  tasks.forEach((task, id) => {
    if (task.completed) completedCount++;

    // Deadline notification check (5 minutes before)
    let deadlineAlert = "";
    if (task.deadlineDate && task.deadlineDate !== "No deadline") {
      const deadline = new Date(task.deadlineDate);
      const timeDiff = deadline - now;
      if (timeDiff > 0 && timeDiff < 5 * 60 * 1000) {
        deadlineAlert = "🔔 Deadline in less than 5 minutes!";
      }
    }

    taskList.innerHTML += `
      <p>
        ${task.title} - Progress: ${task.progress}% 
        | Start: ${task.startDate} 
        | Deadline: ${task.deadlineDate} 
        ${deadlineAlert}
        <button onclick="incrementProgress(${id})">+10%</button>
        <button onclick="deleteTask(${id})">Delete</button>
      </p>`;
  });

  let remainingCount = totalTasks - completedCount;

  taskList.innerHTML += `<hr>`;
  taskList.innerHTML += `<p>Completed Tasks: ${completedCount} / ${totalTasks}</p>`;
  taskList.innerHTML += `<p>Remaining Tasks: ${remainingCount} / ${totalTasks}</p>`;
}

// Display completed log
function displayLog() {
  const logList = document.getElementById("log-list");
  logList.innerHTML = "";
  completedLog.forEach(entry => {
    logList.innerHTML += `<p>${entry}</p>`;
  });
}

// Clear completed log
function clearLog() {
  completedLog = [];
  saveTasks();
  displayLog();
}

// Restart app
function resetApp() {
  window.location.href = "index.html";
}

// Search tasks
function searchTasks(pattern) {
  const regex = new RegExp(pattern, "ig");
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    if (regex.test(task.title)) {
      taskList.innerHTML += `<p>Found: ${task.title}</p>`;
    }
  });
}

// Unicode search
function searchTasksUnicode(pattern) {
  const regex = new RegExp(pattern, "v");
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    if (regex.test(task.title)) {
      taskList.innerHTML += `<p>Unicode Match: ${task.title}</p>`;
    }
  });
}

// UI Handlers
function handleAddTask() {
  const input = document.getElementById("task-input");
  const startDate = document.getElementById("start-date").value;
  const deadlineDate = document.getElementById("deadline-date").value;
  addTask(input.value, startDate, deadlineDate);
  input.value = "";
  document.getElementById("start-date").value = "";
  document.getElementById("deadline-date").value = "";
}

function handleSearch() {
  const input = document.getElementById("search-input");
  searchTasks(input.value);
}

function handleUnicodeSearch() {
  const input = document.getElementById("search-input");
  searchTasksUnicode(input.value);
}

// Load tasks when page loads
window.onload = loadTasks;
