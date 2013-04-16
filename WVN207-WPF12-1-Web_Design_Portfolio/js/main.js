// Pass a function into an IIFE so that it is invoked immediately.
(function ($) {

  // Pass an anonymous function to the jQuery function to be run on document ready.
  $(function () {
    // Find all of the anchor tags.
    $('a')
      // Filter the set of anchor tags to those that have an href that points
      // to a hash.
      //
      // The function passed to the filter will return true or false. When it
      // returns false, the element being tested will not be included in the
      // filtered set.
      .filter(function (index) {
        // Turn the function context object (the link), into a jQuery object.
        var $element = $(this);
        // Find the href value.
        var href = $element.attr('href');
        // If...
        // (1) The href has a value (it is not an empty string or undefined); and,
        // (2) That value starts with a '#' character; then,
        // return true.
        // Otherwise return false.
        return href && /^#/i.test(href);
      })
      // Attach an on-click handler.
      .on('click', function (event) {
        // Stop the window from scrolling immediately to the element that corresponds
        // to the hash in the href.
        event.preventDefault();
        var id = $(this).attr('href');
        // Invoke the $.scrollTo plugin. Make it jump to the element identified
        // by the hash in the link href. The scroll should last for a half second (500 ms).
        $.scrollTo(id, {
          duration: 500,
          // Provide a callback function to the plugion's onAfter hook.
          onAfter: function () {
            // Check to see if the global location object has the replace function.
            if ('replace' in location) {
              // Replace the current URL hash with the one we just scrolled to.
              location.replace(id);
            }
          }
        });
      });
  });


}(jQuery));
