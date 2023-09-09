function calculateSticks(houses) {
  if(houses == 0) {
    return 0;
  }

}


document.querySelector("#houses").addEventListener("input", function () {
    var houses = document.querySelector("#houses").value;

    var matchsticks = 0;
    var i = 1;
    while (i <= houses) {
        matchsticks += 6 * i;
        i++;
    }
    document.querySelector("#matchsticks").value = matchsticks;
}