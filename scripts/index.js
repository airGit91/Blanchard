$(document).ready(function () {


  const params = {
    btnClassName: "header__button",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();


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
    renderChoiceLimit: 3,
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