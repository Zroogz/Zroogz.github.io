const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

let timeOfDay = ""

if (isMorning) timeOfDay = "morning"
if (isAfternoon) timeOfDay = "afternoon"
if (isEvening) timeOfDay = "evening"

const messages = {
    morning: "Good Morning! Time to get going!",
    afternoon: "Good Afternoon! Take a break!",
    evening: "Good Evening! Don't work too late!"
}

document.getElementById("welcomeText").textContent = messages[timeOfDay]


localStorage.setItem(
    "It's a secret to everybody.",
    "My favorite Nintendo franchise is Metroid"
)

// Preload images
const urls = [
    'img/image1.png',
    'img/image2.png',
    'img/image3.png',
    'img/image4.png'
];

urls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Select the <img> elements inside #carousel
const images = document.querySelectorAll('#carousel img');

// Track which image set is showing
let currentImage = 0;

// Update the 3 displayed images
const showImages = () => {
    const offset = currentImage % urls.length;

    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length;
        image.src = urls[imageIndex];
    });
};

// Show the first set immediately
showImages();

// -------------------------------
// BUTTON CONTROLS
// -------------------------------

// Previous button
document.getElementById("prev").addEventListener("click", () => {
    currentImage--;      // move right
    showImages();
});

// Next button
document.getElementById("next").addEventListener("click", () => {
    currentImage++;      // move left
    showImages();
});

// -------------------------------
// AUTO‑ADVANCE EVERY 5 SECONDS
// -------------------------------
setInterval(() => {
    currentImage++;
    showImages();
}, 5000);

// -----------------------------
// Assignment 6: To‑Do List
// -----------------------------

// Load existing todos from localStorage
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Render function (required arrow function)
const renderTodos = () => {
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    todoList.append(li);
  });
};

// Run on page load
renderTodos();

// Add button listener
document.getElementById('add-btn').addEventListener('click', () => {
  const input = document.getElementById('new-todo');

  if (input.value.trim() === '') return;

  todos.push({
    text: input.value,
    completed: false
  });

  localStorage.setItem('todo-list', JSON.stringify(todos));

  input.value = '';

  renderTodos();
});