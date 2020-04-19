import { elements } from './base';

export const displayPlan = (id, day, plan) => {
    const html = `
        <li class="day__item" id="${day}-${id}">
            <div class="day__plan">
                <p class="day__paragraph">${plan}</p>
                <button class="day__btn">&#10006;</button>
            </div>
        </li>
    `;

    if (day) {
        elements[day].insertAdjacentHTML('beforeend', html);
    }
};

export const deleteListPlan = (planID) => {
    const el = document.getElementById(planID);
    el.parentNode.removeChild(el);
    console.log(planID);
};

export const displayNotificationAdd = () => {
    const html = `
        <div class="notifications__add">
            <span>Plan was successfully</span>
            <svg>
                <use xlink:href="#add">
            </svg>
        </div>
    `;

    elements.notifications.insertAdjacentHTML('afterbegin', html);
};

export const displayNotificationDelete = () => {
    const html = `
        <div class="notifications__delete">
            <span>Plan was successfully</span>
            <svg>
                <use xlink:href="#delete">
            </svg>
        </div>
    `;

    elements.notifications.insertAdjacentHTML('afterbegin', html);
};

export const deleteNotificationAdd = () => {
    const el = document.querySelector('.notifications__add');
    el.parentNode.removeChild(el);
};

export const deleteNotificationDelete = () => {
    const el = document.querySelector('.notifications__delete');
    el.parentNode.removeChild(el);
};