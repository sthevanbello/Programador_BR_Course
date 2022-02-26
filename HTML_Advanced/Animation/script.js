let player = document.getElementById("player");
let xInitial = 0;
let yInitial = 0;

function movePlayerTo(x, y){
    let positionX = `${x}px`; 
    let positionY = `${y}px`;
    player.style.top = positionX;
    player.style.left = positionY;
    
}

setInterval(() =>{
    movePlayerTo(xInitial++, yInitial++)
}, 20)