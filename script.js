//The Game object, which contains functional components of the tic tac toe game 
function Game() {

    function createTurn() {
        let turn = 0; // Private variable

        return {
            increment: function () {
                turn++;
                return turn;
            },
            getTurn: function () {
                return turn;
            }
        };
    }

    return {
    }
}
const gameboard = Gameboard();

gameboard.renderBoard()


// Player object to create players with name, choice of "X" or "O" and input a number they want to place their choices on the board
function Player(name, choice) {
    return {
        name,
        choice,
        placeChoiceToBoard: function (number) {
            if (number > 0 && number < 10) {
                gameboard.board[number - 1] = choice
                console.log(gameboard.renderBoard());
            } else {
                console.log("Place your choice on a number between 1 to 9");
            }
        }
    }
}

const player1 = Player('Enes', 'X')
const player2 = Player('Hasan', 'O')

/* player1.placeChoiceToBoard(2) */



/* function GameWinner() {

    if ((gameboard.board[0] === "X" && gameboard.board[1] === "X" && gameboard.board[2] === "X") ||
        (gameboard.board[3] === "X" && gameboard.board[4] === "X" && gameboard.board[5] === "X") ||
        (gameboard.board[6] === "X" && gameboard.board[7] === "X" && gameboard.board[8] === "X") ||
        (gameboard.board[0] === "X" && gameboard.board[3] === "X" && gameboard.board[6] === "X") ||
        (gameboard.board[1] === "X" && gameboard.board[4] === "X" && gameboard.board[7] === "X") ||
        (gameboard.board[2] === "X" && gameboard.board[5] === "X" && gameboard.board[8] === "X") ||
        (gameboard.board[0] === "X" && gameboard.board[4] === "X" && gameboard.board[8] === "X") ||
        (gameboard.board[2] === "X" && gameboard.board[4] === "X" && gameboard.board[6] === "X")
        == true) {
        return alert("Player1: " + player1.name + " won!")
    } else if ((gameboard.board[0] === "O" && gameboard.board[1] === "O" && gameboard.board[2] === "O") ||
        (gameboard.board[3] === "O" && gameboard.board[4] === "O" && gameboard.board[5] === "O") ||
        (gameboard.board[6] === "O" && gameboard.board[7] === "O" && gameboard.board[8] === "O") ||
        (gameboard.board[0] === "O" && gameboard.board[3] === "O" && gameboard.board[6] === "O") ||
        (gameboard.board[1] === "O" && gameboard.board[4] === "O" && gameboard.board[7] === "O") ||
        (gameboard.board[2] === "O" && gameboard.board[5] === "O" && gameboard.board[8] === "O") ||
        (gameboard.board[0] === "O" && gameboard.board[4] === "O" && gameboard.board[8] === "O") ||
        (gameboard.board[2] === "O" && gameboard.board[4] === "O" && gameboard.board[6] === "O")
        == true) {
        return alert("Player2: " + player2.name + " won!")
    }
}

const gameWinner = GameWinner() */
