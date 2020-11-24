// save clocks array in DOM from LocalStorage after hard refresh
let j = 0;

function onloadWatchArray() {
  const dataOnload = localStorage.getItem('clocks');
  const parsedData = JSON.parse(dataOnload);
  const list = document.querySelector("#newWatch");
  if (!parsedData) {
    return;
  }
  for (let i = 0; i < parsedData.length; i++) {
    const newWatchWrapper = document.createElement('div');
    newWatchWrapper.className = 'watch-wrapper';
    // console.log(newWatchWrapper)

    const newWatchMainHeader = document.createElement('div');
    newWatchMainHeader.className = 'watchBox-main--header';
    newWatchMainHeader.style.display = 'flex';
    newWatchMainHeader.style.justifyContent = 'space-between';
    newWatchWrapper.appendChild(newWatchMainHeader);

    const newWatchHeader = document.createElement('div');
    newWatchHeader.className = 'watch-header';
    newWatchWrapper.appendChild(newWatchHeader); 
    
    const closeButton = document.createElement('button');
    // closeButton.selectedIndex = j++;
    closeButton.id = 'closeBtn';
    closeButton.style.width = '25px';
    closeButton.style.height = '25px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.border = 'none';
    closeButton.style.backgroundImage = 'url(../img/promotion-delete.png)';
    closeButton.style.backgroundColor = 'transparent';
    newWatchWrapper.appendChild(closeButton);

    const newWatchTitle = document.createElement('div');
    newWatchTitle.className = 'watch-item';
    newWatchWrapper.appendChild(newWatchTitle);

    const newWatchDesciption = document.createElement('div');
    newWatchDesciption.className = 'watch-item'
    newWatchWrapper.appendChild(newWatchDesciption);

    const newWatchPrice = document.createElement('div');
    newWatchPrice.className = 'watch-item'
    newWatchWrapper.appendChild(newWatchPrice);

    const watchEdit = document.createElement('div');
    watchEdit.className = 'watch-edit--div';
    watchEdit.style.display = 'flex';
    watchEdit.style.justifyContent = 'flex-end'
    newWatchWrapper.appendChild(watchEdit);

    const editButton = document.createElement('button');
    editButton.id = 'editButton';
    editButton.style.width = '25px';
    editButton.style.height = '25px';
    editButton.style.cursor = 'pointer';
    editButton.style.border = 'none';
    editButton.style.backgroundImage = 'url(../img/promotion-edit.png)';
    editButton.style.backgroundColor = 'transparent'

    newWatchHeader.textContent = 'Watch';
    newWatchTitle.textContent = 'Title: ' + parsedData[i].title
    newWatchDesciption.textContent = 'Description: ' + parsedData[i].description;
    newWatchPrice.textContent = 'Price: ' + parsedData[i].price;

    newWatchMainHeader.appendChild(newWatchHeader);
    newWatchMainHeader.appendChild(closeButton);
    watchEdit.appendChild(editButton);
    list.appendChild(newWatchWrapper);

    // closeButton.onclick = () => {
    //   newWatchWrapper.style.display = 'none';
    //   const stringifyData = JSON.stringify(parsedData);
    //   console.log(stringifyData)
    //   localStorage.removeItem(stringifyData)      
    // }
    parsedData[i];
    console.log(parsedData[i]);

  }
}
window.onload = onloadWatchArray;




const arr = [];
let k = 0;


function validateForm() {
  const titleForMe = document.getElementById("title").value;
  const descriptionForMe = document.getElementById("description").value;
  const priceForMe = document.getElementById("price").value;
  validForm = true;
  firstError = null;
  errorString = "";
  const formElemets = document.forms[0].elements;
  for (let i = 0; i < formElemets.length; i++) {
    if (!formElemets[i].value)
      writeError(formElemets[i], "This field is required");
  }
  console.log(k)
  const newWatch = {
    id: k++,
    title: titleForMe,
    description: descriptionForMe,
    price: priceForMe,
  };
  console.log(newWatch)

  if (titleForMe && descriptionForMe && priceForMe) {
    buildWatchArray(newWatch);
    saveArrayToStorage();
  }
}


function writeError(obj, message) {
  validForm = false;
  if (obj.hasError) return;
  obj.className += " error";
  obj.onchange = removeError;
  let errorSpan = document.createElement("span");
  errorSpan.className = "error";
  errorSpan.appendChild(document.createTextNode(message));
  obj.parentNode.appendChild(errorSpan);
  obj.hasError = errorSpan;
  if (!firstError) firstError = obj;
}

function removeError() {
  this.className = this.className.substring(0, this.className.lastIndexOf(" "));
  this.parentNode.removeChild(this.hasError);
  this.hasError = null;
  this.onchange = null;
}

function buildWatchArray(newWatch) {
  if (arr.length > 10) {
    alert('Limit of watches is exceeded!');
    return;
  }
  arr.push(newWatch);
  
  const list = document.querySelector('#newWatch');

  const newWatchWrapper = document.createElement('div');
  newWatchWrapper.className = 'watch-wrapper';

  const newWatchMainHeader = document.createElement('div');
  newWatchMainHeader.className = 'watchBox-main--header';
  newWatchMainHeader.style.display = 'flex';
  newWatchMainHeader.style.justifyContent = 'space-between';
  newWatchWrapper.appendChild(newWatchMainHeader);

  const newWatchHeader = document.createElement('div');
  newWatchHeader.className = 'watch-header';
  newWatchWrapper.appendChild(newWatchHeader);

  const closeButton = document.createElement('button');
  closeButton.id = 'closeBtn';
  closeButton.style.width = '25px';
  closeButton.style.height = '25px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.border = 'none';
  closeButton.style.backgroundImage = 'url(../img/promotion-delete.png)';
  closeButton.style.backgroundColor = 'transparent'
  newWatchWrapper.appendChild(closeButton);

  const newWatchTitle = document.createElement('div');
  newWatchTitle.className = 'watch-item';
  newWatchWrapper.appendChild(newWatchTitle);

  const newWatchDesciption = document.createElement('div');
  newWatchDesciption.className = 'watch-item'
  newWatchWrapper.appendChild(newWatchDesciption);

  const newWatchPrice = document.createElement('div');
  newWatchPrice.className = 'watch-item'
  newWatchWrapper.appendChild(newWatchPrice);

  const watchEdit = document.createElement('div');
  watchEdit.className = 'watch-edit--div';
  watchEdit.style.display = 'flex';
  watchEdit.style.justifyContent = 'flex-end'
  newWatchWrapper.appendChild(watchEdit);

  const editButton = document.createElement('button');
  // editButton.selectedIndex = j++;
  editButton.id = 'editButton';
  editButton.style.width = '25px';
  editButton.style.height = '25px';
  editButton.style.cursor = 'pointer';
  editButton.style.border = 'none';
  editButton.style.backgroundImage = 'url(../img/promotion-edit.png)';
  editButton.style.backgroundColor = 'transparent'

  newWatchHeader.textContent = 'Watch';
  newWatchTitle.textContent = 'Title: ' + newWatch.title;
  newWatchDesciption.textContent = 'Description: ' + newWatch.description;
  newWatchPrice.textContent = 'Price: ' + newWatch.price;


  newWatchMainHeader.appendChild(newWatchHeader);
  newWatchMainHeader.appendChild(closeButton);
  watchEdit.appendChild(editButton);
  list.appendChild(newWatchWrapper);

}


function saveArrayToStorage() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let price = document.getElementById('price').value;

  if (localStorage.getItem('clocks') == null) {
    localStorage.setItem('clocks', '[]');
  }

  let data = JSON.parse(localStorage.getItem('clocks'));
  data.push({
    title,
    description,
    price
  });

  localStorage.setItem('clocks', JSON.stringify(data));
}