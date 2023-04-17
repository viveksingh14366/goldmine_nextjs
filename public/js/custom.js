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

  $(".navbar-toggler").click(function () {
    $(".navbar-fixed").toggleClass("navbarfixed-top");
  });

  $(".navbar-nav .nav-item .nav-link").click(function () {
    $(".navbar-fixed").toggleClass("navbarfixed-top");
    $(".navbar-collapse.collapse").toggleClass("show");
  });

  //--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'linear' // easing
  ); // end animate
} // end scrollThere function definition





// //--- START SCROLL EVENTS ---//
// // detect a mousewheel event (note: relies on jquery mousewheel plugin):
// $(window).on('mousewheel', function (e) {

//   // get Y-axis value of each div:
//   var div1y = $('#homepgsilder').offset().top,
//       div2y = $('#bobsection').offset().top,
//       div3y = $('#footersection').offset().top,
//       // get window's current scroll position:
//       lastScrollTop = $(this).scrollTop(),
//       // for getting user's scroll direction:
//       scrollDirection,
//       // for determining the previous and next divs to scroll to, based on lastScrollTop:
//       targetUp,
//       targetDown,
//       // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
//       targetElement;

//   // get scroll direction:
//   if ( e.deltaY > 0 ) {
//     scrollDirection = 'up';
//   } else if ( e.deltaY <= 0 ) {
//     scrollDirection = 'down';
//   } // end if

//   // prevent default behavior (page scroll):
//   e.preventDefault();

//   // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
//   if (lastScrollTop === div1y) {
//     targetUp = $('#homepgsilder');
//     targetDown = $('#bobsection');
//   } else if (lastScrollTop === div2y) {
//     targetUp = $('#homepgsilder');
//     targetDown = $('#footersection');
//   } else if (lastScrollTop === div3y) {
//     targetUp = $('#bobsection');
//   } else if (lastScrollTop < div2y) {
//     targetUp = $('#homepgsilder');
//     targetDown = $('#bobsection');
//   } else if (lastScrollTop < div3y) {
//     targetUp = $('#bobsection');
//     targetDown = $('#footersection');
//   } // end else if

//   // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
//   if (scrollDirection === 'down') {
//     targetElement = targetDown;
//   } else if (scrollDirection === 'up') {
//     targetElement = targetUp;
//   } // end else if

//   // scroll smoothly to the target element:
//   scrollThere(targetElement, 700);

// }); // end on mousewheel event
// //--- END SCROLL EVENTS ---//



});