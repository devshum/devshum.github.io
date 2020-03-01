const navMob = document.querySelector('.header__nav-btn');
const navHide = document.querySelector('.header__nav-hide');
const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger__list');

navMob.addEventListener('click', () => navHide.classList.toggle('active'));

burger.addEventListener('click', () => burgerList.classList.toggle('burger__active'));