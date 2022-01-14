window.onload = function() {
    let btnStart = document.getElementById("btn-start");
    btnStart.addEventListener("click", startCronometer);

    let btnStop = document.getElementById("btn-stop");
    btnStop.addEventListener("click", stopCronometer);
}
var numero = 0;
var interval;

function startCronometer(){
    let span = document.getElementById("span-display");
    // setTimeout(timer, 1000);
    span.innerHTML = "Start";
    interval = setInterval(timer, 100);

}

function stopCronometer(){
    clearInterval(interval);
}

function timer(){
    let span = document.getElementById("span-display");
    span.innerHTML = numero;
    numero++;
}
