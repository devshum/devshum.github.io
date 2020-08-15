import axios from "axios";

export default class RandomVerb {
    constructor(randomNum) {
        this.randomNum = randomNum;
    }

    async getRandomVerb() {
        try {
            const randomVerb = await axios('https://cors-anywhere.herokuapp.com/https://iverbapi.herokuapp.com/api/all');
            this.result = randomVerb.data.data[this.randomNum];
        } catch(error) {
            alert(error);
        }
    }
};