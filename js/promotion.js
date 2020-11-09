// function validateForm()  {
//   var titleForMe = document.getElementById("title").value;
//   var pass = document.getElementById("password").value;
//   var priceForMe = document.getElementById("price").value;
//   var text = document.getElementById('titleText');
//   if(titleForMe == "") {
//       innerText = "введи заголовок";
//       document.getElementById("titleText").innerHTML = innerText;
//       return false;
//   }
//   if(pass == "") {
//       innerText = "введи опис";
//       document.getElementById("passText").innerHTML = innerText;
//       return false;
//   }

//   if(priceForMe == "") {
//     innerText = "введи ціну";
//     document.getElementById("priceText").innerHTML = innerText;
//     if (typeof(priceForMe) === "number") {
//       innerText = "ok";
//     } else {
//       innerText = "error";
//     }
//     return false;
// }

//   alert("Дані збережено та відправлено на сервер!")

//   return true;
// }

function validateForm() {

  var titleForMe = document.getElementById("title").value;
  var pass = document.getElementById("password").value;
  var priceForMe = document.getElementById("price").value;
  var text = document.getElementById('titleText');

  if (!titleForMe && !pass && !priceForMe) {
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  } else if (!pass && !priceForMe) {
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  } else if (!titleForMe && !priceForMe){
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  } else if (!titleForMe && !pass){
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    return false;
  } else if (!titleForMe){
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    return false;
  } else if (!pass){
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    return false;
  } else if (!priceForMe){
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  }

  // if (typeof(priceForMe) === 'Number'){
  //   return true;
  // } else {
  //   innerText = "Введіть числове значення."
  //   document.getElementById("priceText").innerHTML = innerText;
  //   return false;
  // }

  alert("Дані збережено та відправлено на сервер!")

  return true;
}