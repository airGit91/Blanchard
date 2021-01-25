let header__burger = document.querySelector('.header__burger');
let header__list = document.querySelector('.header__list');
let back = document.querySelector('body');

header__burger.onclick = function() {
    header__burger.classList.toggle('active');
    header__list.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function() {
  header__list.classList.remove('active');
  header__burger.classList.remove('active');
  back.classList.toggle('lock');
}