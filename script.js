//The Game object, which contains functional components of the tic tac toe game 
function Game() {

    let turn = 1;

    function createTurn() {
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

    function endOfGame() {

        if ((gameboard.board[0] === "X" && gameboard.board[1] === "X" && gameboard.board[2] === "X") ||
            (gameboard.board[3] === "X" && gameboard.board[4] === "X" && gameboard.board[5] === "X") ||
            (gameboard.board[6] === "X" && gameboard.board[7] === "X" && gameboard.board[8] === "X") ||
            (gameboard.board[0] === "X" && gameboard.board[3] === "X" && gameboard.board[6] === "X") ||
            (gameboard.board[1] === "X" && gameboard.board[4] === "X" && gameboard.board[7] === "X") ||
            (gameboard.board[2] === "X" && gameboard.board[5] === "X" && gameboard.board[8] === "X") ||
            (gameboard.board[0] === "X" && gameboard.board[4] === "X" && gameboard.board[8] === "X") ||
            (gameboard.board[2] === "X" && gameboard.board[4] === "X" && gameboard.board[6] === "X")
            == true) {
            console.log("Player1: " + player1.name + " won!")
            return true

        } else if ((gameboard.board[0] === "O" && gameboard.board[1] === "O" && gameboard.board[2] === "O") ||
            (gameboard.board[3] === "O" && gameboard.board[4] === "O" && gameboard.board[5] === "O") ||
            (gameboard.board[6] === "O" && gameboard.board[7] === "O" && gameboard.board[8] === "O") ||
            (gameboard.board[0] === "O" && gameboard.board[3] === "O" && gameboard.board[6] === "O") ||
            (gameboard.board[1] === "O" && gameboard.board[4] === "O" && gameboard.board[7] === "O") ||
            (gameboard.board[2] === "O" && gameboard.board[5] === "O" && gameboard.board[8] === "O") ||
            (gameboard.board[0] === "O" && gameboard.board[4] === "O" && gameboard.board[8] === "O") ||
            (gameboard.board[2] === "O" && gameboard.board[4] === "O" && gameboard.board[6] === "O")
            == true) {
            console.log("Player2: " + player2.name + " won!")
            return true
        }
    }

    return {
        createTurn,
        endOfGame
    }
}

const game = Game();


// Player object to create players with name, choice of "X" or "O" and input a number they want to place their choices on the board
function Player(name, choice) {
    return {
        name,
        choice,
        placeChoiceToBoard: function (number) {
            if (number > 0 && number < 10) {
                if (isNaN(gameboard.board[number - 1])) {
                    console.log("please choose another number")
                } else {
                    gameboard.board[number - 1] = choice
                    if (game.endOfGame()) {
                        gameboard.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                        game.turn = 1;
                        return
                    } else {
                        gameboard.renderBoard();
                    }
                }
            } else {
                console.log("Place your choice on a number between 1 to 9");
            }
        }
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
        }
    }

    return {
        board,
        renderBoard
    }
}
const gameboard = Gameboard();


