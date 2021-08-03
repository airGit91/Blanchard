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

  function galeryChoicesMargin(){
    if(window.matchMedia('(max-width: 1023px)').matches){
      $('.choices__list').click(function(){
        $('.galery__swiper').css('margin-top', '30px');
      })

      $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $(".choices__list"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
              $('.galery__swiper').css('margin-top', '0');
        }
      });

    }else{
      $('.galery__swiper').css('margin-top', '0');
    }
  }
  galeryChoicesMargin();
  $(window).resize(galeryChoicesMargin);


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
      duplicateItemsAllowed : false,
  });

  let galerySwiper = new Swiper(".galery__swiper", {
    slidesPerColumnFill: "row",
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
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        // spaceBetween: 34,
      },

      768:{
        slidesPerView: 2,
        slidesPerGroup: 6,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1024:{
        slidesPerView: 2,
        slidesPerGroup: 6,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1151:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
    },

    on: {
      /* исправляет баг с margin-top остающимся при смене брейкпоинта */
      beforeResize: function () {
        this.slides.forEach((el) => {
          el.style.marginTop = "";
        });
      }
    }
  });

  $( "#accordion" ).accordion();

  $('.catalog__rus').css('display','block');
  $('.catalog__fra, .catalog__ger, .catalog__ita, .catalog__belg').css('display','none');

  $('.france').on('click', function(){
    $('.catalog__fra').fadeIn(1000);
    $('.catalog__rus, .catalog__ger, .catalog__ita, .catalog__belg').css('display','none');
  });

  $('.russia').on('click', function(){
    $('.catalog__rus').fadeIn(1000);
    $('.catalog__fra, .catalog__ger, .catalog__ita, .catalog__belg').css('display','none');
  });

  $('.germany').on('click', function(){
    $('.catalog__ger').fadeIn(1000);
    $('.catalog__fra, .catalog__rus, .catalog__ita, .catalog__belg').css('display','none');
  });

  $('.italy').on('click', function(){
    $('.catalog__ita').fadeIn(1000);
    $('.catalog__fra, .catalog__ger, .catalog__rus, .catalog__belg').css('display','none');
  });

  $('.belgium').on('click', function(){
    $('.catalog__belg').fadeIn(1000);
    $('.catalog__fra, .catalog__ger, .catalog__ita, .catalog__rus').css('display','none');
  });

  $('.catalog__accordion-btn').on('click', function(e) {
    let target = e.target.textContent;
    $('.catalog__subtitle').text(target);
  });

  $('.catalog__btn-Beneditto').on('click', function(){
    $('.catalog__Beneditto').fadeIn(1000);
    $('.catalog__Domenico, .catalog__Ambrodjo, .catalog__Francesco').css('display','none');
  });

  $('.catalog__btn-Ambrodjo').on('click', function(){
    $('.catalog__Ambrodjo').fadeIn(1000);
    $('.catalog__Domenico, .catalog__Beneditto, .catalog__Francesco').css('display','none');
  });

  $('.catalog__btn-Francesco').on('click', function(){
    $('.catalog__Francesco').fadeIn(1000);
    $('.catalog__Ambrodjo, .catalog__Domenico, .catalog__Beneditto').css('display', 'none');
  });

  $('.catalog__btn-Domenico').on('click', function(){
    $('.catalog__Domenico').fadeIn(1000);
    $('.catalog__Francesco, .catalog__Ambrodjo, .catalog__Beneditto').css('display','none');
  });

});