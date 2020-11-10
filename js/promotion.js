
const arr = [];

function validateForm() {

  var titleForMe = document.getElementById("title").value;
  var descriptionForMe = document.getElementById("description").value;
  var priceForMe = document.getElementById("price").value;
  var text = document.getElementById('titleText');

  if (!titleForMe && !descriptionForMe && !priceForMe) {
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  } else if (!descriptionForMe && !priceForMe) {
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
  } else if (!titleForMe && !descriptionForMe){
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    return false;
  } else if (!titleForMe){
    innerText = "введи заголовок";
    document.getElementById("titleText").innerHTML = innerText;
    return false;
  } else if (!descriptionForMe){
    innerText = "введи опис";
    document.getElementById("passText").innerHTML = innerText;
    return false;
  } else if (!priceForMe){
    innerText = "введи ціну";
    document.getElementById("priceText").innerHTML = innerText;
    return false;
  }
  alert("Дані збережено та відправлено на сервер!")

  const newWatch = {
    title: titleForMe,
    description: descriptionForMe,
    price: priceForMe
  }

  arr.push(newWatch);
  const list = document.querySelector('#newWatch');
  for (let i = 0; i < arr.length; i++) {
    const newElement = document.createElement('div');
    newElement.textContent = arr[i].title;
    // newElement.textContent = arr[i].description;
    // newElement.textContent = arr[i].price;
    list.appendChild(newElement);
  }
  return true;
}
console.log(arr);
  





