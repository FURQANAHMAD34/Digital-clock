const hourEL = document.getElementById("hours")
const minuteEL = document.getElementById("minutes")
const secondEL = document.getElementById("seconds")
const ampmEL = document.getElementById("ampm")
const dayEL = document.getElementById("day")
const monthEL = document.getElementById("month")
const yearEL = document.getElementById("year")
 
function updateClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if(h>12)
    {
        h = h-12
        ampm = "PM"
    }
    h = h<10 ? "0"+h : h ;
    m = m<10 ? "0"+m : m ;
    s = s<10 ? "0"+s : s ;   
    hourEL.innerText = h ;
    minuteEL.innerText = m ;
    secondEL.innerText = s ;
    ampmEL.innerText= ampm ;
    setTimeout(()=>{
         updateClock();
    },1000);
}
updateClock()

