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