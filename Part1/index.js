let board = [];
let resetGame = false;
let playerSpan = document.getElementById("player");

///////// Playing the Game ////////
const play = (clickedId) => {
  let clickedElement = document.getElementById(clickedId);
  if (board[clickedId] === "X" || board[clickedId] === "O") {
    alert(`${playerSpan.innerText} already played here, pick somewhere else!`);
  } else {
    if (playerSpan.innerText === "X") {
      playerSpan.innerText = "O";
      clickedElement.innerText = "X";
      board[clickedId] = "X";
    } else {
      playerSpan.innerText = "X";
      clickedElement.innerText = "O";
      board[clickedId] = "O";
    }
  }

  //Top row
  if (
    board[0] !== undefined &&
    board[0] === board[1] &&
    board[0] === board[2]
  ) {
    alert(`${board[0]} is the winner!`);
    reset();
    return;
  }
  //Diagonal from top left
  if (
    board[0] !== undefined &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    alert(`${board[0]} is the winner!`);
    reset();
    return;
  }
  //Vertical down from top left
  if (
    board[0] !== undefined &&
    board[0] === board[3] &&
    board[0] === board[6]
  ) {
    alert(`${board[0]} is the winner!`);
    reset();
    return;
  }
  //Vertical down from top middle
  if (
    board[1] !== undefined &&
    board[1] === board[4] &&
    board[1] === board[7]
  ) {
    alert(`${board[1]} is the winner!`);
    reset();
    return;
  }
  //Diagonal from top right
  if (
    board[2] !== undefined &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    alert(`${board[2]} is the winner!`);
    reset();
    return;
  }
  //Vertical down from top right
  if (
    board[2] !== undefined &&
    board[2] === board[5] &&
    board[2] === board[8]
  ) {
    alert(`${board[2]} is the winner!`);
    reset();
    return;
  }
  //Horizontal middle
  if (
    board[3] !== undefined &&
    board[3] === board[4] &&
    board[3] === board[5]
  ) {
    alert(`${board[3]} is the winner!`);
    reset();
    return;
  }
  //Horizontal bottom
  if (
    board[6] !== undefined &&
    board[6] === board[7] &&
    board[6] === board[8]
  ) {
    alert(`${board[6]} is the winner!`);
    reset();
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Darn! There's no winner, it's a Cat's game.");
    reset();
    return;
  }
};

///////// Reset the board /////////
const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", reset, false);

function reset() {
  let boxes = document.getElementsByTagName("td");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
  board = [];
  playerSpan.innerText = "X";
}
