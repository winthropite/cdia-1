(function ($) {
  $.fn.tabs = function () {

    var index = 0;

    return this.each(function () {
      var $root = $(this);

      // Goal 1: Associate content with the list
      // of anchors by giving each content item
      // an id that is that same as the href
      // on a list item.

      // Find the titles. Find the div that comes
      // after each title.
      var $titles = $root.find('h3');

      $titles.each(function () {
        index = index + 1;
        var count = index; // 1, 2, 3...
        var $h3 = $(this); // h3
        var $content = $h3.next();
        // Add a class to the content divs
        $h3.data('id', 'tabs-' + count);
        $content
          .attr('id', 'tabs-' + count) // [id]
          .addClass('content');
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
        $h3
          .wrap('<a href="#' + id + '">')
          .parent()
          .addClass('tab');
      });

      // Attach the div.tabs to the root of our
      // plugin.
      $root.prepend($tabs);

      // Goal 3: When I click on a tab, I want the tab and its corresponding
      // content to be marked with an .active class.

      // Assign a click handler to the tabs links
      $root.on('click', '[href]', function (event) {
        event.preventDefault();
        var $link = $(this);
        // Put the href in a variable to use as a selector for the tab content
        var id = $link.attr('href');
        // add .selectedTabLink to clicked link and remove selectedTabLink from other links
        $link
          .addClass('active')
          .siblings()
          .removeClass('active');
        // add .selectedTab to corresponding tab div and remove .selectedTab from other divs
        $(id)
          .addClass('active')
          .siblings()
          .removeClass('active');
      });

      // 'Click' the first link by default

      $root.find('[href]:first').trigger('click');

      // Goal 4: Style the tabs to look like tabs
      // Done in the css file, applied with the tabStlying class at the beginning
      // of the function
    });
  };
}(jQuery));
