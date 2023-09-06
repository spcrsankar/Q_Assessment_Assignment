
document.querySelector('#deliver-here').addEventListener('click', function(e) {
  e.preventDefault();
  const address = document.querySelector('.editable-address p');
  alert('Your address has been saved.')
  
});


document.querySelector("#address-edit").addEventListener('click', function(e) {
  const address = document.querySelector('.editable-address');
  address.contentEditable = true;
  console.log(address);
});


document.querySelector('#pay').addEventListener('click', function(e) {
  e.preventDefault();
  const inputs = document.querySelectorAll('.payment-area input');
  let cardNumber = inputs[0].value;
  let validThru = inputs[1].value;
  let cvv = inputs[2].value;
  let name = inputs[3].value;

  if (cardNumber.length !== 16) {
    alert('Please enter a valid card number.');
    return;
  } else if (validThru.length !== 5) {
    alert('Please enter a valid expiration date.');
    return;
  }
  else if (cvv.length !== 3) {  
    alert('Please enter a valid CVV.');
    return;
  }
  else if (name.length < 3) {
    alert('Please enter a valid name.');
    return;
  }
  else {
    alert('Your payment has been processed.');
  }
});