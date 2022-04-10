var board = ['', '', '', '', '', '', '', '', ''];
var playerTime = 0;
var symbols = ['o', 'x'];
var gameOver = false;
var winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    console.log(board, 'board');
    console.log(playerTime, 'Player time');
    console.log(gameOver, 'Game Over');
}

function handleMove(position) {

    console.log(playerTime, "Player")
    if (gameOver) {
        return;
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime];
        gameOver = verifyWinner();
        if (!gameOver) {
            playerTime == 0 ? playerTime = 1 : playerTime = 0;
        }
    }
    return gameOver;
}

function verifyWinner() {
    for (let i = 0; i < winStates.length; i++) {
        let sequence = winStates[i];
        let pos1 = sequence[0];
        let pos2 = sequence[1];
        let pos3 = sequence[2];
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }
    }
    return false;
}

// for (let i = 0; i < winStates.length; i++) {
//     let sequence = winStates[i];
//     console.log(sequence, 'sequence');
//     for (let j = 0; j < sequence.length; j++) {
//         if (board[sequence[j]] == 'o') {
//             countO += 1;
//         } else if (board[sequence[j]] == 'x') {
//             countX += 1;
//         }

//     }
//     console.log(board[sequence], 'board sequence');

// }