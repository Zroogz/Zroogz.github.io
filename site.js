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