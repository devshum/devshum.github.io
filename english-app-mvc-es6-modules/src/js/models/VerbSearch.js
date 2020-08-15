import axios from 'axios';

export default class VerbSearch {
    constructor() {
        this.result;
    }

    async getVerb(value) {
        try {
            const verbSearch = await axios(`https://cors-anywhere.herokuapp.com/https://iverbapi.herokuapp.com/api/infinitive/${value}`);
            this.result = verbSearch;
            
        } catch(error) {
            alert(`${value} doesn't exist in the database :(`);
        };
    }
}