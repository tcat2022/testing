let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let millisecond = document.getElementById('millisecond');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let minutes = '00';
let hours = '00';
let seconds = '00';
let milliseconds = '00';
let clicked = false
let tru = false
let tru1 = false

start.addEventListener('click', () => {
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


    reset.addEventListener('click', () => {
        clearInterval(milliTime)
        clearInterval(secondTime)
        minutes = '00';
        hours = '00';
        seconds = '00';
        milliseconds = '00';
    })
})

setInterval(function () {
    hour.innerText = hours
    minute.innerText = minutes
    second.innerText = seconds
    millisecond.innerText = milliseconds
}, 1)