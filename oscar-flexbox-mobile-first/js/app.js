const allTheFunctional = () => {
    // the nav functional
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        // the burger functional(cross)
        burger.classList.toggle('burger-active');
    });

    // the header functional
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top='-14.8rem';
        } else {
            header.style.top='0';
        }

        lastScrollTop = scrollTop;
    });
};

allTheFunctional();