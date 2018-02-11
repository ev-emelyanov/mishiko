var topMenu = document.querySelector('.main-nav__wrapper');
var mainNav = document.querySelector('.main-nav');
mainNav.classList.remove('main-nav--nojs');
topMenu.classList.remove('main-nav__wrapper--opened');
topMenu.classList.add('main-nav__wrapper--closed');

jsTopBtn.addEventListener('click', function (event) {
    this.classList.toggle('main-nav__toggler--close');
    this.classList.toggle('main-nav__toggler--open');
    if (topMenu.classList.contains('main-nav__wrapper--opened')) {
        topMenu.classList.remove('main-nav__wrapper--opened');
        topMenu.classList.add('main-nav__wrapper--closed');
    } else {
        topMenu.classList.add('main-nav__wrapper--opened');
        topMenu.classList.remove('main-nav__wrapper--closed');
    }
    // console.log('btn: ', this);
});