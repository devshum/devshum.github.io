import { elements } from './base';

export const hideFire = () => elements.btnFireDOM.style.display = 'none';

export function hideFire() {
    return elements.btnFireDOM.style.display = 'none';
}

export const showFire = () => elements.btnFireDOM.style.display = 'block';

export const hideRotate = () => elements.btnRotateDOM.style.display = 'none';

export const showRotate = () => elements.btnRotateDOM.style.display = 'block';

export const addRotateAnimation = () => elements.cylinderDOM.classList.add('rotation');

export const removeRotateAnimation = () => elements.cylinderDOM.classList.remove('rotation');

export const cylinderEmptyLook = () => elements.cylinderDOM.src = `img/cylinder/cylinder-7.png`;

export const showBullet = randNum => elements.cylinderDOM.src = `img/cylinder/cylinder-${randNum}.png`;

export const injuredEmoji = activePlayer => document.getElementById(`icon-${activePlayer}`).src = 'img/player/icon-2.png';

export const happyEmoji = activePlayer => document.getElementById(`icon-${activePlayer}`).src = 'img/player/icon-1.png';

export const updateHP = (activePlayer, activePlayerHP) => document.getElementById(`hp-${activePlayer}`).textContent = activePlayerHP;

export const addHurtAnimation = activePlayer => document.querySelector(`.player-${activePlayer}-panel`).classList.add('fade');

export const removeHurtAnimation = activePlayer => document.querySelector(`.player-${activePlayer}-panel`).classList.remove('fade');

export const callToAction = () => elements.btnNewDOM.classList.add('flasher');

export const updateHPColor = (activePlayer) => {
    if (document.getElementById(`hp-${activePlayer}`).textContent < 70 && document.getElementById(`hp-${activePlayer}`).textContent >= 35) {
        document.getElementById(`hp-${activePlayer}`).style.background = '#ffc743';
        
    } else if (document.getElementById(`hp-${activePlayer}`).textContent < 35) {
        document.getElementById(`hp-${activePlayer}`).style.background = '#eb2c2f';
    }
};

export const updateEmojies = activePlayer => {
    elements.icon0.src = 'img/player/icon-4.png';
    elements.icon1.src = 'img/player/icon-4.png';
    document.getElementById(`icon-${activePlayer}`).src = 'img/player/icon-1.png';
};

export const updateFinalEmojies = activePlayer => {
    elements.icon0.src = 'img/player/icon-5.png';
    elements.icon1.src = 'img/player/icon-5.png';
    document.getElementById(`icon-${activePlayer}`).src = 'img/player/icon-3.png';
};

export const updatePlayersLabel = activePlayer => {
    elements.name0.textContent = 'Won';
    elements.name1.textContent = 'Won';
    document.getElementById('name-' + activePlayer).textContent = 'Lost';
    elements.name0.style.color = '#79dd8a';
    elements.name1.style.color = '#79dd8a';
    document.getElementById('name-' + activePlayer).style.color = '#eb2c2f';
};

export const displayActive = activePlayer => {
    elements.panel0.classList.toggle('active');
    elements.panel1.classList.toggle('active');
};

export const removeAllPannels = () => {
    elements.panel0.classList.remove('active');
    elements.panel1.classList.remove('active');
};

export const init = activePlayer => {
    elements.panel0.classList.remove('active');
    elements.panel1.classList.remove('active');
    elements.btnNewDOM.classList.remove('flasher');
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');

    elements.icon0.src = 'img/player/icon-1.png';
    elements.icon1.src = 'img/player/icon-1.png';
    document.getElementById(`icon-${activePlayer}`).src = 'img/player/icon-4.png';

    elements.name0.textContent = 'Player 1';
    elements.name1.textContent = 'Player 2';

    elements.hp0.textContent = 100;
    elements.hp1.textContent = 100;

    elements.hp0.style.background = '#79dd8a';
    elements.hp1.style.background = '#79dd8a';
    
    elements.name0.style.color = '#eb2c2f';
    elements.name1.style.color = '#eb2c2f';

    cylinderEmptyLook();
};






