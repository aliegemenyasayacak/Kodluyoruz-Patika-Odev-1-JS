// let userName = prompt("Please enter your name.");
document.querySelector("#userName").innerHTML = prompt("Please enter your name.")

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
setInterval(() => {
    document.querySelector("#date").innerHTML = `Date: ${new Date().toLocaleTimeString()} ${weekdays[new Date().getDay()]}`;
}, 1000)