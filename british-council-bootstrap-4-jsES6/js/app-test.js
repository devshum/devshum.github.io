let fullChosenItemID;
let halfChosenItemID;

let chosenItemValue;
const allItemsArr = [];

let allItems = Array.from(document.querySelectorAll('.js-item'));
const allCells = Array.from(document.querySelectorAll('.js-cell'));

const allItemsContainer = document.querySelector('.js-items-container');
const allInputsContainer = document.querySelector('.js-inputs-container');

const btnFinish = document.querySelector('.btn--finish');
const btnOK = document.querySelector('.js-ok-btn');
const remainLabel = document.querySelector('.js-label');

const modalFooter = document.querySelector('.modal-footer');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');


const elementsContainer = document.getElementById('collapsePreparation');


allItemsContainer.addEventListener('click', e => {
    
    allItems.forEach(el => el.classList.remove('js-item-active'));
    allCells.forEach(el => el.classList.add('js-cell-active'));

    const item = e.target.closest('.js-item');

    if (item) {
        allItems.forEach(el => el.classList.remove('js-item-active'));
        item.classList.add('js-item-active');

        fullChosenItemID = item.id;
        halfChosenItemID = fullChosenItemID.split('-');
        halfChosenItemID = halfChosenItemID[1];
        chosenItemValue = item.textContent;
        console.log(halfChosenItemID);
        console.log(chosenItemValue);

    } else {
        allItems.forEach(el => el.classList.remove('js-item-active'));
        allCells.forEach(el => el.classList.remove('js-cell-active'));
    };
});

allInputsContainer.addEventListener('click', e => {
    const cell = e.target.closest('.js-cell');

    if(cell && halfChosenItemID && chosenItemValue) {
        const chosen = e.target.closest('.js-putted');
        const chosenElement = document.getElementById(fullChosenItemID);
        chosenElement.parentElement.removeChild(chosenElement);

        cell.innerHTML = '';

        const markup = `
            <button class="btn rounded-0 js-putted" type="button" id="chosen-${halfChosenItemID}">
             <span>${chosenItemValue}</span>
             <i class="far fa-hand-point-down"></i>
            </button>
        `;

        cell.insertAdjacentHTML('beforeend', markup);
        allItemsArr.push(halfChosenItemID);
        allItemsArr.length !== 0 ? btnFinish.disabled = false :  btnFinish.disabled = true;
        remainLabel.textContent = allCells.length - allItemsArr.length;
        console.log(allItemsArr);

        btnFinish.addEventListener('click', () => {
            const allPuttedItems = [];
            const correctIDs = ['chosen-3', 'chosen-0', 'chosen-4', 'chosen-5', 'chosen-2', 'chosen-1'];
            const answeredCorrectly = [];
            
            for(let i = 0; i < allCells.length; i++) {
                if(allCells[i].firstElementChild) {
                  let ID = allCells[i].firstElementChild.id;

                  allPuttedItems.push(ID);
                  console.log(allPuttedItems);
                }
            }

            allPuttedItems.forEach((el, i) => {
                if(allPuttedItems.length === allCells.length) {
                    if(el === correctIDs[i]) {
                        document.getElementById(correctIDs[i]).style.backgroundColor = 'green';
                        answeredCorrectly.push(correctIDs[i]);  
                    } else {
                        document.getElementById(correctIDs[i]).style.backgroundColor = 'red';  
                     }
                } else if(allPuttedItems.length < allCells.length) {
                    btnOK.addEventListener('click', () => {
                        if(el === correctIDs[i]) {
                            document.getElementById(correctIDs[i]).style.backgroundColor = 'green';
                            answeredCorrectly.push(correctIDs[i]);
                            btnOK.style.display = 'none';
                        } else {
                            document.getElementById(correctIDs[i]).style.backgroundColor = 'initial'
                        }

                        modalBody.innerHTML =`Total score is ${answeredCorrectly.length} out of ${allCells.length} (${Math.round((answeredCorrectly.length / allCells.length) * 100)}%)`;
                    });
                }
            });
            

            if(allItemsArr.length < allCells.length) {
               
                modalBody.innerHTML = `Answered questions: ${allItemsArr.length} out of ${allCells.length}. Do you want to finish?`

                
            } else {
                modalFooter.style.display = 'none';
                modalTitle.textContent = 'Feedback';
                modalBody.innerHTML =`Total score is ${answeredCorrectly.length} out of ${allCells.length} (${Math.round((answeredCorrectly.length / allCells.length) * 100)}%)`;

                
            };
        });

        chosenItemID = '';
        fullChosenItemID = '';
        halfChosenItemID = '';
        allCells.forEach(el => el.classList.remove('js-cell-active'));

        if(chosen) {
            let anotherChosenItemID = chosen.id;
            anotherChosenItemID = anotherChosenItemID.replace('chosen', 'item');

            halfAnotherChosenItemID = anotherChosenItemID.split('-');
            halfAnotherChosenItemID = halfAnotherChosenItemID[1];

            const index = allItemsArr.findIndex(el => el === halfAnotherChosenItemID);
            allItemsArr.splice(index, 1);
            allItemsArr.length !== 0 ? btnFinish.disabled = false :  btnFinish.disabled = true;
            console.log(allItemsArr);
            remainLabel.textContent = allCells.length - allItemsArr.length;
            allItems = Array.from(document.querySelectorAll('.js-item'));
           

            const markup = `
                <div class="btn-group-choice mr-2 js-item" id="${anotherChosenItemID}">
                    <button class="btn rounded-0" type="button"><span>${chosen.textContent}</span>
                    <i class="far fa-hand-point-down"></i>
                    </button>
                </div>
            `;

            allItemsContainer.insertAdjacentHTML('beforeend', markup);
        }

    } else {
        const chosen = e.target.closest('.js-putted');
        let markup;
        let chosenElement
        let chosenItemValue;
        let chosenItemID;
     

        if(chosen) {
            chosenElement = document.getElementById(chosen.id);
            chosenItemValue = chosenElement.textContent;
            chosenItemID = chosenElement.id;
            halfChosenID = chosenItemID.split('-');
            halfChosenID = halfChosenID[1];
            chosenItemID = chosenItemID.replace('chosen', 'item');
            chosenElement.parentElement.removeChild(chosenElement);

            console.log(halfChosenID);
        

            const index = allItemsArr.findIndex(el => el === halfChosenID);
            allItemsArr.splice(index, 1);
            allItemsArr.length !== 0 ? btnFinish.disabled = false :  btnFinish.disabled = true;

            console.log(allItemsArr)
            remainLabel.textContent = allCells.length - allItemsArr.length;
            
    
            markup = `
                <div class="btn-group-choice mr-2 js-item" id="${chosenItemID}">
                    <button class="btn rounded-0" type="button"><span>${chosenItemValue}</span>
                    <i class="far fa-hand-point-down"></i>
                    </button>
                </div>
            `;

            allItemsContainer.insertAdjacentHTML('beforeend', markup);
            allItems = Array.from(document.querySelectorAll('.js-item'));
        }
    };
});



