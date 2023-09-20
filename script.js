let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let year = document.getElementById("year");
let countdown = document.getElementById("countdown");

let currentyear = new Date().getFullYear();
let nextyear = currentyear + 1;
year.innerHTML = nextyear;

let newyeartime = new Date (`January 01 ${nextyear} 00:00:00`);

function updateCountdown (){
    let currentTime = new Date ();
    let diff = newyeartime - currentTime ;

    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor(diff/1000/60/60) % 24;
    let m = Math.floor(diff/1000/60) % 60;
    let s = Math.floor(diff/1000) % 60;

    days.innerHTML = d < 10 ? "0" + d : d ;
    hours.innerHTML = h < 10 ? "0" + h : h ;
    minutes.innerHTML = m < 10 ? "0" + m : m ;
    seconds.innerHTML = s < 10 ? "0" + s : s ;
    
}

setInterval(()=>{
    updateCountdown();
},1000)

