$(document).ready(function() {
  console.log("READY 2")

  $( ".btn-navigate" ).click(function(event) {
    event.preventDefault();
    var width = $(window).width();
    var offset = width <= 650 ? 260 : 180;
    var anchor = $.attr(this, 'href');
    if (anchor == '#about') {
      offset = width <= 650 ? 370 : 260;
    }
    console.log("width", width, anchor);

    $('html, body').animate({
      scrollTop: $(anchor).offset().top - offset
    }, 500);
  });
});
