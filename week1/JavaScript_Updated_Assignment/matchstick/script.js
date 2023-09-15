
function isNumber(n){
  return /^\d+$/.test(n);
}

let num;
while(true){
  num = prompt("Enter a number(: ");
  if(isNumber(num)){
    num = parseInt(num);
    if(num < 0)
      alert("Invalid input. Please enter a number greater than 0 ")
    else if(num == 0)
      alert("We need 0 stricks to build 0 house")
    else
      alert(`We need ${(num*5)+1} stricks to build ${num} house`)
    break;
  }
  alert("plase enter a number")
}

