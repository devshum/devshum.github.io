var health, activePlayer, btnFireDOM, btnRotateDOM, btnNewDOM, cylinderDOM, gamePlaying;

btnFireDOM = document.querySelector('.btn-fire');
btnRotateDOM = document.querySelector('.btn-rotate');
btnNewDOM = document.querySelector('.btn-new');
cylinderDOM = document.getElementById('cylinder');

init();

btnFireDOM.addEventListener('click', function() {
    // Hide the fire btn
    btnFireDOM.style.display = 'none'

    // Show the rotate btn
    btnRotateDOM.style.display = 'block';

    // Remove a rotate animation
    cylinderDOM.classList.remove('rotation');

    // Random shot (1 - 6)
    var shot = Math.floor(Math.random() * 6 + 1);

    // Update the cylinder UI (bullet)
    cylinderDOM.src = 'img/cylinder/cylinder-' + shot + '.png';

    // Random injury (35hp - 40hp)
    var injury = Math.floor(Math.random() * (40 - 35) + 35);

    // Update the HP IF the shot was 1
    if (shot === 1) {
        // Remove HP
        health[activePlayer] -= injury;

        // Update UI
        document.getElementById('icon-' + activePlayer).src = 'img/player/icon-2.png';
        document.getElementById('hp-' + activePlayer).textContent = health[activePlayer];

        // Add an injury animation
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('fade');
    } else {
        document.getElementById('icon-' + activePlayer).src = 'img/player/icon-1.png';
    }

    // Update the color of a HP panel
    if (document.getElementById('hp-' + activePlayer).textContent < 70 && document.getElementById('hp-' + activePlayer).textContent >= 35) {
        document.getElementById('hp-' + activePlayer).style.background = '#ffc743';
    } else if (document.getElementById('hp-' + activePlayer).textContent < 35) {
        document.getElementById('hp-' + activePlayer).style.background = '#eb2c2f';
    }

    // Check IF player won the game
    if (health[activePlayer] <= 0) {
        // Update UI
        document.getElementById('hp-' + activePlayer).textContent = 0;
        document.getElementById('icon-0').src = 'img/player/icon-5.png';
        document.getElementById('icon-1').src = 'img/player/icon-5.png';
        document.getElementById('icon-' + activePlayer).src = 'img/player/icon-3.png';
        document.getElementById('name-0').textContent = 'Won';
        document.getElementById('name-1').textContent = 'Won';
        document.getElementById('name-' + activePlayer).textContent = 'Lost';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.getElementById('name-0').style.color = '#79dd8a';
        document.getElementById('name-1').style.color = '#79dd8a';
        document.getElementById('name-' + activePlayer).style.color = '#eb2c2f';

        // Stop tjhe game
        gamePlaying = false;

        // Add a call to action animation
        btnNewDOM.classList.add('flasher');

    } else { /* No statement */ }
});

btnRotateDOM.addEventListener('click', function() {
    if (gamePlaying) {
        // Hide the rotate btn
        btnRotateDOM.style.display = 'none';

        // Show the fire btn
        btnFireDOM.style.display = 'block';

        // Add a rotate animation
        cylinderDOM.classList.add('rotation');

        // Update the cylinder UI (an empty look)
        cylinderDOM.src = 'img/cylinder/cylinder-7.png';

        // Remove an injury animation
        document.querySelector('.player-0-panel').classList.remove('fade');
        document.querySelector('.player-1-panel').classList.remove('fade');

        // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // Update UI
        document.getElementById('icon-' + activePlayer).src = 'img/player/icon-4.png';
    }
});

btnNewDOM.addEventListener('click', init);

function init() {
    health = [100, 100];
    activePlayer = 0;
    gamePlaying = true;

    // Hide the rotate btn
    btnRotateDOM.style.display = 'none';

    // Hide the fire btn
    btnFireDOM.style.display = 'block';

    // Refresh the cylinder UI (an empty look)
    cylinderDOM.src = 'img/cylinder/cylinder-7.png';

    // Refresh the health panel UI
    document.getElementById('hp-0').textContent = health[0];
    document.getElementById('hp-1').textContent = health[1];

    // Refresh an active panel
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('icon-0').src = 'img/player/icon-4.png';

    // Refrest the second player
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('icon-1').src = 'img/player/icon-1.png';

    // Refresh player's names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Refresh player's color names
    document.getElementById('name-0').style.color = '#eb2c2f';
    document.getElementById('name-1').style.color = '#eb2c2f';

    // Refresh player's color panels
    document.getElementById('hp-0').style.background = '#79dd8a';
    document.getElementById('hp-1').style.background = '#79dd8a';

    // Remove a call to action animation
    btnNewDOM.classList.remove('flasher');
}
