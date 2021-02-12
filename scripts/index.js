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



// const catalog__item = document.querySelectorAll('catalog__item');
// catalog__item.forEach(
//   catalog__item.onclick = (event) => {
//     let target = event.target;
//     target.classList.toggle('accordion__item');
//   }
// )

// var listItems = document.querySelectorAll('li');
// for(var i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('click', function(event) {
//       this.classList.toggle('clicked');
//     });
// }

window.addEventListener('DOMContentLoaded',function(){
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
});
