import { elements } from './base';

export const renderForm = () => {
    const form = `
        <div class="main__form"> 
            <input class="main__past" type="text" placeholder="the 2nd form(example: saw)"/>
            <label>Past</label>
            </div>
                <div class="main__form">
                <input class="main__pastParticiple" type="text" placeholder="the 3th form(example: seen)"/>
                <label>Past participle</label>
            </div>
            <div class="main__btn-container">
            <button class="btn btn--check">Check</button>
            <button class="btn btn--next">Next</button>
            <button class="btn btn--skip">Skip</button>
        </div> 
    `;

    elements.mainContainer.insertAdjacentHTML('afterbegin', form);
};