import { elements } from './base';
import uniqid from 'uniqid';

export const displayPlan = (id, day, plan) => {
    const UIDs = `${uniqid()} `.repeat(2);
    const [UID1, UID2] = UIDs.split(' ');
    const html = `
        <li class="day__item" id="${day}-${id}">
            <div class="day__plan">
                <div class="day__checkbox-box">
                    <input class="day__checkbox" type="checkbox" id="${UID1}"/>
                    <label class="day__new-checkbox" for="${UID2}"><span> </span></label>
                    <div class="day__paragraph">
                    <p>${plan}</p>
                    </div>
                </div>
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