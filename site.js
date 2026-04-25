const hours = new Date().getHours()
const timeOfDay = hours < 4 || hours >= 17 ? 'evening' : hours < 12 ? 'morning' : 'afternoon'
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
const urls = ['img/image1.png', 'img/image2.png', 'img/image3.png', 'img/image4.png'];
urls.forEach(url => new Image().src = url);

// Select the <img> elements inside #carousel
const images = document.querySelectorAll('#carousel img');

// Track which image set is showing
let currentImage = 0;

// Update the 3 displayed images
const showImages = () => images.forEach((img, i) => img.src = urls[(i + currentImage) % urls.length]);

// Show the first set immediately
showImages();

// -------------------------------
// BUTTON CONTROLS
// -------------------------------

// Previous button
document.getElementById("prev").addEventListener("click", () => (currentImage--, showImages()));
// Next button
document.getElementById("next").addEventListener("click", () => (currentImage++, showImages()));

// AUTO‑ADVANCE EVERY 5 SECONDS
setInterval(() => (currentImage++, showImages()), 5000);

// -----------------------------
// Assignment 6: To‑Do List
// -----------------------------

// Load existing todos from localStorage
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Render function (required arrow function)
const renderTodos = () => {
  document.querySelector('.todo-list').innerHTML = todos
    .map(todo => `<li>${todo.text}</li>`)
    .join('');
};

renderTodos();

// Add button listener
document.getElementById('add-btn').addEventListener('click', () => {
  const input = document.getElementById('new-todo');
  if (!input.value.trim()) return;
  
  todos.push({ text: input.value });
  localStorage.setItem('todo-list', JSON.stringify(todos));
  input.value = '';
  renderTodos();
});

// -----------------------------
// Assignment 7: API Fetching
// -----------------------------

;(async () => {
  const p = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.random()*150|0}`)).json()
  document.getElementById('pokemon').append(Object.assign(new Image(), {src: p.sprites.front_default}))
})()