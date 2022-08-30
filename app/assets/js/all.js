$(function() {
  console.log('Hello Bootstrap5');
});



var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: -25,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination"
  }
});

// $('.artwork-control').imagesLoaded().progress( function() {
//   $('.artwork-control').masonry(); // 渲染整體畫面
// });