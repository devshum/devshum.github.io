import * as dataCtrl from './models/dataController';
import * as UIctrl from './views/UIcontroller';
import { elements } from './views/base';

// STATE
const state = {
    allQuestions: [],
    result: {
        whatYouShouldRevise: [],
        whatYouSkipped: [],
        whatYouKnow: []
    }
};

// APP CONTROLLER
const appController = () => {
    let currentQuestion = 0;
    let result = state.result;

    // Create questions
    const allQuestions = dataCtrl.createQuestions();

    // Push the created questions in the current state
    allQuestions.forEach(el => state.allQuestions.push(el));
    const questions = state.allQuestions;

    // Start the quiz
    elements.btnStart.addEventListener('click', UIctrl.startQuiz);

    // Fill in the labels with dynamic amount of the questions
    UIctrl.renderAmount(questions[currentQuestion].id, questions.length);
    elements.footerLabel.textContent = `Question: ${questions[currentQuestion].id} of ${questions.length}`;

    // Render a block questions
    UIctrl.addQuestionBlock(questions[currentQuestion], questions.length);

    // Buttons logic 
    elements.body.addEventListener('click', e => {
        if (e.target.matches('.btn--skip')) {
            let selectedOption = document.querySelector('input[type=radio]:checked');

            if (!selectedOption) {
                // Update data
                dataCtrl.updateData(result.whatYouSkipped, questions[currentQuestion].question);
                currentQuestion++;

                // Prepare UI
                UIctrl.prepareUI();
                elements.footerLabel.textContent = `Question: ${questions[currentQuestion].id} of ${questions.length}`;

                // Render a new question block
                UIctrl.addQuestionBlock(questions[currentQuestion], questions.length);
                elements.btnCheck.classList.remove('active');

                if (currentQuestion === questions.length - 1) {
                    // Change buttons
                    elements.btnSkip.style.display = 'none';
                    elements.btnLast.style.display = 'flex';
                }
            }

        } else if (e.target.matches('.btn--check')) {
            let selectedOption = document.querySelector('input[type=radio]:checked');

            if (selectedOption) {
                const correct = state.allQuestions[currentQuestion].correct.toString();

                // Change buttons
                elements.btnCheck.style.display = 'none';
                elements.btnNext.style.display = 'flex';

                if (selectedOption.id === correct) {
                    // Update data
                    dataCtrl.updateData(result.whatYouKnow, questions[currentQuestion].question);

                    // Update UI
                    document.querySelector('.correct').style.display = 'flex';

                    if (currentQuestion === questions.length - 1) {
                        // Change buttons
                        elements.btnCheck.style.display = 'none';
                        elements.btnNext.style.display = 'none';
                        elements.btnResult.style.display = 'flex';
                    }

                } else {
                    // Update data
                    dataCtrl.updateData(result.whatYouShouldRevise, questions[currentQuestion].tips[1]);

                    // Update UI
                    document.querySelector('.wrong').style.display = 'flex';

                    if (currentQuestion === questions.length - 1) {
                        // Change buttons
                        elements.btnCheck.style.display = 'none';
                        elements.btnNext.style.display = 'none';
                        elements.btnResult.style.display = 'flex';
                    }
                }
            }
            
        } else if (e.target.matches('.quiz-group__box, .quiz-group__box *')) {
            elements.btnCheck.classList.add('active');

        } else if (e.target.matches('.btn--next')) {
            // Prepare UI
            UIctrl.prepareUI();
            elements.btnCheck.classList.remove('active');
            currentQuestion++;

            // Render a new question block
            UIctrl.addQuestionBlock(questions[currentQuestion], questions.length);

            elements.footerLabel.textContent = `Question: ${questions[currentQuestion].id} of ${questions.length}`;

            if (currentQuestion === questions.length - 1) {
                // Change buttons
                elements.btnSkip.style.display = 'none';
                elements.btnLast.style.display = 'flex';
            }
            
        } else if (e.target.matches('.btn--last')) {
            let selectedOption = document.querySelector('input[type=radio]:checked');
            
            if (!selectedOption) {
                // Update data
                dataCtrl.updateData(result.whatYouSkipped, questions[currentQuestion].question);

                UIctrl.seeResult(result.whatYouKnow.length, questions.length, result.whatYouSkipped.length);

                if (result.whatYouSkipped.length > 0) {
                    UIctrl.addSkipBlock(result.whatYouSkipped);
                } 
        
                if (result.whatYouShouldRevise.length > 0) {
                    UIctrl.addReviseBlock(result.whatYouShouldRevise);
                }
        
                if (result.whatYouKnow.length > 0) {
                    UIctrl.addKnowBlock(result.whatYouKnow);
                }
            }

        } else if (e.target.matches('.btn--result')) {
            UIctrl.seeResult(result.whatYouKnow.length, questions.length, result.whatYouSkipped.length);

            if (result.whatYouSkipped.length > 0) {
                UIctrl.addSkipBlock(result.whatYouSkipped);
            } 

            if (result.whatYouShouldRevise.length > 0) {
                UIctrl.addReviseBlock(result.whatYouShouldRevise);
            }

            if (result.whatYouKnow.length > 0) {
                UIctrl.addKnowBlock(result.whatYouKnow);
            }

        } else if (e.target.matches('.btn--retry')) {
            UIctrl.restartQuiz();
            currentQuestion = 0;
            result.whatYouKnow = [];
            result.whatYouShouldRevise = [];
            result.whatYouSkipped = [];
            elements.footerLabel.textContent = `Question: ${questions[currentQuestion].id} of ${questions.length}`;
            // Render a block questions
            UIctrl.addQuestionBlock(questions[currentQuestion], questions.length);
        }
    });
};

window.addEventListener('load', appController);