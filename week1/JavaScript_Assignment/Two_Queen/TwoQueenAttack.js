const QUEEN1 = 1;
const QUEEN2 = 2;
const board = document.querySelector("#board");
const queen1_input = document.querySelector("#queen1");
const queen2_input = document.querySelector("#queen2");
let queen1_current_pos = null;
let queen2_current_pos = null;
let boardMatrix = [];

//update the board with 64 squares
function createBoard(board) {
  console.log("update board");
  let html = '<div class="position"> </div>';
  for (let i = 0; i < 8; i++) {
    html += `<div class="position"> ${String.fromCharCode(97 + i)}</div>`;
  }

  for (let i = 0; i < 8; i++) {
    html += `<div class="position"> ${i+1}</div>`;
    
    for (let j = 0; j < 8; j++) {
      html += `<div 
                class="square" 
                id="square_${i}_${String.fromCharCode(97 + j)}" 
                >
              </div>`;
    }
    
  }
  board.innerHTML = html;
}


//check for attack
function canAttack() {
  if(queen1_current_pos === null || queen2_current_pos === null){
    return false;
  }
  let row1 = queen1_current_pos[0];
  let col1 = queen1_current_pos[1];
  let row2 = queen2_current_pos[0];
  let col2 = queen2_current_pos[1];

  //check for same row
  if(row1 === row2){
    return true;
  }

  //check for same column
  if(col1 === col2){
    return true;
  }

  //check for diagonal
  if(Math.abs(row1-row2) === Math.abs(col1-col2)){
    return true;
  }

  return false;
}

//update board
function updateBoard() {

  for(let i = 0 ; i < 8; i++){
    for(let j = 0; j < 8; j++){
      let square = document.querySelector(`#square_${i}_${String.fromCharCode(97 + j)}`);
      if(boardMatrix[i][j] === QUEEN1){
        square.innerHTML = `<img src="queen.png" style="width:100%;height:100%">`;
      }
      else if(boardMatrix[i][j] === QUEEN2){
        square.innerHTML = `<img src="queen.png" style="width:100%;height:100%">`;
      }
      else{
        square.innerHTML = "";
      }
    }
  }

  if(isAttack()){
    document.querySelector("#status").classList = ["attack"]
    document.querySelector("#status").innerHTML = "Attack";
  }
  else{
    document.querySelector("#status").classList = ["no-attack"]
    document.querySelector("#status").innerHTML = "No Attack";
  }
}



//check valid input or not
function isValidInput(val) {
  return /^[a-h]{1}[1-8]{1}$/.test(val.toLowerCase());
}


//on load we have to update the board with 64 squares
document.addEventListener("DOMContentLoaded", function () {
  createBoard(board);

  //create 8 x 8 empty matrix represent board
  for (let i = 0; i < 8; i++) {
    let temp = [];
    for (let j = 0; j < 8; j++) {
      temp.push(0);
    }
    boardMatrix.push(temp);
  }
  $("#board").slideUp(0).delay(100).slideDown(1000);
});


//add event listener to the input field
queen1_input.addEventListener("input", function (e) {
  console.log(e.target.value)
  let val = e.target.value;
  if (isValidInput(val)) {
    let row = parseInt(val[1]) - 1;
    let col = val.toLowerCase().charCodeAt(0) - 97;

    if (boardMatrix[row][col] === 0) {
      boardMatrix[row][col] = QUEEN1;
      queen1_current_pos = [row, col];
      updateBoard();
    } 
    else{
      alert("Queen already present at this position")
    }
  } 
  else {
    if(queen1_current_pos !== null){
      boardMatrix[queen1_current_pos[0]][queen1_current_pos[1]] = 0;
    }
    queen1_current_pos = null;
    updateBoard();
  }
})

queen2_input.addEventListener("input", function (e) {
  let val = e.target.value;
  if (isValidInput(val)) {
    let row = parseInt(val[1]) - 1;
    let col = val.toLowerCase().charCodeAt(0) - 97;

    if (boardMatrix[row][col] === 0) {
      boardMatrix[row][col] = QUEEN2;
      queen2_current_pos = [row, col];
      updateBoard();
    } 
    else{
      alert("Queen already present at this position")
    }
  } 
  else {
    if(queen2_current_pos !== null){
      boardMatrix[queen2_current_pos[0]][queen2_current_pos[1]] = 0;
    }
    queen2_current_pos = null;
    updateBoard();
  }
})

