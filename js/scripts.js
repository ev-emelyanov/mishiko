var topMenu = document.querySelector('.main-nav__wrapper');

jsTopBtn.addEventListener('click', function (event) {
    this.classList.toggle('main-nav__toggler--close');
    this.classList.toggle('main-nav__toggler--open');
    topMenu.classList.toggle('hidden');
    // console.log('btn: ', this);
});