var burger = document.getElementById('burger');
var sidebar = document.getElementById('sidebar');
var exit = document.getElementById('exit');

burger.addEventListener('click', function(e) {
    sidebar.classList.toggle('sidebar__active');
    e.preventDefault();
});

