(function ($) {
  var $items = $('.item').removeClass('transition');
  // Set up the hover handlers.
  $items.hover(
    function (event) {
      var $this = $(this);
      $this
      .find('.details')
      .animate({
        'height': $this.height(),
        'opacity': 1,
      }, 100);
    },
    function (event) {
      var $this = $(this);
      $this
      .find('.details')
      .animate({
        'height': 0,
        'opacity': 0,
      });
    }
  );
}(jQuery));
