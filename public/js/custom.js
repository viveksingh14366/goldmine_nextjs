$(document).ready(function () {

  $('.gm-silder').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-fixed').addClass('navbar-sticky');
    } else {
      $('.navbar-fixed').removeClass('navbar-sticky');
    }
  });

  $(".navbar-toggler").click(function(){
    $(".navbar-fixed").toggleClass("navbarfixed-top");
  });

  $(".navbar-nav .nav-item .nav-link").click(function(){
    $(".navbar-fixed").toggleClass("navbarfixed-top");
    $(".navbar-collapse.collapse").toggleClass("show");
  });

});