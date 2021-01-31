let swiper = new Swiper('.swiper-container', {
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

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    }else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}