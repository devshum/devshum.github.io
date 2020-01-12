var text = [
    'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',

    'Unde distinctio perferendis ad, officiis amet minima earum tenetur id aliquid quo optio laudantium natus, nostrum nemo, sequi expedita!',

    'Laboriosam dicta assumenda amet itaque exercitationem quidem! Voluptates obcaecati soluta sunt id voluptas debitis eveniet animi libero distinctio consectetur.'
];

var btn = document.getElementById('pop-up-btn');
var paragraph = document.getElementById('pop-up-paragraph');
var counter = 1;

btn.addEventListener('click', function() {
    if (counter === 3) {
        counter = 0;
    }

    paragraph.textContent = text[counter];
    counter = counter + 1;
});

// ANIMATIONS ON SCROLL JQUERY WP
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-6').waypoint(function(direction) {
    $('.js--wp-6').addClass('animated fadeIn');
}, {
    offset: '50%'
});

$('.js--wp-7').waypoint(function(direction) {
    $('.js--wp-7').addClass('animated fadeIn');
}, {
    offset: '50%'
});

      

