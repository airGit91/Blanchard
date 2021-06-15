$(document).ready(function () {
  $('.header__dropdown-active').hide();
  $('.header__button').click(function(e){
    $(this).next().slideToggle('slow');

    $(this).css('backgroundImage', 'url(../icons/header-arr-up.svg)');

    $(document).mouseup(function (e){ // событие клика по веб-документу
      let div = $(".header__dropdown-active"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.header__dropdown-active').hide(); // скрываем его
        $('.header__button').css('backgroundImage', 'url(../icons/header-arr-down.svg)');
      }
    });
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

  function checkWindowSize() {
    if(window.matchMedia('(max-width: 1023px)').matches){
      $('.header__search').click(function(){
        $('.header__search-disclosure').css('top', '35px');
      });

      $('.header__search-closer, .header__search-disclosure-btn').click(function(){
        $('.header__search-disclosure').css('top', '-99px');
      });
    }else{
      $('.header__search').click(function(){
        $('.header__search-disclosure').css('top', '0');
      });

      $('.header__search-closer, .header__search-disclosure-btn').click(function(){
        $('.header__search-disclosure').css('top', '-99px');
      });
    }
  }
  checkWindowSize()
  $(window).resize(checkWindowSize);
});