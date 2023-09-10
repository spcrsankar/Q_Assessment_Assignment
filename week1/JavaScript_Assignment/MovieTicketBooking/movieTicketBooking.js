const seats = document.querySelector('#seats');
let seatsArray = [];
const book_ticket_button = document.querySelector('#book_ticket_button');
//update the seats with 64 squares
function createSeats() {
  let html = '';
  
  //create 64 squares in UI
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
function showAlert(msg,btn1,btn2,cb1,cb2) {
  console.log("show alert function called")
  document.querySelector("#alert").style.display = "flex";
  console.log(document.querySelector("#alert-msg"));
  document.querySelector("#alert-msg").innerHTML = msg;
  document.querySelector("#btn1").innerHTML = btn1;
  if(btn2 === undefined)
    document.querySelector("#btn2").style.display = "none";
  else{
    document.querySelector("#btn2").style.display = "inline-block";
    document.querySelector("#btn2").innerHTML = btn2;
    document.querySelector("#btn2").addEventListener("click", btn2ClickEvent);
  }
  function btn1ClickEvent(){
      document.querySelector("#alert").style.display = "none";    
      cb1();
      document.querySelector("#btn1").removeEventListener("click", btn1ClickEvent);
      document.querySelector("#btn2").removeEventListener("click", btn2ClickEvent);

  }

  function btn2ClickEvent(){
      document.querySelector("#alert").style.display = "none";
      cb2();
      document.querySelector("#btn2").removeEventListener("click", btn2ClickEvent);
      document.querySelector("#btn1").removeEventListener("click", btn1ClickEvent);

  }

  document.querySelector("#btn1").addEventListener("click", btn1ClickEvent);

}



//update the seats with 64 squares
function bookSeat(row,col) {

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

function clearInputfields(){
  document.querySelector("#no-of-seats").value = "";
  document.querySelector("#seats-number").value = "";
}

function exit(){
  document.querySelector("#book-your-ticket").style.display = "block";
  document.querySelector("#book-ticket").style.display = "none";
}

function continueBooking(){
  showAlert("Do you want to continue booking?","Yes","No",cb1=checkSeatNumber,cb2=restartOrExit)
}

function restartOrExit(){
  showAlert("do you want to restart or exit?","Restart","Exit",cb1=clearInputfields,cb2=exit)
}


//check seat numbers are valid or not and number of seats and seats number are equal or not and seat is already booked or not
function checkSeatNumber(){
  
  const no_of_seats = document.querySelector('#no-of-seats').value;
  const seats_number = document.querySelector('#seats-number').value.trim().split(",");

  //check seats numbers are valid or not
  for(let seat_number of seats_number){
    seat_number = seat_number.trim();

    if(!isValidSeatNumber(seat_number)) {
      alert('Please enter valid seat numbers');
      return;
    }
  }

  //check number of seats and seats number are equal or not
  if(no_of_seats != seats_number.length){
    alert('number of seats and seats number are not equal');
    return;
  }

  //check seat is already booked or not
  let booked_seats = [];
  for(let seat_number of seats_number){
    seat_number = seat_number.trim();
    const row = seat_number[0] - 1;
    const col = seat_number[1] - 1;
    if(seatsArray[row][col] === true) {
      booked_seats.push(seat_number);
    }
  }
  if(booked_seats.length > 0) {
    alert(`Seat ${booked_seats.join(',')} is already booked`);
    return;
  }

  //book the seats
  for(let seat_number of seats_number){
    seat_number = seat_number.trim();
    const row = seat_number[0] - 1;
    const col = seat_number[1] - 1;
    bookSeat(row,col);
  }

  //total amount
  const total_amount = no_of_seats * 120;
  showAlert(`Amount to be Paid ${total_amount}`,"Pay",undefined,cb1=bookAgain)
}


function bookAgain(){
  showAlert("Do you want to Book more tickets?","Yes","No",cb1=clearInputfields,cb2=exit)
}


//book ticket button click event
book_ticket_button.addEventListener('click', function(e) {
  e.preventDefault();
  continueBooking();
});



//create seats when page is loaded
document.addEventListener('DOMContentLoaded', function() {
  createSeats();
});

document.querySelector("#book-your-ticket").addEventListener("click", function(){
  document.querySelector("#book-your-ticket").style.display = "none";
  document.querySelector("#book-ticket").style.display = "flex";
})

