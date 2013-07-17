(function ($) {
  $(function () {

    var count = 10;

    $('body').on('click', '[href]', function (event) {
      count--;
      console.log(count);
    });

    $('ul').on('mouseenter mouseleave', '[href]', function (event) {
      console.log(event.type);
    });
    // Insert a third link after the last one
    // on the page.
    $('[href]:last').after(
      $('<a href="#">dynamic link</a>')
    );
  });
}(jQuery));
