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