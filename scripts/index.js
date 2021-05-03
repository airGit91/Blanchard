window.addEventListener('DOMContentLoaded',function(){

  $(document).ready(function () {
    $('.header__active').hide();
    $('.header__nav-btn').click(function(){
      $(this).next().slideToggle('slow').siblings('div:visible').slideUp('slow');
    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest(".header__nav-btn").length) {
        $('.header__active').hide();
      }
      e.stopPropagation();
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

  const element = document.querySelector('select');
              const choices = new Choices(element, {
                  searchEnabled: false,
                  itemSelectText: '',
              });

  let acc = document.getElementsByClassName('accordion');
  let i;

  for (i = 0; i < acc.length; i++) {
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

    const catalog__item_1 = document.getElementById('catalog__item_1');
    catalog__item_1.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_2 = document.getElementById('catalog__item_2');
    catalog__item_2.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_3 = document.getElementById('catalog__item_3');
    catalog__item_3.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_4 = document.getElementById('catalog__item_4');
    catalog__item_4.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_5 = document.getElementById('catalog__item_5');
    catalog__item_5.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_6 = document.getElementById('catalog__item_6');
    catalog__item_6.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };
    const catalog__item_7 = document.getElementById('catalog__item_7');
    catalog__item_7.onclick = (event) =>{
      let target = event.target;
      target.classList.toggle('accordion__item');
    };

    let eventSwiper = new Swiper('.swiper-container-event', {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 33,
      loop: true,
          pagination: {
            el: '.swiper-pagination'
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
      slidesPerView: 2,
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
          spaceBetween: 50,
        }
      },
      breakpoints:{
        1920:{
          slidesPerView: 3,
          spaceBetween: 50,
        }
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

    function mask(event) {
        let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
        let input = document.querySelector("#contacts__tel");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);

        let inputDesc = document.querySelector("#contacts__tel-desc");
        inputDesc.addEventListener("input", mask, false);
        inputDesc.addEventListener("focus", mask, false);
        inputDesc.addEventListener("blur", mask, false);
});