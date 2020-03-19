import { elements } from './base';

let count = [0, 0, 0];

export const renderAmount = (ID, questionsLength) => {
    [elements.introQuestionLabel, elements.footerLabel].forEach(el => {
        el.textContent = `${questionsLength} questions`;
        el.textContent = `Question ${ID} of ${questionsLength}`;
    }); 
}

export const startQuiz = () => {
    elements.introContainer.textContent = '';
    
    [elements.footer, elements.mainContainer].forEach(el => {
        el.style.display = 'flex';
        el.style.display = 'flex';
    });
};

export const restartQuiz = () => {
    elements.body.style.justifyContent = 'center';
    elements.footer.style.position = 'absolute';
    elements.footerLabel.textContent = `The quize powered by ES6`;

    [elements.header, elements.resultsContainer, elements.btnRetry].forEach(el => {
        el.style.display = 'none';
        el.style.display = 'none';
        el.style.display = 'none';
    }); 

    [elements.mainContainer, elements.btnSkip, elements.btnCheck].forEach(el => {
        el.style.display = 'flex';
        el.style.display = 'flex';
        el.style.display = 'flex';
    }); 

    [elements.resultsContainer, elements.mainContainer].forEach(el => {
        el.innerHTML = '';
        el.innerHTML = '';
    }); 
};

export const prepareUI = () => {
    elements.mainContainer.innerHTML = '';
    elements.btnNext.style.display = 'none';
    elements.btnCheck.style.display = 'inline-block';
};

const resetCount = () => {
    count = [0, 0, 0];
}

const createAnswers = answer => 
    `
        <label class="quiz-group__box mb-10px" for="${count[0]++}">
            <input type="radio" id="${count[1]++}" name="radio"/>
            <label for="${count[2]++}">${answer}
                <span>&nbsp;</span>
            </label>
        </label>
    `
;

export const addQuestionBlock = (question, length) => {
    resetCount();

    var markup = `
        <div class="container__check">
            <!-- components(check-label)-->
            <div class="correct mb-20px">
                <svg>
                    <use xlink:href="#correct"></use>
                </svg>
                <p>Good Job! ${question.tips[0]}</p>
            </div>
            <!-- components(check-label)-->
            <div class="wrong mb-20px">
                <svg>
                    <use xlink:href="#wrong"></use>
                </svg>
                <p>Incorrect answer</p>
            </div>
        </div>
        <div class="quiz-group">
            <div class="question">
                <p class="mb-10px">Question ${question.id} <span>of ${length}</span></p>
                <h2 class="mb-10px">${question.question}</h2>
                ${question.answers.map(el => createAnswers(el)).join('')}
            </div>
        </div>`;
    elements.mainContainer.insertAdjacentHTML('beforeend', markup);
};

const createResult = result => `
    <li>${result}</li>
`;

export const addSkipBlock = (result) => {
    const markup = `
        <ul> 
            <li class="container__result-label mb-10px">
                <svg>
                    <use xlink:href="#skip"></use>
                </svg>
                <h4>What you skipped</h4>
            </li>
            ${result.map(el => createResult(el)).join('')}
        </ul> `;
    document.querySelector('.container__results').insertAdjacentHTML('beforeend', markup);
};

export const addKnowBlock = (result) => {
    const markup = `
        <ul>
            <li class="container__result-label mb-10px">
                <svg>
                    <use xlink:href="#know"></use>
                </svg>
                <h4>What you know</h4>
                <svg>
                    <use xlink:href="#info"></use>
                </svg>
                <div class="container__result-info">These are questions you got right.</div>
            </li>
            ${result.map(el => createResult(el)).join('')}
        </ul>`;
        document.querySelector('.container__results').insertAdjacentHTML('afterbegin', markup);
};

export const addReviseBlock = (result) => {
    const markup = `
        <ul>
            <li class="container__result-label mb-10px">
                <svg>
                <use xlink:href="#revise"></use>
                </svg>
                <h4>What you should review</h4>
            </li>
            ${result.map(el => createResult(el)).join('')}
        </ul>
    `;
    elements.resultsContainer.insertAdjacentHTML('beforeend', markup);  
};

export const seeResult = (know, length, skip) => {
    elements.header.style.display = 'flex';
    elements.resultsContainer.style.display = 'block';
    elements.body.style.justifyContent = 'space-between';
    elements.footer.style.position = 'initial';
    elements.footerLabel.textContent = `The quize powered by ES6`;
    elements.finishSummaryLabel.textContent = `You got ${know} out of ${length} correct. ${skip} questions are skipped.`;
    elements.btnRetry.style.display = 'inline-block';

    [elements.mainContainer, elements.btnResult, elements.btnCheck, elements.btnLast].forEach(el => {
        el.style.display = 'none';
        el.style.display = 'none';
        el.style.display = 'none';
        el.style.display = 'none';
    }); 
}



