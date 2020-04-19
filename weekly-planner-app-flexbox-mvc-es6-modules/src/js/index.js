import { elements } from './views/base';
import * as dataCtrl from './models/dataCtrl';
import * as UICtrl from './views/UICtrl';

const ctrlAddPlan = () => {
   if (elements.addPlan.value !== '') {
        // Get input
        const [day, plan] = dataCtrl.getInput();
        // Create a plan
        const newPlan = dataCtrl.addPlan(day, plan);
        //console.log(newDay);
        if (newPlan) {
            // Update UI
            UICtrl.displayPlan(newPlan.id, newPlan.day, newPlan.plan);
            UICtrl.displayNotificationAdd();
            setTimeout(() => {
                UICtrl.deleteNotificationAdd();
            }, 5000);
        };
        // Clear fields
        dataCtrl.clearFields()
   };
};

const ctrlDeletePlan = e => {
    const planID = e.target.parentNode.parentNode.id;
    if (planID) {
        const [day, id] = planID.split('-');
        //Remove an plan from the array
        dataCtrl.deletePlan(day, parseInt(id));
        //Update UI
        UICtrl.deleteListPlan(planID);    
        // Update UI
        UICtrl.displayNotificationDelete();
        setTimeout(() => {
            UICtrl.deleteNotificationDelete();
        }, 5000);
    }
};

const ctrlChangeFields = () => {
    const nodeArr = document.querySelectorAll('.add__day, .add__plan, .add__btn');

    if (elements.chooseDay.value === 'monday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #d9b152');
    } else if (elements.chooseDay.value === 'tuesday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #31b69c');
    } else if (elements.chooseDay.value === 'wednesday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #33a8d4');
    } else if (elements.chooseDay.value === 'thursday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #7125a1');
    } else if (elements.chooseDay.value === 'friday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #d240ad');
    } else if (elements.chooseDay.value === 'saturday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #b3945b');
    } else if (elements.chooseDay.value === 'sunday') {
        const newArr = Array.from(nodeArr).forEach(el => el.style.border = 'solid 1px #283da8');
    }
};

// const ctrlRenderStorage = () => {
//     // Recieve storage
//     const storage = dataCtrl.readStorage();
//     if (storage.monday.length > 0) {
//         storage.monday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.tuesday.length > 0) {
//         storage.tuesday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.wednesday.length > 0) {
//         storage.wednesday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.thursday.length > 0) {
//         storage.thursday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.friday.length > 0) {
//         storage.friday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.saturday.length > 0) {
//         storage.saturday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };

//     if (storage.sunday.length > 0) {
//         storage.sunday.forEach(el => UICtrl.displayPlan(el.id, el.day, el.plan));
//     };
// };

//window.addEventListener('load', ctrlRenderStorage);

elements.chooseDay.addEventListener('change', ctrlChangeFields);

elements.addBtn.addEventListener('click', ctrlAddPlan);

elements.container.addEventListener('click', ctrlDeletePlan);

document.addEventListener('keypress', e => {
    if (e.target.keyCode === 13 || e.which === 13) {
        ctrlAddPlan();
    }
});



