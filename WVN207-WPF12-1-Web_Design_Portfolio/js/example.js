(function ($) {

  $(function () {
    var $links = $('a[href^="#"]');

    $links
    .on('click', function (event) {
      var $this = $(this);
      var href = $this.attr('href');

      $.scrollTo(href, {
        duration: 500,
        onAfter: function () {
          location.replace(href);
        },
      });

      event.preventDefault();
    });
  });

}(jQuery));
