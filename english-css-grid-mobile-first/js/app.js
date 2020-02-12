var navMob;
var navHide;
var burger;
var burgerList;

navMob = document.querySelector('.header__nav-mob');
navHide = document.querySelector('.header__nav-hide');
burger = document.querySelector('.burger');
burgerList = document.querySelector('.burger__list');

navMob.addEventListener('click', function() {
    navHide.classList.toggle('active');
});

burger.addEventListener('click', function() {
    burgerList.classList.toggle('burger__active');
});