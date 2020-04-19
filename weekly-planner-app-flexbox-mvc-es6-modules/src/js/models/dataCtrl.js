import { elements } from '../views/base';
import uniqid from 'uniqid';
import Plan from './Plan';

let state = {
    allPlans: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    },
};

// const persistData = () => {
//     localStorage.setItem('plans', JSON.stringify(state.allPlans));
// };

// export const readStorage = () => {
//     const storage = JSON.parse(localStorage.getItem('plans'));
//     state.allPlans = storage;
//     return storage;
// };

export const getInput = () => {
    // Return an array
    return [elements.chooseDay.value, elements.addPlan.value];
};

export const addPlan = (day, plan) => {
    if (state.allPlans[day].length < 7) {
        // Create UIDs
        const ID = uniqid();
        // Create a plan item
        const newPlan = new Plan(ID, day, plan);
        // Push the day item into an array
        state.allPlans[day].push(newPlan);
        // LocalStorage
        // persistData();
        return newPlan;
    } else {
        alert(`${day}'s limit has been exceeded`);
    }
};

export const deletePlan = (day, id) => {
    const index = state.allPlans[day].findIndex(el => {
        return el.id === id;
    });
    state.allPlans[day].splice(index, 1);
    // LocalStorage
    // persistData();
};

export const clearFields = () => {
    // Clear addPlan input
    elements.addPlan.value = '';
};