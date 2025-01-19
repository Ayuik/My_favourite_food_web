console.log("hola")
import {minutes} from "./setTimer.js"
const start_btn = document.getElementById('start_button')
let seconds = document.getElementById('seconds');
let repeater
let mins = Number(minutes.textContent)
let segs = Number(seconds.textContent)

function runTimer(){
    if (minutes.textContent === "00") {
        alert("Selecciona una cantidad de minutos")
    } else {
        countdown()
    }

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
        } else if (mins == 0 & segs == 0) {
            alert("Tiempo finalizado")
        }
    }

}

start_btn.addEventListener('click', runTimer)