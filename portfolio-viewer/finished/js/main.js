(function ($) {
  var $items = $('.item').removeClass('item');
  $items.hover(
    function (event) {
      var $this = $(this);
      $this
      .find('.details')
      .animate({
        'height': '100%',
        'opacity': 1,
      });
    },
    function (event) {

    }
  );
}(jQuery));
