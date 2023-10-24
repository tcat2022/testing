let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let millisecond = document.getElementById('millisecond');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let minutes = '00';
let hours = '00';
let seconds = '00';
let milliseconds = '00';
let clicked = false
let tru = false
let tru1 = false

setInterval(function () {
    hour.innerText = hours
    minute.innerText = minutes
    second.innerText = seconds
    millisecond.innerText = milliseconds   
localStorage.setItem("hours", hours);
localStorage.setItem("minutes", minutes);
localStorage.setItem("seconds", seconds);
localStorage.setItem("milliseconds", milliseconds);
}, 1)
let localmilliseconds = localStorage.getItem("milliseconds");
let localseconds = localStorage.getItem("seconds");
let localminutes = localStorage.getItem("minutes");
let localhours = localStorage.getItem("hours");

start.addEventListener('click', () => {
    start.classList.add('animation')
    setTimeout(function() {start.classList.remove('animation')
    start.style.display = 'none'
    pause.style.display = 'initial'
},100)
    let milliTime = setInterval(function () {
        milliseconds++
        if (milliseconds > 98) {
            milliseconds = 0
        }
        if (milliseconds < 10) {
            milliseconds = "0" + milliseconds
        }
        },10)

    let secondTime = setInterval(function () {
        seconds++
        if (seconds >= 60) {
            seconds = 0
            minutes++
            tru = true
        } 
         if(seconds < 10){
                seconds = "0" + seconds
             }
             if(minutes >= 60){
                hours++
                minutes = "00"
                tru = false
                tru1 = true
             }
             if(minutes < 10 && tru){
                tru = false
                minutes = "0" + minutes
             }
             if(hours < 10 && tru1){
                tru1 = false
                hours = "0" + hours
             }
    }, 1000)

    pause.addEventListener('click', () => {
        pause.classList.add('animation')
        setTimeout(function() {pause.classList.remove('animation')
        pause.style.display = 'none'
        start.style.display = 'initial'
    },100)
    clearInterval(milliTime)
    clearInterval(secondTime)
    })

    reset.addEventListener('click', () => {
        reset.classList.add('animation')
    setTimeout(function() {reset.classList.remove('animation')
    pause.style.display = 'none'
    start.style.display = 'initial'
},100)
        clearInterval(milliTime)
        clearInterval(secondTime)
        minutes = '00';
        hours = '00';
        seconds = '00';
        milliseconds = '00';
    })
})
