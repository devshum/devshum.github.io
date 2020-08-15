import { elements } from './base';

export const renderVerb = verb => {
    let past = verb[0].past;
    let pastParticiple = verb[0].pastParticiple;

    // Only 1 variant
    if (past.includes('/')) {
        const pastSplit = past.split('/');
        past = pastSplit[0];
    };

    // Only 1 variant
    if (pastParticiple.includes('/')) {
        const pastParticipleSplit = past.split('/');
        pastParticiple = pastParticipleSplit[0];
    };

    const verbSearch = `
        <li class="search__verb">
            <div class="search__infinitive">${verb[0].infinitive}</div>
            <div class="search__past"><span>Past:</span>${past}</div>
            <div class="search__past-participle"><span>Past participle: </span>${pastParticiple}</div>
        </li>
    `;

    elements.searchList.insertAdjacentHTML('afterbegin', verbSearch);
};

export const clearList = () => {
    document.querySelector('.search__list').innerHTML = '';
};