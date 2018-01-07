var topMenu = document.querySelector('.main-nav__wrapper');
var mainNav = document.querySelector('.main-nav');
mainNav.classList.remove('main-nav--nojs');
topMenu.classList.remove('main-nav__wrapper--closed');
topMenu.classList.toggle('hidden');

jsTopBtn.addEventListener('click', function (event) {
    this.classList.toggle('main-nav__toggler--close');
    this.classList.toggle('main-nav__toggler--open');
    topMenu.classList.toggle('hidden');
    // console.log('btn: ', this);
});