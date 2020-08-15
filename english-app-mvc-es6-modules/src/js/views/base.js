export const elements = {
    showAllBtn: document.querySelector('.header__btn-show'),
    closeAllBtn: document.querySelector('.all-verbs__cross'),
    allVerbsBackdrop: document.querySelector('.all-verbs-backdrop'),
    allVerbsSection: document.querySelector('.all-verbs'),
    allVerbsList: document.querySelector('.all-verbs__list'),

    showSearch: document.querySelector('.header__btn-search'),
    searchBackDrop: document.querySelector('.search-backdrop'),
    searchSection: document.querySelector('.search'),
    searchList: document.querySelector('.search__list'),
    searchInput: document.querySelector('.search__input'),
    search: document.querySelector('.search'),

    mainContainer: document.querySelector('.main__container'),
    mainStartBtn: document.querySelector('.main__btn-start'),

    shareBtnTop: document.getElementById('share-1'),
    shareBtnBottom: document.getElementById('share-2'),
    shareInputTop: document.getElementById('share-input-1'),
    shareInputBottom: document.getElementById('share-input-2'),

    alertBackDrop: document.querySelector('.alert-backdrop'),
    alertSection: document.querySelector('.alert'),

    infinitiveLabel: document.querySelector('.heading-primary'),
    btnCheck: document.querySelector('.btn--check')
};

export const loader = (div, color) => {
    const loader = `
        <div class="loader ${color}">
            <svg>
                <use xlink:href="#loader"></use>
            </svg>
        </div>
    `;

    div.insertAdjacentHTML('afterbegin', loader);
};


export const removeLoader = () => {
    const loader = document.querySelector('.loader');
    loader.parentNode.removeChild(loader);
};

