const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.hero__nav');
    const navLinks = document.querySelectorAll('.hero__item');

    burger.addEventListener('click',() => {
        //TOGGLE NAV
        nav.classList.toggle('list-active');
        //ANIMATION LINKS
        navLinks.forEach((link,index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
            }
        });
    });
}

navSlide();