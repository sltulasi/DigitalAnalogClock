const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function movingClock(){

var date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

var display = ('Date : ' + month + '/' + day + '/' + year + '</br>' + '   Time :' + hr + 'hr : ' + min + 'min : ' + sec + 'sec');


document.querySelector(".todayDate").innerHTML = display;

let hrPosition = (hr*360/12)+(min*(360/60)/12) ;
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(movingClock, 1000);
