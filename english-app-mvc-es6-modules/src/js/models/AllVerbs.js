import axios from 'axios';

export default class AllVerbs {
    async getVerbs() {
        try {
            const allVerbs = await axios('https://cors-anywhere.herokuapp.com/https://iverbapi.herokuapp.com/api/all');
            this.result = allVerbs.data;
            
        } catch(error) {
            alert(error);
        }
    }
}

