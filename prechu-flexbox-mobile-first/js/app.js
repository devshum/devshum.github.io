var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
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

