const seats = document.querySelector('#seats');
let seatsArray = [];
const book_ticket_button = document.querySelector('#book_ticket_button');
//update the seats with 64 squares
function createSeats() {
  let html = '';
  
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      html += `<div 
                class="square not-booked" 
                id="square_${i}_${j}" 
                >${i+1}${j+1}
              </div>`;
    }
  }
  seats.innerHTML = html;

  //seat Array
  for (let i = 0; i < 8; i++) {
    seatsArray[i] = [];
    for (let j = 0; j < 8; j++) {
      seatsArray[i][j] = false;
    }
  }

}

//show alert when user confirms
function showAlert() {
  var result = confirm("Do you want to proceed?");  
  return result;
}



//update the seats with 64 squares
function bookSeat(row,col) {
  //check the seat is booked or not
  if(seatsArray[row][col] === true) {
    return false;
  }

  //update the seat array
  seatsArray[row][col] = true;

  //update the UI
  const seat = document.querySelector(`#square_${row}_${col}`);
  seat.classList.add('booked');
  seat.classList.remove('not-booked');

  return true;
}

//check the seat is valid or not
function isValidSeatNumber(seat_number){
  if(seat_number.length != 2) {
    return false;
  }
  const row = seat_number[0];
  const col = seat_number[1];
  if(row < 1 || row > 8 || col < 1 || col > 8) {
    return false;
  }
  return true;
}


//book ticket button click event
book_ticket_button.addEventListener('click', function(e) {
  e.preventDefault();
  
  const no_of_seats = document.querySelector('#no-of-seats').value;
  const seats_number = document.querySelector('#seats-number').value.trim().split(",");

  for(let seat_number of seats_number){
    seat_number = seat_number.trim();

    //check seat number is valid or not
    if(!isValidSeatNumber(seat_number)) {
      alert('Please enter valid seat numbers');
      return;
    }
  }
  
  if(no_of_seats != seats_number.length){
    alert('number of seats and seats number are not equal');
    return;
  }

  //confrim the booking
  if(showAlert()){

    for(let seat_number of seats_number){
      seat_number = seat_number.trim();
      const row = seat_number[0] - 1;
      const col = seat_number[1] - 1;
      if(bookSeat(row,col) === false) {
        alert('Seat is already booked');
        return;
      }
      bookSeat(row,col);
    }
  }
  else{
    document.querySelector("#book-your-ticket").style.display = "flex";
    document.querySelector("#book-ticket").style.display = "none";
  }
  
});

//create seats when page is loaded
document.addEventListener('DOMContentLoaded', function() {
  createSeats();
});

document.querySelector("#book-your-ticket").addEventListener("click", function(){
  document.querySelector("#book-your-ticket").style.display = "none";
  document.querySelector("#book-ticket").style.display = "flex";
})

