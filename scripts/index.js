  $(document).ready(function () {
    $('.header__dropdown-active').hide();
    $('.header__button').click(function(){
      $(this).next().slideToggle('slow');

      $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $(".header__dropdown-active"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $('.header__dropdown-active').hide(); // скрываем его
        }
      });
    });
  });