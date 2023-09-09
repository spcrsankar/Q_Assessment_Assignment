function calculateSticks(houses) {
  if(houses == 0) {
    return 0;
  }
  return 6 + ((houses - 1) * 5);

}


document.querySelector("#houses").addEventListener("input", function () {
    let houses = document.querySelector("#houses").value;

    let sticks = calculateSticks(houses);
    console.log("sticks: " + sticks)
    document.querySelector("#sticks").value = sticks;
});