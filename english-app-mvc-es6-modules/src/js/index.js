import axios from 'axios';
import AllVerbs from './models/AllVerbs';
import VerbSearch from './models/VerbSearch';
import RandomVerb from './models/RandomVerb';
import * as allVerbsView from './views/allVerbsView';
import * as verbSearchView from './views/verbSearchView';
import * as randomVerbView from './views/randomVerbView';
import { elements, loader, removeLoader } from './views/base';

const state = {};

// ALL VERBS LIST CONTROLLERS
const ctrlAllVerbs = async () => {
    // 1. Show backdrop
    elements.allVerbsBackdrop.style.display = 'block';
    // 2. Show the section
    elements.allVerbsSection.classList.add('active');
    // 3. Prepare UI
    loader(elements.allVerbsSection);
    // 4. Set the verbs
    state.allVerbs = new AllVerbs;
    // 5. Get the verbs
    await state.allVerbs.getVerbs();
    // 6. Render the verbs
    allVerbsView.renderAllVerbs(state.allVerbs.result.data);
    // 7. Remove loader
    removeLoader();
};

const ctrlRemoveAllVerbs = () => {
    // 1. Remove backdrop
    elements.allVerbsBackdrop.style.display = 'none';
    // 2. Remove the section
    elements.allVerbsSection.classList.remove('active');
    // 3. Clear the list
    allVerbsView.clearList();
};

elements.showAllBtn.addEventListener('click', ctrlAllVerbs);
elements.allVerbsBackdrop.addEventListener('click', ctrlRemoveAllVerbs);
elements.closeAllBtn.addEventListener('click', ctrlRemoveAllVerbs);
////////////////////////////////////////////////////////////////////////////

// SEARCH VERB CONTROLLERS
const ctrlSearch = async () => {
    // 1. Get value
    const value = elements.searchInput.value;
    if (value !== '') {
        // 2. Set a verb
        state.verbSearch = new VerbSearch();
        // 3. Clear list
        verbSearchView.clearList();
        // 4. Clear field
        elements.searchInput.value = '';
        // 5. Prepare UI
        loader(elements.searchList);
        // 6. Get a verb
        await state.verbSearch.getVerb(value);
        if (state.verbSearch.result) {
            // 7. Render the verb
            verbSearchView.renderVerb(state.verbSearch.result.data.data);
        };
        // 8. Prepare UI
        removeLoader();
    };
};

const showSearch = () => {
    // 1. Show backdrop
    elements.searchBackDrop.style.display = 'block';
    // 2. Show the section
    elements.searchSection.classList.add('active-search');
};

const removeSearch = () => {
    // 1. Show backdrop
    elements.searchBackDrop.style.display = 'none';
    // 2. Show the section
    elements.searchSection.classList.remove('active-search');
    // 3. Clear List
    elements.searchList.innerHTML = '';
};

elements.search.addEventListener('submit', e => {
    e.preventDefault();
    ctrlSearch();
});

elements.showSearch.addEventListener('click', showSearch);
elements.searchBackDrop.addEventListener('click', removeSearch);
////////////////////////////////////////////////////////////////////////////

// SHARE CONTROLLER
const ctrlCopyLink = () => {
    let dummyInput1 = elements.shareInputTop;
    let dummyInput2 = elements.shareInputBottom;
    dummyInput1.value = window.location.href;
    dummyInput2.value = window.location.href;
    dummyInput1.select();
    dummyInput2.select();
    dummyInput1.setSelectionRange(0, 99999); /*For mobile devices*/
    dummyInput2.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alert-backdrop').style.display = 'block';

    setTimeout(() => {
        elements.alertSection.style.display = 'none';
        elements.alertBackDrop.style.display = 'none';
    }, 1000);
};

elements.shareBtnTop.addEventListener('click', ctrlCopyLink);
elements.shareBtnBottom.addEventListener('click', ctrlCopyLink);
///////////////////////////////////////////////////////////////////////////

// CHECK CONTROLLER
const ctrlQuiz = () => {
    // 1. Get values
    const pastInput = document.querySelector('.main__past');
    const pastParticipleInput = document.querySelector('.main__pastParticiple');
    const checkBtn = document.querySelector('.btn--check');
    const nextBtn = document.querySelector('.btn--next');
    const skipBtn = document.querySelector('.btn--skip');

    // Only 1 variant
    if (state.randomVerb.result.past.includes('/')) {
        const pastSplit =  state.randomVerb.result.past.split('/');
        state.randomVerb.result.past = pastSplit[0];
    };

    // Only 1 variant
    if (state.randomVerb.result.pastParticiple.includes('/')) {
        const pastParticipleSplit = state.randomVerb.result.pastParticiple.split('/');
        state.randomVerb.result.pastParticiple = pastParticipleSplit[0];
    };  
    
    if (pastInput.value ===  state.randomVerb.result.past ) {
        pastInput.value = '';
        state.pastPass = true;
        state.randomVerb.result.past = '';
        pastInput.placeholder = 'correct!';
        pastInput.disabled = 'true';
        skipBtn.focus();
    } else {
        pastInput.value = '';
        pastInput.placeholder = 'wrong :(';
        skipBtn.focus();
    };

    if (pastParticipleInput.value === state.randomVerb.result.pastParticiple) {
        pastParticipleInput.value = '';
        state.pastParticiplePass = true;
        state.randomVerb.result.pastParticiple = '';
        pastParticipleInput.placeholder = 'correct';
        pastParticipleInput.disabled = 'true';
        skipBtn.focus();
    } else {
        pastParticipleInput.value = '';
        pastParticipleInput.placeholder = 'wrong :(';
        skipBtn.focus();
    };

    if (state.pastPass && state.pastParticiplePass) {
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'block';
        nextBtn.focus();
    };
};
///////////////////////////////////////////////////////////////////////////

// START CONTROLLER
const startQuiz = async () => {
    // 1. Update the state
    state.pastPass = false;
    state.pastParticiplePass = false;
    // 2. Prepare UI
    elements.infinitiveLabel.textContent = '...';
    let randomNum = Math.floor(Math.random() * 200);
    // 3. Hide the start button
    elements.mainContainer.innerHTML = '';
    // 4. Set current verb
    state.randomVerb = new RandomVerb(randomNum);
    // 5. Prepare UI
    loader(elements.mainContainer, 'loader--white');
    // 6. Get current verb
    await state.randomVerb.getRandomVerb();
    // 7. Update UI
    elements.infinitiveLabel.textContent = state.randomVerb.result.infinitive;
    randomVerbView.renderForm();
    // 8. Remove loader
    removeLoader();

    // Check
    document.querySelector('.btn--check').addEventListener('click', ctrlQuiz);
    document.querySelector('.btn--next').addEventListener('click', startQuiz);

    // Skip
    document.querySelector('.btn--skip').addEventListener('click', startQuiz);

    document.addEventListener('keypress', e => {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlQuiz();
        };
    });
};

// Start
elements.mainStartBtn.addEventListener('click', startQuiz);
///////////////////////////////////////////////////////////////////////////






