document.querySelector('form').addEventListener('submit', (e) => {
  if(document.querySelector('#name').value === '' || document.querySelector('#price').value === '' || document.querySelector('#unit').value === '' || document.querySelector('#description').value === '') {
    alert('please fill out all fields');
    e.preventDefault();
  }
  else
    alert('Product submitted!');
});