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

let eventSwiper = new Swiper('.swiper-container-event', {
  cssMode: true,
  spaceBetween: 30,
  loop: true,
      pagination: {
        el: '.swiper-pagination'
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
      // panel.style.maxHeight = panel.scrollHeight + 'px';
      panel.style.maxHeight = '800px';

    }
  });
}

//  let catalog__item = document.getElementsByClassName('catalog__item');
//     catalog__item.addEventListener('click', function(){
//     classList.toggle('accordion__item');
//   });

// let catalog__item = document.getElementById('catalog__item');
//   catalog__item.onclick = (event) =>{
//     let target = event.target;
//     target.classList.toggle('accordion__item');
// };

// let catalogItem = document.querySelectorAll('.catalog__item');
// for (let i=0, length = catalogItem.length; i < length; i++) {
//   catalogItem.addEventListener('click', event =>{
//   classList.toggle('accordion__item');
//   event.preventDefault();
//   });
// }