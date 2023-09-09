//calculate the number of sticks required to build the given number of houses
function calculateSticks(houses) {
  if(houses == 0) {
    return 0;
  }
  return 6 + ((houses - 1) * 5);

}


document.querySelector("#houses").addEventListener("input", function () {
    let houses = document.querySelector("#houses").value;

    let sticks = calculateSticks(houses);
    document.querySelector("#sticks").innerHTML = sticks;
});