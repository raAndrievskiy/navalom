
$(".metal-item").click(function (e) {
  e.preventDefault();
  $('.color-metal-ul .active').slideToggle();
  if (!$(this).hasClass('active')) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});

$(".questions").click(function (e) {
  e.preventDefault();
  $('.questions-text').slideToggle();
  if (!$(this).hasClass('active-questions')) {
    $(this).siblings().removeClass('active-questions');
    $(this).addClass('active-questions');
  } else {
    $(this).removeClass('active-questions');
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

const swiperFile = new Swiper('.file-slider', {
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
    el: '.file-pagination',
  },
  navigation: {
    nextEl: '.file-button-next',
    prevEl: '.file-button-prev',
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
