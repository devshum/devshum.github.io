const dataController = (function() {
    const state  = {
        pass: true,
        rootStrings: {},
        allItemsArr: [],
        allAnsweredArr: [],
        rightAnswersArr: ['a foe', 'a robot', 'an algorithm', 'artificial intelligence (AI)', 'autonomous', 'a drone'],
        allStartedArr: ['a robot', 'a drone', 'autonomous', 'a foe', 'an algorithm', 'artificial intelligence (AI)'],

        ///////////////////
        quizAnswers: [
            {
                answer: 'Which expert has a different view from the others regarding the timescale of AI becoming much more autonomous?'
            },

            {
                answer: 'Which expert has a similar view to A about the responsibility humans have for the future of AI?'
            },

            {
                answer: 'Which expert agrees with B that the negative aspects of AI far outweigh the positive aspects?'
            },

            {
                answer: 'Which expert seems to disagree with B about how fast humans can change?',
            },

            {
                answer: 'Which expert gives their opinion about what will happen with the same level of certainty as D?'
            },
        ],
    };

    const splitID = function(itemID) {
        let splitID = itemID.split('-');
        splitID = splitID[1];
        return splitID;
    };

    return {
        setValues: function(itemID, itemText) {
            state.rootStrings.itemID = itemID;
            state.rootStrings.itemText = itemText;
        },

        resetValues: function() {
            state.rootStrings.itemID = '';
            state.rootStrings.itemText = '';
        },

        getSetValues: function() { return state.rootStrings; },

        addItem: function(itemID) {
            if (itemID) {
                const returnedSplitID = splitID(itemID);
                state.allItemsArr.push(returnedSplitID);
            };
        },

        removeItem: function(itemID) {
            if(itemID) {
                const returnedSplitID = splitID(itemID);

                const index = state.allItemsArr.findIndex(el => el === returnedSplitID);
                state.allItemsArr.splice(index, 1);
            };
        },

        updateRemainLabel: function() {
            const DOMLabel = document.querySelector('.js-label');
            const DOMBtn = document.querySelector('.btn--finish');

            DOMLabel.textContent = 6 - state.allItemsArr.length;
            state.allItemsArr.length > 0 ? DOMBtn.disabled = false : DOMBtn.disabled = true;
        },

        getRightAnswers: function() {
            return state.rightAnswersArr;
        },

        sortAnswers: function(allAnswered) {
            allAnswered.forEach(el => {
                if(el) state.allAnsweredArr.push(el);
            });
        },

        getSortAnswers: function() {
            return state.allAnsweredArr;
        },

        getStartedValues: function() {
            return state.allStartedArr;
        },

        clearSortAnswers: function() {
            state.allAnsweredArr = [];
        },

        getPass: function() {
            return state.pass;
        },

        passFalse: function() {
            state.pass = false;
        },

        restartState: function() {
            state.pass = true;
            state.allItemsArr = [];
        },

        getQuizAnswers: function() {
            return state.quizAnswers;
        }
    };
})();

const UIController = (function() {
    const DOMStrings = {
        remainLabel: '.js-label',
        item: '.js-item',
        itemsContainer: '.js-items-container',
        inputsContainer: '.js-inputs-container',
        cell: '.js-cell',
        btnFinish: '.btn--finish',
        btnCancel: '.btn--cancel',
        btnOK: '.btn--ok',
        btnAgain: '.btn--again',
        btnFeedback: '.btn--show-feedback',
        btnShowAnswers: '.btn--show-answers',
        btnHideAnswers: '.btn--hide-answers',
        btnShowFeedback: '.btn--show-feedback',
        modalBody: '.modal-body',
        modalFooter: '.modal-footer',
        backdrop: '.modal',
        btnFinishHide: '.btn-finish-hide',

        ///////
        quizGroup: '.quiz-group',
        swipePanel: '.swipe-panel'
    };

    const newCells = Array.from(document.querySelectorAll(DOMStrings.cell));

    const renderAnswer = function(answer) {
        const answerBlock = `
            <p class="px-4">${answer.answer}</p>
            
            <form action="#">
                <label class="input-group" for="0">
                    <input type="radio" id="0" name="input"/>
                    <label for="0">&nbsp;</label><span class="ml-2">Expert A</span>
                </label>
                <label class="input-group" for="1">
                    <input type="radio" id="1" name="input"/>
                    <label for="1">&nbsp;</label><span class="ml-2">Expert B</span>
                </label>
                <label class="input-group" for="2">
                    <input type="radio" id="2" name="input"/>
                    <label for="2">&nbsp;</label><span class="ml-2">Expert C</span>
                </label>
                <label class="input-group" for="3">
                    <input type="radio" id="3" name="input"/>
                    <label for="3">&nbsp;</label><span class="ml-2">Expert D</span>
                </label>
            </form>
        `;

        document.querySelector(DOMStrings.quizGroup).insertAdjacentHTML('afterbegin', answerBlock);
    };

    return {
        getDOMStrings: function() {
            return DOMStrings;
        },

        removeActiveItemsClass: function() {
            const newItems = Array.from(document.querySelectorAll(DOMStrings.item));
            newItems.forEach(el => el.classList.remove('js-item-active'));
        },

        renderItem: function(itemID, itemText) {
            const container = document.querySelector(DOMStrings.itemsContainer);

            if(itemID) {
                const markup = `
                    <div id="${itemID.replace('chosen', 'item')}" class="m-1 btn-group-choice js-item">
                        <button class="btn rounded-0" type="button">
                            <span>${itemText}</span>
                        </button>
                        <i class="far fa-hand-point-down"></i>
                    </div>
                `;

                container.insertAdjacentHTML('beforeend', markup);
            }
        },

        renderAllItems: function(itemsArr) {
            const container = document.querySelector(DOMStrings.itemsContainer);
            container.innerHTML = '';

            itemsArr.forEach((el, i) => {
                const markup = `
                    <div id="item-${i}" class="m-1 btn-group-choice js-item">
                        <button class="btn rounded-0" type="button">
                            <span>${el}</span>
                        </button>
                        <i class="far fa-hand-point-down"></i>
                    </div>
                `;

                container.insertAdjacentHTML('beforeend', markup);
            });
        },

        renderRightItems: function(allCells, rightAnsw) {
             allCells.forEach((el, i) => {
                let markup = `
                    <div class="pl-3 btn-group-choice js-right-item">
                        <span>${rightAnsw[i]}</span>
                    </div>
                `;

                document.getElementById(el.id).insertAdjacentHTML('beforeend', markup);
            });

            document.querySelector(DOMStrings.btnShowAnswers).style.display = 'none';
            document.querySelector(DOMStrings.btnHideAnswers).style.display = 'block';
        },

        hideRightItems: function(allCells) {
            allCells.forEach(el => el.lastElementChild.style.display = 'none');

            document.querySelector(DOMStrings.btnShowAnswers).style.display = 'block';
            document.querySelector(DOMStrings.btnHideAnswers).style.display = 'none';
        },

        addActiveItemClass: function(itemID) {
            this.removeActiveItemsClass();
            document.getElementById(itemID).classList.add('js-item-active');
        },

        addActiveCellsClass: function() {
            newCells.forEach(el => el.classList.add('js-cell-active'));
        },

        removeActiveCellsClass: function() {
            newCells.forEach(el => el.classList.remove('js-cell-active'));
        },

        renderChosenItem: function(itemID, itemText, containerID) {
            const container = document.getElementById(containerID);

            if(itemID, itemText) {
                container.innerHTML = '';

                const markup = `
                    <div id="${itemID.replace('item', 'chosen')}" class="btn-group-choice js-chosen">
                        <button class="btn rounded-0" type="button">
                            <span>${itemText}</span>
                        </button>
                        <i class="far fa-hand-point-down"></i>
                    </div>
                `;

                container.insertAdjacentHTML('beforeend', markup);
            }
        },

        removeChosenItem: function(chosenItemID) {
            if(chosenItemID) {
                const chosenItem = document.getElementById(chosenItemID);
                chosenItem.parentElement.removeChild(chosenItem);
            };
        },

        getAllCells: function() {
            return newCells;
        },

        clearAllCells: function() {
            newCells.forEach(el => el.innerHTML = '');
        },

        renderModal: function(...args) {
            const num = args[0];
            const total = args[1];
            const modalBody = document.querySelector(DOMStrings.modalBody);
            const modalFooter = document.querySelector(DOMStrings.modalFooter);
            const btnAgain = document.querySelector(DOMStrings.btnAgain);
            const btnFinishHide = document.querySelector(DOMStrings.btnFinishHide);
            const btnFeedback = document.querySelector(DOMStrings.btnFeedback);
            const btnShowAnswers = document.querySelector(DOMStrings.btnShowAnswers);
            
            modalBody.textContent = `Total score is: ${num} out of ${total} (${Math.round((num / total) * 100)}%)`;
            [btnFinishHide, modalFooter].forEach(el => el.style.display = 'none');
            [btnFeedback, btnShowAnswers].forEach(el => el.style.display = 'block');
            btnAgain.disabled = false;
        },

        restartUI: function() {
            document.querySelector(DOMStrings.remainLabel).textContent = 6;
            document.querySelector(DOMStrings.btnShowAnswers).style.display = 'none';
            document.querySelector(DOMStrings.btnShowFeedback).style.display = 'none';
            document.querySelector(DOMStrings.btnFinishHide).style.display = 'block';
            document.querySelector(DOMStrings.modalFooter).style.display = 'flex';
            document.querySelector(DOMStrings.btnFinish).disabled = true;
            document.querySelector(DOMStrings.btnAgain).disabled = true;
            document.querySelector(DOMStrings.btnHideAnswers).style.display = 'none';
        },

        renderAskModal: function(numOfCorr, totalNum) {
            const modalBody = document.querySelector(DOMStrings.modalBody);

            modalBody.textContent = `Answered questions: ${numOfCorr} out of ${totalNum}. Do you want to finish?`;
        },

        checkAnswers: function(rightAnsw, sortAnsw) {
            let numOfCorrect = [];

            rightAnsw.forEach((el, i) => {
                if(sortAnsw[i]) {
                    if(el === sortAnsw[i].innerText) {
                        sortAnsw[i].style.backgroundColor = '#b7e9bf';
                        numOfCorrect.push(true);
                        sortAnsw[i].lastElementChild.className = 'fas fa-check';
                        sortAnsw[i].lastElementChild.style.color = '#086e18';
                        
                    } else {
                        sortAnsw[i].style.backgroundColor = '#fac8c1';
                        sortAnsw[i].lastElementChild.className = 'fas fa-times';
                        sortAnsw[i].lastElementChild.style.color = '#d80d0d';
                    };
                };
            });

            return numOfCorrect.length;
        },

        renderButton: function(page, type) { 
            return `
                <button class="btn mr-2" data-gotopage=${type === 'next' ? page + 1 : page - 1}>
                    <i class="fas fa-angle-${type === 'next' ? 'right' : 'left'}"></i>
                </button>
            `
        },

        renderButtons: function(page, numOfRes, resPerPage) {
            let button;
            const pages = numOfRes / resPerPage;

            if(page === 1) {
                // render next btn
                button = this.renderButton(page, 'next');
            } else if (page > 1 && page < pages) {
                // render prev and next btn
                button = `${this.renderButton(page, 'prev')}
                          ${this.renderButton(page, 'next')}`
            } else if (page === pages) {
                // render prev btn
                button = this.renderButton(page, 'prev');
            }

            document.querySelector(DOMStrings.swipePanel).insertAdjacentHTML('afterbegin', button);

        },

        renderQuizAnswers: function(answers, page = 1, resPerPage = 1) {
            const start = (page - 1) * resPerPage;
            const end = page * resPerPage;
            answers.slice(start, end).forEach(renderAnswer);

            this.renderButtons(page, answers.length, resPerPage);
        },

        prepareQuizButtons: function() {
            document.querySelector(DOMStrings.quizGroup).innerHTML = '';
            document.querySelector(DOMStrings.swipePanel).innerHTML = '';
        }
    };

})();

const controller = (function(dataCtrl, UICtrl) {
    const getValuesForCheck = function() {
        // get all the cells
        const allCells = UICtrl.getAllCells();

        // get all the answers
        const allAnswered = allCells.map(el => el.firstElementChild);

        // get right answers
        const rightAnswers = dataCtrl.getRightAnswers();

        // sort answers
        dataCtrl.sortAnswers(allAnswered);

        // get sort answers
        let sortedAnswers = dataCtrl.getSortAnswers();

        return [sortedAnswers, rightAnswers, allCells];
    };

    const pickItemCtrl = function(e) {
        // pick the item from the UI
        const item = e.target.closest('.js-item');
        // pick a pass value
        const passVal = dataCtrl.getPass();

        if(item && passVal) {
            // pick a text from the UI
            const itemText = e.target.closest('.js-item').textContent;

            // add an active class to the picked item
            UICtrl.addActiveItemClass(item.id, itemText);

            // add all active classes to the cells
            UICtrl.addActiveCellsClass();

            // set the values to the data controller
            dataCtrl.setValues(item.id, itemText);

        } else {
            // remove all active classes from the items
            UICtrl.removeActiveItemsClass();

            // remove all active classes from the cells
            UICtrl.removeActiveCellsClass();
        };
    };

    const setItemCtrl = function(e) {
        const setValues = dataCtrl.getSetValues();
        const containerID = e.target.closest('.js-cell');
        const chosenItem = e.target.closest('.js-chosen');
        const passVal = dataCtrl.getPass();
        
        if(containerID && setValues.itemID && passVal) UICtrl.removeChosenItem(setValues.itemID);

        if(containerID && passVal) {
            // render a chosen item to the chosen input
            UICtrl.renderChosenItem(setValues.itemID, setValues.itemText, containerID.id);

            // remove all active classes from the cells
            UICtrl.removeActiveCellsClass();

            if(chosenItem && setValues.itemID === '' && setValues.itemText === '' && passVal) {
                // remove an item from the UI
                UICtrl.removeChosenItem(chosenItem.id);

                // render an exist item 
                UICtrl.renderItem(chosenItem.id, chosenItem.textContent);

                // remove an item num ID from the data
                dataCtrl.removeItem(chosenItem.id);

                //////////////////////
                dataCtrl.updateRemainLabel();
            };

            if(chosenItem && setValues.itemID && setValues.itemText && passVal) {
                // delete a prev item num ID from the data
                dataCtrl.removeItem(setValues.itemID);

                //////////////////////
                dataCtrl.updateRemainLabel();

                // render a prev item 
                UICtrl.renderItem(chosenItem.id, chosenItem.textContent);
            };

            // add chosen item number id to the arr
            dataCtrl.addItem(setValues.itemID);

            //////////////////////
            dataCtrl.updateRemainLabel();

            // reset values from the data controller
            dataCtrl.resetValues();

            // remove all active classes from the items
            UICtrl.removeActiveItemsClass();
        };
    };

    const checkAnswersCtrl = function() {
        let values = getValuesForCheck();

        //check answers
        if(values[0].length < 6) {
            // update UI
            UICtrl.renderAskModal(values[0].length, values[2].length);

            document.querySelector('.btn--ok').addEventListener('click', () => {
                // update UI
                const numOfCorrect = UICtrl.checkAnswers(values[1], values[0]);
                UICtrl.renderModal(numOfCorrect, values[2].length);
    
                /////////////////
                dataCtrl.passFalse();
            });

        } else {
            // update UI
            const numOfCorrect = UICtrl.checkAnswers(values[1], values[0]);
            UICtrl.renderModal(numOfCorrect, values[2].length);

            ///////////////////
            dataCtrl.passFalse();
        };
    };

    const clearSortAnswersCtrl = function() {
        dataCtrl.clearSortAnswers();
    };

    const hideAnswersCtrl = function() {
        // get all the cells
        const values = getValuesForCheck();
        const allCells = values[2];

        UICtrl.hideRightItems(allCells);
    };

    const showAnswersCtrl = function() {
        // get all the cells and get all the right answers
        const values = getValuesForCheck();
        const allCells = values[2];
        const rightAnswers = values[1];

        // update UI
        UICtrl.renderRightItems(allCells, rightAnswers);
    };

    const restartCtrl = function() {
        // get all the started values
        const allStartedValues = dataCtrl.getStartedValues();
        // restart the state
        dataCtrl.restartState();
        // update UI
        UICtrl.renderAllItems(allStartedValues);
        // clear the cells
        UICtrl.clearAllCells();
        // restart UI
        UICtrl.restartUI();
    };

    const renderAnswersCtrl = function() {
        // get answers
        const answers = dataCtrl.getQuizAnswers();

        UICtrl.renderQuizAnswers(answers);
    };

    const setupEventListeners = function() {
        const DOMStrings = UICtrl.getDOMStrings();
        const DOMBackdrop = document.querySelector(DOMStrings.backdrop);
        const DOMBtnCancel = document.querySelector(DOMStrings.btnCancel);

        document.querySelector(DOMStrings.itemsContainer).addEventListener('click', pickItemCtrl);
        document.querySelector(DOMStrings.inputsContainer).addEventListener('click', setItemCtrl);

        document.querySelector(DOMStrings.btnHideAnswers).addEventListener('click', hideAnswersCtrl);
        document.querySelector(DOMStrings.btnShowAnswers).addEventListener('click', showAnswersCtrl);
        document.querySelector(DOMStrings.btnAgain).addEventListener('click', restartCtrl);

        document.querySelector(DOMStrings.btnFinish).addEventListener('click', checkAnswersCtrl);

        [DOMBackdrop, DOMBtnCancel].forEach(el => el.addEventListener('click', clearSortAnswersCtrl));

        /////////////

        document.addEventListener("DOMContentLoaded", renderAnswersCtrl);
        document.querySelector(DOMStrings.swipePanel).addEventListener('click', e => {
            e.preventDefault();
            const page = parseInt(e.target.closest('.btn').dataset.gotopage);

            if(page) {  
                const answers = dataCtrl.getQuizAnswers();

                UICtrl.prepareQuizButtons();

                UICtrl.renderQuizAnswers(answers, page);
            }
        });
    };

    return {
        init: function() {
            setupEventListeners();
            console.log('The app has been started');
        }
    };

})(dataController, UIController);

controller.init();