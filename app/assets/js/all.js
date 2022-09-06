$(function() {
  console.log('Hello Bootstrap5');
});
// header start 
// 搜尋icon
$('.searchBtn').click(function(e){
  $('.closeControl').toggleClass('close')
  $('.navbar-toggler').toggleClass('close')
  $('.navbar-brand').toggleClass('close')
  $('.iconAll').toggleClass('w-100')
});
// 上一頁 icon
$('.upLavel').click(function(e){
  $('.closeControl').toggleClass('close')
  $('.navbar-toggler').toggleClass('close')
  $('.navbar-brand').toggleClass('close')
  $('.iconAll').toggleClass('w-100')
});

// header end 

// swiper start
const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  loop: true,
  speed: 500,
  // slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //     delay: 3000,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
  breakpoints: {

      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 1,
      },
      1080: {
          slidesPerView: 3,
      },
      1280: {
          slidesPerView: 3,
      },
  },
});
// swiper end 
// $('.artwork-control').imagesLoaded().progress( function() {
//   $('.artwork-control').masonry(); // 渲染整體畫面
// });