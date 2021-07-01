$(document).ready(function () {
  $('.dropdown-active').hide();

  $('.header__button').click(function(e){
    let el = $(this).next();
    el.slideToggle(200);
    $(this).toggleClass("dropdown-active");
    $('.header__dropdown ').not(el).slideUp(200);
    $('.header__button').not($(this)).removeClass('dropdown-active');

    $(this).css('backgroundImage', 'url(../icons/header-arr-up.svg)');
  });

      // $(document).mouseup(function (e){ // событие клика по веб-документу
    //   let div = $(".dropdown-active"); // тут указываем ID элемента
    //   if (!div.is(e.target) // если клик был не по нашему блоку
    //       && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
    //     $('.dropdown-active').hide(); // скрываем его
    //     $('.header__button').css('backgroundImage', 'url(../icons/header-arr-down.svg)');
    //   }
    // });

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