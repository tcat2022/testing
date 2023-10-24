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

start.addEventListener('click', () => {
  let milliTime =  setInterval(function(){
        milliseconds++
        if(milliseconds > 98){
            milliseconds = 0
        }
        if(milliseconds < 10){
            milliseconds = "0" + milliseconds
         }
        },10)

 let secondTime =  setInterval(function(){
         seconds++
         if(seconds > 59){
             seconds = 0
             minutes++
         }
            if(seconds < 10){
                seconds = "0" + seconds
             }
            },1000)
       
reset.addEventListener('click', () => {
    clearInterval(milliTime)
    clearInterval(secondTime)
    minutes = '00';
    hours = '00';
    seconds = '00';
    milliseconds = '00';
   })
})

setInterval(function(){
    hour.innerText = hours
    minute.innerText = minutes
    second.innerText = seconds
    millisecond.innerText = milliseconds
    },1)