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

const MESSAGE_TEXTAREA = document.getElementById("message__textarea");
const CHARACTER_COUNTER = document.getElementById("character__counter");

const MAXIMUM_CHARS = 1000;
let charsLeft;
MESSAGE_TEXTAREA.addEventListener("input", (e) => {
    charsLeft = MAXIMUM_CHARS - MESSAGE_TEXTAREA.value.length;
    CHARACTER_COUNTER.innerText = `${charsLeft} characters`;
    console.log(charsLeft);
});

let thankyouMessage = document.getElementById("thankyou");

handleFormSubmit = (e) => {
    thankyouMessage.style.visibility = "visible";
}