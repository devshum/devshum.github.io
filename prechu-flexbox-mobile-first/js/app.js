const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('burger-close');
});

// Slick js
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
});

