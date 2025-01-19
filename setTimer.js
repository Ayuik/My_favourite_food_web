let minutes = document.getElementById('minutes');
let timer_btns = Array.from(document.getElementsByClassName('timer_button'))

function changeValue (event){
    let mins = event.target.textContent;
    minutes.innerHTML= mins.padStart(2, '0');
}

timer_btns.forEach((timer_btn)=> {
    timer_btn.addEventListener('click', changeValue)
})

export {minutes}