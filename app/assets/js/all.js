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

// market control 
$('.triangle-value').on('click',function(e){
  $(this).toggleClass('change');
  $(this).parent().find('#icon-plus').toggleClass('open');
  $(this).parent().find('#icon-minus').toggleClass('open');
});
// 避免點擊icon無法更換
$('#icon-plus').on('click',function(e){
  $('.triangle-value').toggleClass('change')
  $(this).toggleClass('open')
  $('#icon-minus').toggleClass('open')
})
$('#icon-minus').on('click',function(e){
  $(this).toggleClass('open')
  $('.triangle-value').toggleClass('change')
  $('#icon-plus').toggleClass('open')
})

// 瀑布流 start
$('.artwork-control').imagesLoaded().progress( function() {
  $('.artwork-control').masonry(); // 渲染整體畫面
});
// 瀑布流 end

