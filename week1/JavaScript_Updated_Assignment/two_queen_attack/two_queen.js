const QUEEN1 = 1;
const QUEEN2 = 2;

let boardMatrix = [];
let queen1_current_pos = null;
let queen2_current_pos = null;

//create 8 x 8 empty matrix represent board
for (let i = 0; i < 8; i++) {
  let temp = [];
  for (let j = 0; j < 8; j++) {
    temp.push(0);
  }
  boardMatrix.push(temp);
}

//check for attack
function canAttack() {
  if(queen1_current_pos === null || queen2_current_pos === null){
    return false;
  }
  let row1 = queen1_current_pos[0]-1;
  let col1 = queen1_current_pos[1]-1;
  let row2 = queen2_current_pos[0]-1;
  let col2 = queen2_current_pos[1]-1;

  //check for same row or same column or diagonal
  if(row1 === row2 || col1 === col2 || Math.abs(row1-row2) === Math.abs(col1-col2)){
    return true;
  }

  return false;
}

function isValidInput(val) {
  return /^[1-8]{2}$/.test(val.toLowerCase());
}


while(true){
  queen1_current_pos = prompt("Enter queen1 position(11,12,...88): ");
  if(isValidInput(queen1_current_pos)){
    break;
  }
  alert("Invalid input. Please enter a valid position(11,12,...88): ")
}


while(true){
  queen2_current_pos = prompt("Enter queen2 position(a1,a2,...h8): ", "00");
  if(isValidInput(queen2_current_pos)){
    break;
  }
  alert("Invalid input. Please enter a valid position(11,12,...88): ")
}


if(canAttack()){
  alert("Queen can attack");
}
else{
  alert("Queen can not attack");
}
