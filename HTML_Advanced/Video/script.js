let video = document.getElementById("video1");
let controller = document.getElementById("controller-id");


function display_none(element){
    // element.style.display = "none";
    element.style.opacity = 0;
}


function display_show(element){
    element.style.opacity = 1;
    
}

function review(){
    video.currentTime -= 1;
}
function play(){
    video.play();
}
function paused(){
    video.pause();
}
function stop(){
    video.pause();
    video.currentTime = 0;
}
function advance(){
    video.currentTime += 1;
}


