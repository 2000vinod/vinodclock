
 function displayTime(){
    date = new Date();
    hourhand = date.getHours();
    minutehand = date.getMinutes();
    secondhand = date.getSeconds();

    hrotation = 30 * hourhand + minutehand / 2;
    mrotation = 6 * minutehand + secondhand / 10;
    srotation = 6 * secondhand;


    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;

    
}
setInterval(displayTime,1000);

