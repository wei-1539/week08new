$(function() {
  console.log('Hello Bootstrap5');
});


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

// $('.artwork-control').imagesLoaded().progress( function() {
//   $('.artwork-control').masonry(); // 渲染整體畫面
// });