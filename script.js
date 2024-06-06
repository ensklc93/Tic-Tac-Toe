// Creating player1, player2, currentPlayer variables
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
    const oneButtonConfirm = document.querySelector('#playerone-button-confirm')
    const twoButtonConfirm = document.querySelector('#playertwo-button-confirm')
    const playerOneName = document.querySelector('#player-one__input')
    const playerOneChoice = document.querySelector('#player-one__choice')
    const playerTwoName = document.querySelector('#player-two__input')
    const playerTwoChoice = document.querySelector('#player-two__choice')

    oneButtonConfirm.addEventListener('click', (e) => {
        player1 = Player(playerOneName.value, playerOneChoice.value)
        currentPlayer = player1;
        e.preventDefault();
        return true
    });

    twoButtonConfirm.addEventListener('click', (e) => {
        player2 = Player(playerTwoName.value, playerTwoChoice.value)
        e.preventDefault();
        return true;
    });

    function currentPlayerSelection() {
        if (currentPlayer.name === player1.name) {
            currentPlayer = player2
            console.log(currentPlayer);
        } else {
            currentPlayer = player1
            console.log(currentPlayer);
        }
    }

    return {
        name,
        choice,
        currentPlayerSelection
    }
}

const player = Player();

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

for (let i = 1; i < 10; i++) {
    let space = document.querySelector(`[data-space="${i}"]`)
    space.addEventListener('click', (e) => {
        if (player1 && player2) {
            if (isNaN(e.currentTarget.textContent)) {
                return
            } else {
                let number = e.currentTarget.getAttribute('data-space')
                board.splice((number - 1), 1, currentPlayer.choice)
                e.currentTarget.textContent = currentPlayer.choice
                player.currentPlayerSelection();
                endOfGame();
            }
        };
    });
};
