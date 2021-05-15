
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
  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,

    },

    1024: {
      slidesPerView: 3,
    }
  }
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
  breakpoints: {

    320: {
      slidesPerView: 1,
    },
    617: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,

    },

    1024: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: '.photo-pagination',
  },
});
const swiperEquipment = new Swiper('.equipment-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  breakpoints: {

    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,

    },

    1024: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.equipment-pagination',
  },
});
const swiperMetalService = new Swiper('.metal-service-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  breakpoints: {

    320: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,

    },

    1024: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.metal-service-pagination',
  },
});



$(window).scroll(function () {
  if ($(this).scrollTop() > 400)
    $("#call").fadeIn();
  else
    $("#call").fadeOut();
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 400)
    $("#whatsapp").fadeIn();
  else
    $("#whatsapp").fadeOut();
});



$(document).ready(function () {
  $('.header-menu-toggle').click(function () {
    $('.header-menu-toggle').toggleClass('open-menu');
    $('.header-nav').toggleClass('open-menu');
    $('body').toggleClass('fixed-page');
  });

  $(window).resize(function () {

  });

});


$('.license').fancybox();
