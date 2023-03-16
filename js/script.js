const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const line = document.querySelector('.burger__line')


burger.addEventListener('click',
function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    line.classList.toggle('burger__line--active');

    document.body.classList.toggle('stop-scroll');
   
})