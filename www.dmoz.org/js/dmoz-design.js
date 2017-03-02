
// After the document has fully loaded (elements have been defined)
// define what happens when elements are clicked or hovered over

$(document).ready(function() {

  var show_size   = 5;
  var scroll_size = 5;

  if ($("#cat-slideshow").hasClass("slidecount-14")) { 
    show_size = 7;  scroll_size = 7;
  }

  $('.slideshow').slick({

    slidesToShow: show_size,
    slidesToScroll: scroll_size,
    autoplay: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 625,
        settings: {
          arrows: false,
        }
      }
    ]
  });

});


