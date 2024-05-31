
// Gameboard object contains the tic tac toe board 
function Gameboard() {

    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
    const round = createTurn()

    //Toggle between player1 and player2
    function switchPlayer() {
        
    }


    return {
        board,
        renderBoard: function () {
            console.log(board[0] + "---" + board[1] + "---" + board[2] + "\n" + "\n"
                + board[3] + "---" + board[4] + "---" + board[5] + "\n" + "\n"
                + board[6] + "---" + board[7] + "---" + board[8] + "\n" + "\n")

            console.log("Round " + round.getTurn())
            round.increment();
        }
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
