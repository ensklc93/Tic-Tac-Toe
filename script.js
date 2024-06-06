//Creating player1, player2, currentPlayer variables
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let player1;
let player2;
let currentPlayer;

// Gameboard object contains the tic tac toe board 
(function gameboard() {
    board.forEach((element) => {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        div.className = 'space';
        div.dataset.space = element;
        container.appendChild(div);
    });
})();




// Player object to create players with name, choice of "X" or "O" and input a number they want to place their choices on the board
function Player(name, choice) {
    return {
        name,
        choice,
    }
}


const player1 = Player('Enes', 'X')
const player2 = Player('Hasan', 'O')


// Gameboard object contains the tic tac toe board 
function Gameboard() {

    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = player1.name;

    function renderBoard() {
        console.log(gameboard.board[0] + "---" + gameboard.board[1] + "---" + gameboard.board[2] + "\n" + "\n"
            + gameboard.board[3] + "---" + gameboard.board[4] + "---" + gameboard.board[5] + "\n" + "\n"
            + gameboard.board[6] + "---" + gameboard.board[7] + "---" + gameboard.board[8] + "\n" + "\n")

        console.log("Round " + game.createTurn().getTurn() + ": I'ts the turn of -> " + currentPlayer)
        game.createTurn().increment();
        if (currentPlayer === player1.name) {
            currentPlayer = player2.name
        } else {
            currentPlayer = player1.name
function endOfGame() {
    if (board.every(item => typeof item !== 'number')) {
        console.log('It`s a tie')
    } else {
        if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[2] === "X" && board[4] === "X" && board[6] === "X")
            == true) {
            console.log("Player1: " + player1.name + " won!")
            return true
        } else if ((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
            (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
            (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
            (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
            (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
            (board[2] === "O" && board[4] === "O" && board[6] === "O")
            == true) {
            console.log("Player2: " + player2.name + " won!")
            return true
        }
    }
}

