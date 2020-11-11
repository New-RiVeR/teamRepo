const arr = [];
function validateForm() {

  const titleForMe = document.getElementById("title").value;
  const descriptionForMe = document.getElementById("description").value;
  const priceForMe = document.getElementById("price").value;
  

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
  buildArray(newWatch);
}


function buildArray(newWatch) {
  arr.push(newWatch);
  const list = document.querySelector('#newWatch');
  for (let i = 0; i < arr.length; i++) {
    const newElement = document.createElement('div');
    const watchDescription = document.createElement('div');
    const price = document.createElement('div');

    newElement.textContent = newWatch.title;
    newElement.style.backgroundColor = 'wheat'
    newElement.style.marginLeft = '50px';
    newElement.style.width = '150px';
    
    watchDescription.textContent = newWatch.description;
    watchDescription.style.backgroundColor = 'wheat';
    watchDescription.style.marginLeft = '50px';
    watchDescription.style.width = '150px';

    price.textContent = newWatch.price;
    price.style.backgroundColor = 'wheat';
    price.style.marginLeft = '50px';
    price.style.width = '150px';


    // newWatch.style.margin = '50px';
    list.appendChild(newElement);
    list.appendChild(watchDescription);
    list.appendChild(price);
  }
}

  






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

