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

  $( ".catalog__list-accordion" ).accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content',
  });


  // $('.catalog__item-accordion').on('click', function(){
  //   $('.catalog__icon').toggleClass('catalog__icon_active');
  // });

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

  $('.france').on('click', function(){
    $('.catalog__lang-fra').fadeIn(1000);
    $('.catalog__lang-rus, .catalog__lang-ger, .catalog__lang-ita, .catalog__lang-bel').css('display','none');
    $('.catalog__france').css('display', 'flex');
    $('.catalog__belgium, .catalog__italy, .catalog__russia, .catalog__germany').css('display','none');
    $('.catalog__Francesco').fadeIn(1000);
    $('.catalog__Ambrodjo, .catalog__Domenico, .catalog__Beneditto').css('display', 'none');
    $('.catalog__subtitle').text('Алофе, Мари-Александр');
  })

  $('.germany').on('click', function(){
    $('.catalog__lang-ger').fadeIn(1000);
    $('.catalog__lang-rus, .catalog__lang-fra, .catalog__lang-ita, .catalog__lang-bel').css('display','none');
    $('.catalog__germany').css('display', 'flex');
    $('.catalog__belgium, .catalog__italy, .catalog__russia, .catalog__france').css('display','none');
    $('.catalog__Ambrodjo').fadeIn(1000);
    $('.catalog__Domenico, .catalog__Beneditto, .catalog__Francesco').css('display','none');
    $('.catalog__subtitle').text('Адлер, Янкель');
  })

  $('.italy').on('click', function(){
    $('.catalog__lang-ita').fadeIn(1000);
    $('.catalog__lang-rus, .catalog__lang-ger, .catalog__lang-fra, .catalog__lang-bel').css('display','none');
    $('.catalog__italy').css('display', 'flex');
    $('.catalog__belgium, .catalog__germany, .catalog__russia, .catalog__france').css('display','none');
    $('.catalog__Domenico').fadeIn(1000);
    $('.catalog__Francesco, .catalog__Ambrodjo, .catalog__Beneditto').css('display','none');
    $('.catalog__subtitle').text('Доменико Гирландайо');
  })

  $('.russia').on('click', function(){
    $('.catalog__lang-rus').fadeIn(1000);
    $('.catalog__russia').css('display', 'flex');
    $('.catalog__lang-fra, .catalog__lang-ger, .catalog__lang-ita, .catalog__lang-bel').css('display','none');
    $('.catalog__belgium, .catalog__germany, .catalog__italy, .catalog__france').css('display','none');
    $('.catalog__Francesco').fadeIn(1000);
    $('.catalog__Ambrodjo, .catalog__Domenico, .catalog__Beneditto').css('display', 'none');
    $('.catalog__subtitle').text('Андрей Рублев');
  })

  $('.belgium').on('click', function(){
    $('.catalog__lang-bel').fadeIn(1000);
    $('.catalog__belgium').css('display', 'flex');
    $('.catalog__lang-rus, .catalog__lang-ger, .catalog__lang-ita, .catalog__lang-fra').css('display','none');
    $('.catalog__russia, .catalog__germany, .catalog__italy, .catalog__france').css('display','none');
    $('.catalog__Ambrodjo').fadeIn(1000);
    $('.catalog__Domenico, .catalog__Beneditto, .catalog__Francesco').css('display','none');
    $('.catalog__subtitle').text('Ауденарде, Роберт ван');
  })

  let tabBtnAll = document.querySelectorAll('.catalog__btn-lang');

  tabBtnAll.forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (event) {
    tabBtnAll.forEach(function (tabsBtn) {
      if (tabsBtn.parentElement.classList.contains('catalog__item-lang_active')) {
          tabsBtn.parentElement.classList.remove('catalog__item-lang_active');
      };
    })
    tabsBtn.parentElement.classList.add('catalog__item-lang_active');

    })
  })

  $('.events__all-btn').on('click',function() {
    $(".events__item").css("display", "block");
    $('.events__all-btn').css("display", "none");
  });

  const MOBILE_WIDTH = 580;

  const sliderParams = {
    paginationClassName: 'events-pagination',
    cardsContainerName: 'events__js-slider',
    cardsWrapName: 'events__js-slides-wrap',
    card: 'events__slide'
  };

  function getWindowWidth () {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateEventsSlider (params) {
    const pagination = document.createElement("div");
    pagination.classList.add(params.paginationClassName);
    params.cardsContainer.append(pagination);
    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");
    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
      slidesPerColumnFill: "row",
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerView: 1,
      spaceBetween: 20,

      pagination: {
        el: `.${params.cardsContainerName} .${params.paginationClassName}`
      },

      on: {
        beforeInit() {
          document
            .querySelectorAll(`.${params.card}`)
            .forEach((el) => {
              el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
        }
      }
    });
  }

  function destroyEventsSlider (params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function checkWindowWidth (params) {
    const currentWidth = getWindowWidth();
    params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    if (currentWidth <= MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
      activateEventsSlider(params);
    } else if (
      currentWidth >= MOBILE_WIDTH &&
      params.cardsSlider
    ) {
      destroyEventsSlider(params);
    }
  }

  checkWindowWidth(sliderParams);

  window.addEventListener('resize', function () {
    checkWindowWidth(sliderParams);
  })

  let editionsSwiper = new Swiper(".editions__swiper-container", {
    // slidesPerColumnFill: "row",
    slidesPerView: 3,
    slidesPerGroup: 3,
    // slidesPerColumn: 2,
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
      1024:{
        slidesPerView: 2,
        slidesPerGroup: 6,
        spaceBetween: 34,
      },
      1430:{
        slidesPerView: 3,
        slidesPerGroup: 3,
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
});
