import { elements } from './views/base';
import * as viewCtrl from './views/viewCtrl';

const data = {
    health: [100, 100],  
    activePlayer: 0,
    gamePlaying: true
};

const fireCtrl = () => {
    let shot = Math.floor(Math.random() * 6 + 1);

    viewCtrl.hideFire();
    viewCtrl.showRotate();
    viewCtrl.removeRotateAnimation();
    viewCtrl.showBullet(shot);

    if (shot === 1) {
        let injury = Math.floor(Math.random() * (40 - 35) + 35);

        data.health[data.activePlayer] -= injury;
        viewCtrl.injuredEmoji(data.activePlayer);
        viewCtrl.updateHP(data.activePlayer, data.health[data.activePlayer]);
        viewCtrl.addHurtAnimation(data.activePlayer);
        viewCtrl.updateHPColor(data.activePlayer);

    } else viewCtrl.happyEmoji(data.activePlayer);

    if (data.health[data.activePlayer] <= 0) {
        viewCtrl.updateFinalEmojies(data.activePlayer);
        viewCtrl.updatePlayersLabel(data.activePlayer);
        viewCtrl.removeAllPannels();
        viewCtrl.callToAction();
        document.getElementById(`hp-${data.activePlayer}`).textContent = 0;
        data.gamePlaying = false;
    };
};

const rotateCtrl = () => {
    if (data.gamePlaying) {
        viewCtrl.hideRotate();
        viewCtrl.showFire();
        viewCtrl.updateEmojies(data.activePlayer);
        viewCtrl.cylinderEmptyLook();
        viewCtrl.addRotateAnimation();
        viewCtrl.removeHurtAnimation(data.activePlayer);
        data.activePlayer === 0 ? data.activePlayer = 1 : data.activePlayer = 0;
        viewCtrl.displayActive(data.activePlayer);
    };
};

const newCtrl = () => {
    data.health[0] = 100;
    data.health[1] = 100;
    data.activePlayer = 0;
    data.gamePlaying = true;
    viewCtrl.hideRotate();
    viewCtrl.showFire();
    viewCtrl.init(data.activePlayer);
};

elements.btnFireDOM.addEventListener('click', fireCtrl);

elements.btnRotateDOM.addEventListener('click', rotateCtrl);

elements.btnNewDOM.addEventListener('click', newCtrl);

window.addEventListener('load', () => viewCtrl.hideRotate());

