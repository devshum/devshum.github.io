import { elements } from './base';

const renderVerb = verb => {
    let past = verb.past;
    let pastParticiple = verb.pastParticiple;

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

    const markup = `
        <li class="all-verbs__verb">
            <div class="all-verbs__infinitive">${verb.infinitive}</div>
            <div class="all-verbs__past"><span>Past:</span>${past}</div>
            <div class="all-verbs__past-participle"><span>Past participle:</span>${pastParticiple}</div>
        </li>
    `;

    elements.allVerbsList.insertAdjacentHTML('beforeend', markup);
};

export const renderAllVerbs = allVerbs => {
    allVerbs.forEach(renderVerb);
};

export const clearList = () => {
    document.querySelector('.all-verbs__list').innerHTML = '';
};