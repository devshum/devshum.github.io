const cookies = document.querySelector('.cookies');
const cookiesBtns = document.querySelectorAll('.cookies__close, .btn--blue');

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerForm = document.querySelector('.header__form');
const headerSearch = document.querySelector('.header__search');

const intro = document.querySelector('.intro');
const introSlider = document.querySelector('.intro__slider');
const introText = document.querySelector('.intro__text-box');
const introBtns = document.querySelectorAll('.intro__btn-box > .intro__slider-btn');
const introImg = document.querySelector('.intro__img');

const introMinor = document.querySelector('.intro-minor');
const introMinorSlider = document.querySelector('.intro-minor__slider');
const introMinorBtns = document.querySelectorAll('.intro-minor__btn-box > .intro-minor__img');

const sidebar = document.querySelector('.sidebar__sticky');

const supportForm = document.querySelector('.touch');
const supportFormHeader = document.querySelector('.touch__header');

const gift = document.querySelector('.gift');
const giftBtn = document.querySelector('.gift__close');

const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.mob-nav');
const mobCloseBtn = document.querySelector('.mob-nav__close');
const mobPlusBtn = document.querySelector('.mob-nav__add');
const mobAdditionalNav = document.querySelector('.mob-nav__add-nav');
const shadow = document.querySelector('.shadow');

const intros = [
    {   
        h2: 'WFH Kit', 
        h1: 'Working from home?', 
        p:  'This exclusive kit will make working from home<br> a little more comfortable.', 
        src: 'img/bgs/bg-1.png'
    }, 

    {
        h2: 'Limitless Merino Shirts', 
        h1: 'They are here!', 
        p:  'After a record-breaking campaign, the ultimate<br> travel shirt is finally available. Get yours today!', 
        src: 'img/bgs/bg-2.png'
    }, 

    {
        h2: 'Diversion Pant', 
        h1: 'Introducing Ultimate Comfort', 
        p:  'We are excited to announce the most<br> comfortable pant. Experience it yourself.', 
        src: 'img/bgs/bg-3.png'
    }, 

    {
        h2: 'StrongCore Merino Tee', 
        h1: 'Your new go-to', 
        p:  'Our best-selling tee is back in stock and in<br> a sweet <b>new color.</b>', 
        src: 'img/bgs/bg-4.png'
    }, 

    {   
        h2: 'EVOLUTION PANT', 
        h1: 'Winner, Winner', 
        p:  'Voted Best Travel Clothing in Carryology 2019 Carry Awards.', 
        src: 'img/bgs/bg-5.png'
    }
];

const reviews = [
    { 
        review: '“Versatile enough that I’ve worn them on an overnight international flight, through the next day, then paired them with a blazer for dinner.” ',
        publisher: 'Nick Caruso, Associate Editor'
    },

    { 
        review: 'Designers are making clothing that feels, moves and, most importantly, looks every bit as good as traditional button-ups.',
        publisher: 'Josh Wilding, Editor'
    },

    { 
        review: '“These clothes are suitable to be worn hiking and working in an office.',
        publisher: 'Lisa Babick, Newsmaker'
    },

    { 
        review: '“We came to love the invisible perks like stain repellency and the quick-dry build.',
        publisher: 'Katey Stoetzel, Director'
    },
];

burger.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    shadow.classList.toggle('active');
});

mobPlusBtn.addEventListener('click', () => {
    mobAdditionalNav.classList.toggle('add-nav-active');
});

mobCloseBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('active');
    shadow.classList.toggle('active');
});

const formAppear = () => {
    headerSearch.addEventListener('click', () => {
        headerForm.classList.toggle('active');
        headerSearch.classList.toggle('fill');
    });
};

const formAppear2 = () => {
    document.getElementById('icon').addEventListener('click', () => {
        document.getElementById('input').classList.toggle('active');
    });
};

const sticky = () => {
    window.onscroll = () => sticky();

    const sticky = () => {
        if (pageYOffset > 236) {
            sidebar.classList.add('sticky');
            cookies.classList.add('cookies-active');
            
        } else {
            sidebar.classList.remove('sticky');   
            cookies.classList.remove('cookies-active'); 
        }

        if (pageYOffset > 0) {
            header.classList.add('sticky-header');
            headerLogo.classList.add('sticky-logo');
        } else {
            header.classList.remove('sticky-header');
            headerLogo.classList.remove('sticky-logo');
        }
    }
}

const renderIntro = intros => {
    const markup = `
        <div class="intro__text-box">
            <!-- base(typography)-->
            <h1 class="heading-primary">
                <span class="heading-primary--sub">${intros.h2}</span>
                <span class="heading-primary--main">${intros.h1}</span>
            </h1>
            <!-- base(typography)-->
            <p class="intro__paragraph mb-20px">${intros.p}.</p>
            <!-- components(btn)-->
            <a class="btn" href="#">Shop Now</a>
        </div>
          <img class="intro__img" src="${intros.src}" alt="${intros.h1}"/>
        </div>
    `;

    introSlider.insertAdjacentHTML('beforeend', markup);
}

const renderSlide = num => {
    const newBtns = Array.from(introBtns);
    newBtns.forEach(el => el.style.backgroundColor = 'rgba(255, 255, 255, 0.4)');

    introSlider.innerHTML = '';
    renderIntro(intros[num]);
};

intro.addEventListener('click', e => {

    if (parseInt(e.target.dataset.id) === 0) {

        renderSlide(0);
        e.target.style.backgroundColor = '#fff';

    } else if (parseInt(e.target.dataset.id) === 1) {

        renderSlide(1);
        e.target.style.backgroundColor = '#fff';

    } else if (parseInt(e.target.dataset.id) === 2) {

        renderSlide(2);
        e.target.style.backgroundColor = '#fff';

    } else if (parseInt(e.target.dataset.id) === 3) {

        renderSlide(3);
        e.target.style.backgroundColor = '#fff';

    } else if (parseInt(e.target.dataset.id) === 4) {

        renderSlide(4);
        e.target.style.backgroundColor = '#fff';
    }
});

const renderReview = review => {
    const markup = `
        <blockquote>${review.review}</blockquote>
        <figcaption>${review.publisher}</figcaption>
        <!-- components(cta)-->
        <a class="cta" href="#">Learn More</a>
    `;

    introMinorSlider.insertAdjacentHTML('beforeend', markup);
};

const renderReviewSlide = num => {
    const newBtns = Array.from(introMinorBtns);
    newBtns.forEach(el => el.style.opacity = '.5');

    introMinorSlider.innerHTML = '';
    renderReview(reviews[num]);
};

introMinor.addEventListener('click', e => {

    if (parseInt(e.target.dataset.id) === 0) {
        renderReviewSlide(0);
        e.target.style.opacity = '1';
    }

    if (parseInt(e.target.dataset.id) === 1) {
        renderReviewSlide(1);
        e.target.style.opacity = '1';
    }

    if (parseInt(e.target.dataset.id) === 2) {
        renderReviewSlide(2);
        e.target.style.opacity = '1';
    }

    if (parseInt(e.target.dataset.id) === 3) {
        renderReviewSlide(3);
        e.target.style.opacity = '1';
    }
});

cookies.addEventListener('click', e => {
    if (e.target.matches('.cookies__close, .btn--blue')) {
        cookies.style.display = 'none';
    }
});

giftBtn.addEventListener('click', () => {
    gift.style.display = 'none';
});

supportFormHeader.addEventListener('click', () => {
    supportForm.classList.toggle('form-active');

    if (supportFormHeader.innerHTML === 'Questions? Click here') {
        supportFormHeader.innerHTML = 'support &times';
        supportFormHeader.style.opacity = '1';
    } else { 
        supportFormHeader.innerHTML = 'Questions? Click here';
        supportFormHeader.style.opacity = '.9';
    } 
});

[formAppear, formAppear2, sticky].forEach(el => window.addEventListener('load', el));

const giftPanel = () => {
    setTimeout(() => {
        gift.classList.add('gift-active');
    }, 8000);
}

giftPanel();




