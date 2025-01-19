console.log("hola")
import {minutes} from "./setTimer.js"

const start_btn = document.getElementById('start_button')
let seconds = document.getElementById('seconds');
let mins, segs, repeater



function startTimer(){
    if (minutes.textContent === "00") {
        alert("Selecciona una cantidad de minutos")
    } else {
        parseTime();
        countdown();
    }

}

function parseTime() {
    mins = Number(minutes.textContent)
    segs = Number(seconds.textContent)
}

function countdown (){
    repeater = setInterval(runner, 1000)
}

function runner (){
    if (segs > 0) {
        segs --
    } else {
        if (mins > 0) {
            segs = 59;
            mins--
        } else if (mins == 0 && segs == 0) {
            clearInterval(repeater);
            alert("Tiempo finalizado");
            reload();
        } 
    } 
    updateDisplay(); 
}

function updateDisplay() { minutes.textContent = mins.toString().padStart(2, '0'); seconds.textContent = segs.toString().padStart(2, '0'); }

start_btn.addEventListener('click', startTimer)