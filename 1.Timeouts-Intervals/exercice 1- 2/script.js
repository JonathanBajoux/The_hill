

// exercice 1 
const text = "prout";
let title = document.createElement("h2");
document.body.appendChild(title);
let timer;

let i = 0;

function type() {

    if (i < text.length){
        title.innerHTML += text[i]
        i++
    }
        clearInterval();
}
setInterval(type, 1000);

// exercice 2
let chrono = document.createElement("h3");
document.body.appendChild(chrono);

let seconds = 0;
let minutes = 0;
let hours = 0;

function displayTime() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes == 60) {
        minutes = 0;
        hours++;
    }
    chrono.innerHTML = hours + " hours " + minutes + " minutes " + seconds + " seconds ";
}
setInterval(displayTime, 1000);