  $(document).ready(function () {
    $('.mask-phone').mask('+7 (999) 999-99-99');

    $('.header__active').hide();
    $('.header__nav-btn').click(function(){
      $(this).next().slideToggle('slow');

      $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $(".header__active"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
          div.hide(); // скрываем его
        }
      });
    });

    $('.header__burger').click(function(){
      $('.header__burger').toggleClass('active');
      $('.header__list').toggleClass('active');
      $('body').toggleClass('active');
    });

    $('.header__list').click(function(){
      $('.header__list').removeClass('active');
      $('.header__burger').removeClass('active');
      $('body').removeClass('active');
    });

    $('#header__burger').click(function(){
      const checked = $(this).is(":checked");
      if (checked) {
        $('body').css('overflow', 'hidden');
        $('body').bind('touchmove', false);
      } else {
        $('body').css('overflow', 'scroll');
        $('body').unbind('touchmove');
      }
    });

    $('.header__item').click(function () {
      $('#header__burger').prop('checked', false);
      $('body').css('overflow','scroll');
      $('body').unbind('touchmove');
     });
  });

  let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  let swiperGalery = new Swiper('.swiper-container-galery', {
    cssMode: true,
    loop: true,
    // slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  let swiperGaleryDesc = new Swiper('.galery-container-desc', {
    cssMode: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

  const element = document.querySelector('select');
              const choices = new Choices(element, {
                  searchEnabled: false,
                  itemSelectText: '',
              });

  let acc = document.getElementsByClassName('accordion');

  for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      }else{
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

    $('.catalog__item').click(function(){
      $(this).toggleClass('accordion__item');
    });

    let eventSwiper = new Swiper('.swiper-container-event', {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 33,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      breakpoints:{
        768:{
          slidesPerView: 2,
        }
      },
    });

    let eventSwiperDesc = new Swiper('.swiper-container__event-desc', {
      cssMode: true,
      slidesPerView: 3,
      spaceBetween: 27,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        1920:{
          slidesPerView: 3,
          spaceBetween: 50,
        }
      },
    });

    let projectSwiper = new Swiper('.projects__swiper', {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev',
      },
      breakpoints:{
        768:{
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1024:{
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1920:{
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    let swiperEditions = new Swiper('.swiper__editions', {
      cssMode: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 34,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'fraction',
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        1024:{
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1920:{
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    ymaps.ready(function () {
      let myMap = new ymaps.Map('map', {
          center: [55.75784872240947,37.5994923144472],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([55.75784872240947,37.5994923144472], {
          hintContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54',
          balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54',
          iconContent: '',
      }, {
          iconLayout: 'default#imageWithContent',
          iconImageHref: '../icons/320/map-target.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-24, -24],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
  });

  ymaps.ready(function () {
    let myMap = new ymaps.Map('desc__map', {
        center: [55.75784872240947,37.5994923144472],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([55.75784872240947,37.5994923144472], {
        hintContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54',
        balloonContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54',
        iconContent: '',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../icons/320/map-target.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-24, -24],
        iconContentOffset: [15, 15],
        iconContentLayout: MyIconContentLayout
    });

myMap.geoObjects
    .add(myPlacemarkWithContent);
});

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }
