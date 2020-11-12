const arr = [];
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

  const newWatch = {
    title: titleForMe,
    description: descriptionForMe,
    price: priceForMe,
  };
  buildWatchArray(newWatch);
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
  const list = document.querySelector("#newWatch");
    const newWatchWrapper = document.createElement("div");
    newWatchWrapper.className = 'watch-wrapper';
    const newWatchHeader = document.createElement("div");
    newWatchHeader.className = 'watch-header';
    newWatchWrapper.appendChild(newWatchHeader);
    const newWatchTitle = document.createElement("div");
    newWatchTitle.className = 'watch-item';
    newWatchWrapper.appendChild(newWatchTitle);
    const newWatchDesciption = document.createElement("div");
    newWatchDesciption.className = 'watch-item'
    newWatchWrapper.appendChild(newWatchDesciption);
    const newWatchPrice = document.createElement("div");
    newWatchPrice.className = 'watch-item'
    newWatchWrapper.appendChild(newWatchPrice);

    newWatchHeader.textContent = 'Watch';
    newWatchTitle.textContent = 'Title: ' + newWatch.title;
    newWatchDesciption.textContent = 'Description: ' + newWatch.description;
    newWatchPrice.textContent = 'Price: ' + newWatch.price;

    list.appendChild(newWatchWrapper);
}