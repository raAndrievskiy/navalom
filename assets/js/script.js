let menuToggle = $('.header-menu-toggle');
menuToggle.on('click', function (event) {
  event.preventDefault();
  $('.header-menu').slideToggle();
});

$(".metal-item").click(function (e) {
  e.preventDefault();
  $('.still').slideToggle();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});


$('.sections-wrap').click(function (e) {
  e.preventDefault();
  if (!$(this).hasClass('active-link')) {
    $(this).siblings().removeClass('active-link');
    $(this).addClass('active-link');
  }
});

const swiperDelivery = new Swiper('.area-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  pagination: {
    el: '.area-pagination',
  },
  navigation: {
    nextEl: '.area-button-next',
    prevEl: '.area-button-prev',
  },
});
const swiperPhoto = new Swiper('.photo-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  pagination: {
    el: '.photo-pagination',
  },
  navigation: {
    nextEl: '.photo-button-next',
    prevEl: '.photo-button-prev',
  },
});



// // $('.questions').click(function () {
// //   $('.questions-text').toggle();
// // });


// $(".questions").click(function (e) {
//   e.preventDefault();
//   $('.questions-text').slideToggle();
//   if ($(this).hasClass('active')) {
//     $(this).removeClass('active');
//   } else {
//     $(this).addClass('active');
//   }
// });
// // $('.questions').click(function (e) {
// //   e.preventDefault();
// //   if (!$(this).hasClass('active-link')) {
// //     $(this).siblings().removeClass('active-link');
// //     $(this).addClass('active-link');
// //   }
// // });