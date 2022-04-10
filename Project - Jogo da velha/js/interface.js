document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    });
});

function handleClick(event) {
    console.log(event.target, "target");
    let position = event.target.id;
    console.log(position);
    if (handleMove(position)) {
        setTimeout(() => {
            alert(`Fim de jogo, o vencedor foi o jogador - ${board[position].toUpperCase()} - `)
        }, 10);
    };
    updateSquare(position);
}

function updateSquare(position) {
    let pos = position.toString();
    let square = document.getElementById(pos);
    let symbol = board[position];
    if (symbol != '') {
        square.innerHTML = `<div class="${symbol}"></div>`;
    }
}

let reset = document.getElementById("btn");
reset.addEventListener('click', () =>{
    console.log("reset");
    resetGame();
    resetSquares();
});

function resetSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        square.innerHTML = '';
    });
}