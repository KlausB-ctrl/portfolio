const FADE_UP_OBSERVER = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("fade-up-animation");
            return;
        }
    })
});
FADE_UP_OBSERVER.observe(document.querySelector('.about__content'));
FADE_UP_OBSERVER.observe(document.querySelector('.project__text'));
FADE_UP_OBSERVER.observe(document.querySelector('.contact__content'));

const FADE_LEFT_OBSERVER = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("fade-left-animation");
            return;
        }
    })
});
FADE_LEFT_OBSERVER.observe(document.getElementsByClassName("project__content__item")[0]);
FADE_LEFT_OBSERVER.observe(document.getElementsByClassName("project__content__item")[2]);

const FADE_RIGHT_OBSERVER = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("fade-right-animation");
            return;
        }
    })
});
FADE_RIGHT_OBSERVER.observe(document.getElementsByClassName("project__content__item")[1]);