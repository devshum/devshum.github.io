export default class Question {
    constructor(id, question, answers, correct, tips) {
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.tips = tips;
    }
};