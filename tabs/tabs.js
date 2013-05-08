(function ($) {
  $.fn.tabs = function () {
    var $root = this;

    // Goal 1: Associate content with the list
    // of anchors by giving each content item
    // an id that is that same as the href
    // on a list item.

    // Find the titles. Find the div that comes
    // after each title.
    var $titles = $('h3');

    $titles.each(function (index) {
      var count = index + 1; // 1, 2, 3...
      var $h3 = $(this); // h3
      var $content = $h3.next();
      $h3.data('id', 'tabs-' + count);
      $content.attr('id', 'tabs-' + count); // [id]
    });

    // Goal 2: Wrap each of the h3 elements in
    // an anchors tag. Put the anchors in
    // a div with the class .tabs


    // Put all of the elements in a div with the
    // class .tabs
    var $tabs = $('<div class="tabs">')
      .append($titles);
    // Wrap each of the h3 elements in an anchor.
    // The following is synonymous with $titles.wrap('<a>');
    $titles.each(function () {
      var $h3 = $(this);
      var id = $h3.data('id');
      $h3.wrap('<a href="#' + id + '">');
    });

    // Attach the div.tabs to the root of our
    // plugin.
    $root.prepend($tabs);

    // Goal 3: When I click on a tab, I want the tab and it's
    // corresponding content to be marked with an .active
    // class.

    // Asign a click hanlder to the tabs links.

    // Apply the active class to the clicked link and the
    // corresponding content.

    // Remove the active class from any tab and its content
    // that is no longer active. If tab 1 is active and I
    // click on tab 2, tab 1 should deactivate.

    // Goal 4: Style the tabs to look like tabs.

  };
}(jQuery));
