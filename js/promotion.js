 // function myPrice() {
//   let prc, text;

//   prc = document.getElementById("price").value;

//   if (isNaN(prc) || prc < 100 || prc > 1000) {
//     text = "Не коректна ціна"
    
//   } else {
//     text = "Нічого так";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 100 || x > 1000) {
    text = "Не коректна ціна";
  } else {
    text = "Нічого так";
  }
  
  document.getElementById("demo").innerHTML = text;
}