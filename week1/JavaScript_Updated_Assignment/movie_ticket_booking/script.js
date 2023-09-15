seatsArray = [];

// seat Array
for (let i = 0; i < 8; i++) {
  seatsArray[i] = [];
  for (let j = 0; j < 8; j++) {
    seatsArray[i][j] = false;
  }
}

function printAvailableSeats() {
  console.log("Available seats are: ")
  for(let i = 0; i < 8; i++){ 
    let row = i + " "
    for(let j = 0; j < 8; j++){
      if(seatsArray[i][j] === false){
        row += (i+1) +""+ (j+1) + " ";
      }
      else{
        row += 'X ';
      }
    }
    console.log(row);
  }
}
        

function isNumber(n){
  return /^\d+$/.test(n);
}

function isValidSeatNumber(n){
  return /^[1-8]{2}$/.test(n);
}

//book ticket
function bookTicket() {
  while(true){
    printAvailableSeats();
    let num = 0;
    while(true){
      num = prompt("Number of tickets to book: ")
      if(isNumber(num)){
        num = parseInt(num);
        if(num < 0)
          alert("Invalid input. Please enter a number greater than 0 ")
        else if(num == 0)
          alert("Please enter a number greater than 0 ")
        else
          break;
      }
      else{
        alert("Please enter a valid number")
      }
    }
    printAvailableSeats();
    for(let i = 0; i< num; i++){
      while(true){
        let seat_number = prompt("Enter seat number(11,12,..88): ")
        seat_number = seat_number.trim();
        const row = seat_number[0] - 1;
        const col = seat_number[1] - 1;
        if(isValidSeatNumber(seat_number) === false){
          alert("please enter a valid seat number")
        }
        else if(seatsArray[row][col] === true) {
          alert('This seat is already booked');
          printAvailableSeats();
        }
        else{
          seatsArray[row][col] = true;
          break;
        }
      }
      printAvailableSeats();
    }
    if(!confirm("do you want to book more tickets?")){
      return
    }
  }
}

console.log("djkfskfj")
bookTicket();
printAvailableSeats();
