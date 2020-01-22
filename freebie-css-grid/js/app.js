var burgerBox = document.querySelector('.header__burger');
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-mobile');

burgerBox.addEventListener('click', function() {
    nav.classList.toggle('nav-mobile__active');
    burger.classList.toggle('burger-close');
});

