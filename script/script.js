const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const menuExit = document.querySelector('.exit-menu');

burger.addEventListener(`click`, (e) => {
    e.preventDefault();
    menu.classList.add('active');
    document.body.style.overflow = `hidden`;
})

menuExit.addEventListener(`click`, (e) => {
    e.preventDefault();
    menu.classList.remove(`active`);
    document.body.style.overflow = ``;
})