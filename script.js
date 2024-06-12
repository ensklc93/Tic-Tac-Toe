function gameStart() {
  // Creating player1, player2, currentPlayer variables
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let player1
  let player2
  let currentPlayer

  // gameboard IIFE contains the tic tac toe board and renders it on index.html
  ;(function gameboard() {
    board.forEach(element => {
      const wrapper = document.querySelector(".wrapper")
      const div = document.createElement("div")
      div.className = "space"
      div.dataset.space = element
      wrapper.appendChild(div)
    })
  })()

  // Player object to create players with name, choice of "X" or "O" and input a number they want to place their choices on the board
  function Player(name, choice) {
    const oneButtonConfirm = document.querySelector("#playerone-button-confirm")
    const twoButtonConfirm = document.querySelector("#playertwo-button-confirm")
    const playerOneName = document.querySelector("#player-one__input")
    const playerOneChoice = document.querySelector("#player-one__choice")
    const playerTwoName = document.querySelector("#player-two__input")
    const playerTwoChoice = document.querySelector("#player-two__choice")

    oneButtonConfirm.addEventListener("click", e => {
      player1 = Player(playerOneName.value, playerOneChoice.value)
      currentPlayer = player1
      playerOneChoice.options[(1, 2)].disabled = true
      if (playerOneChoice.value === "X") {
        let disableOptionX = playerTwoChoice.options[1]
        disableOptionX.disabled = true
      } else if (playerOneChoice.value === "O") {
        let disableOptionO = playerTwoChoice.options[2]
        disableOptionO.disabled = true
      }
      e.preventDefault()
      return true
    })

    twoButtonConfirm.addEventListener("click", e => {
      player2 = Player(playerTwoName.value, playerTwoChoice.value)
      playerTwoChoice.options[(1, 2)].disabled = true
      if (playerTwoChoice.value === "X") {
        let disableOptionX = playerOneChoice.options[1]
        disableOptionX.disabled = true
      } else if (playerTwoChoice.value === "O") {
        let disableOptionO = playerOneChoice.options[2]
        disableOptionO.disabled = true
      }

      e.preventDefault()
      return true
    })

    function currentPlayerSelection() {
      if (currentPlayer.name === player1.name) {
        currentPlayer = player2
      } else {
        currentPlayer = player1
      }
    }

    return {
      name,
      choice,
      currentPlayerSelection,
    }
  }

  const player = Player()

  function endOfGame() {
    if (board.every(item => typeof item !== "number")) {
      let finalScore = document.querySelector("#finalScore")
      finalScore.textContent = "It`s a tie"
      let disableSpace = document.querySelectorAll(".space")
      disableSpace.forEach(element => {
        element.style.pointerEvents = "none"
      })
    } else {
      if (
        (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
        (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
        (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
        (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
        (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
        (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
        (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
        (board[2] === "X" && board[4] === "X" && board[6] === "X") == true
      ) {
        finalScore.textContent = player1.name + " won!"
        let disableSpace = document.querySelectorAll(".space")
        disableSpace.forEach(element => {
          element.style.pointerEvents = "none"
        })
        return true
      } else if (
        (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
        (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
        (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
        (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
        (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
        (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
        (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
        (board[2] === "O" && board[4] === "O" && board[6] === "O") == true
      ) {
        finalScore.textContent = player2.name + " won!"
        let disableSpace = document.querySelectorAll(".space")
        disableSpace.forEach(element => {
          element.style.pointerEvents = "none"
        })
        return true
      }
    }
  }

  for (let i = 1; i < 10; i++) {
    let space = document.querySelector(`[data-space="${i}"]`)
    space.addEventListener("click", e => {
      if (player1 && player2) {
        if (isNaN(e.currentTarget.textContent)) {
          return
        } else {
          let number = e.currentTarget.getAttribute("data-space")
          board.splice(number - 1, 1, currentPlayer.choice)
          e.currentTarget.textContent = currentPlayer.choice
          player.currentPlayerSelection()
          endOfGame()
        }
      }
    })
  }
}

gameStart()

document.querySelector(".restart").addEventListener("click", () => {
  let finalScore = document.querySelector("#finalScore")
  finalScore.innerHTML = ""
  const wrapper = document.querySelector(".wrapper")
  wrapper.innerHTML = ""
  gameStart()
})
