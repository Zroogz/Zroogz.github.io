const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

console.log(isAfternoon)

const Welcome = document.getElementById('Welcome');

if (isMorning) {
    
    Welcome.textContent = "Good Morning! Time to get going!"

}

if (isAfternoon) {
    
    Welcome.textContent = "Good Afternoon! Take a break!"

}

if (isEvening) {
    
    Welcome.textContent = "Good Evening! Don't work too late!"

}

localStorage.setItem("It's a secret to everybody.", "My favorite Nintendo franchise is Metroid")