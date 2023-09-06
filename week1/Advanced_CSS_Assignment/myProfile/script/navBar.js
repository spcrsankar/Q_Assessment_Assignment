const currentURL = window.location.href;

document.addEventListener('DOMContentLoaded', () => {
  const navBarList = document.querySelectorAll('.navigation-bar ul li a');
  console.log(currentURL.split('/'))
  let split = currentURL.split('/');
  if(currentURL.split('/')[split.length-1] === 'index.html')
    navBarList[0].style.color = 'yellow';
  else if(currentURL.split('/')[split.length-1] === 'about.html')
    navBarList[1].style.color = 'yellow';
  else if(currentURL.split('/')[split.length-1] === 'product-form.html')
    navBarList[2].style.color = 'yellow';
  else if(currentURL.split('/')[split.length-1] === 'game-zone.html')
    navBarList[3].style.color = 'yellow';

});