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

