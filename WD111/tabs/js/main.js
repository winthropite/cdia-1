(function ($) {
  $(document).ready(function (event) {
    var $tabs = $('.tabs');

    var $links = $tabs.find('.tab-links a');

    // Click events.
    $links.click(function (event) {
      event.preventDefault();

      var $link = $(this);
      var href = $link.attr('href');
      var $content = $(href);
      // Clean all currently active links.
      $link
        .closest('.tab-links') // this is a ul
        .find('a.active') // these are links
        .removeClass('active');
      // Make the selected link active.
      $link.addClass('active');
      // Clean all currently active content items.
      $link
        .closest('.tabs') // this is a div
        .find('.tab-content.active') // these are the content divs
        .removeClass('active');
      // Make the selected content active.
      $content.addClass('active');
    });

    // Intial load state.
    $links.first().trigger('click');
  });
}(jQuery));
