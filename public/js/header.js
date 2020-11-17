let menuBtn = document.getElementById('buttonMenu');
let main = document.getElementById('headerMain');
let menu = document.getElementById('mainMenu');
let basket = document.getElementById('basketButton');
let button = document.getElementById('menuBtn');
let menuHome = document.getElementById('menuHome');
let menuAbout = document.getElementById('menuAbout');
let menuShop = document.getElementById('menuShop');
let menuContact = document.getElementById('menuContact');
let hidden = false;
button.onclick = () => {
    if (hidden) {
        menu.style.display = 'none';
        basket.style.display = 'none'
        hidden = false;
    } else {
        menu.style.display = 'block';
        menu.style.height = '100vh'
        menu.style.padding = '0px'
        menu.style.marginTop = '20px'
        main.style.height = '100%'
        menuBtn.style.alignSelf = 'flex-start';
        button.style.marginTop = '20px';
        button.style.marginBottom = '20px';
        menuHome.style.fontSize = '25px';
        menuHome.style.letterSpacing = '10px'
        menuAbout.style.fontSize = '25px';
        menuAbout.style.letterSpacing = '10px'
        menuShop.style.fontSize = '25px';
        menuShop.style.letterSpacing = '10px'
        menuContact.style.fontSize = '25px';
        menuContact.style.letterSpacing = '10px'
        hidden = true;
    }
}
