$(document).ready(function () {
  const button = document.querySelectorAll('.header__button');
  const drop = document.querySelectorAll('.header__dropdown-list')

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      // button.forEach(el => {el.classList.remove(('header__button_active'))});
      // e.currentTarget.classList.add('header__button_active');
      drop.forEach(el => {el.classList.remove(('dropdown_active'))})
      e.currentTarget.closest('li').querySelector('.header__dropdown-list').classList.toggle('dropdown_active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header__dropdown-list') && !e.target.classList.contains('header__button')) {
      // button.forEach(el => {el.classList.remove(('header__button_active'))});
      drop.forEach(el => {el.classList.remove(('dropdown_active'))})
    }
  });

  $('.header__mob-menu').click(function() {
    $('body').toggleClass('slidemenu-open');
    $('.header__mob-menu').toggleClass('open-menu');
    $('.header__top-nav').toggleClass('header__top-nav_open');
  });

  $('.header__top-btn').click(function() {
    $('.header__top-search').toggleClass('header__active-search');
    $('.header__top-input').toggleClass('header__active-input');
    $('.header__picture').toggleClass('header__mob-off');
    $('.header__mob-menu').toggleClass('header__mob-off');
    $('.header__top-search-close').toggleClass('header__top-search-close-active');
  })

  $('.header__top-search-close').click(function(){
    $('.header__top-search').toggleClass('header__active-search');
    $('.header__top-input').toggleClass('header__active-input');
    $('.header__picture').toggleClass('header__mob-off');
    $('.header__mob-menu').toggleClass('header__mob-off');
    $('.header__top-search-close').toggleClass('header__top-search-close-active');
  })
});

let heroSwiper = new Swiper('.hero__swiper', {
  effect: 'fade',
  slidesPerView: 'auto',
  autoplay: {
      delay: 2000,
  },
});

const element = document.querySelector('select');

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});

let galerySwiper = new Swiper(".galery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});