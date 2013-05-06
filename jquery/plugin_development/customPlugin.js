// Define the function.
(function ($) {

  $.fn.customPlugin = function (options) {
    return this;
  };

}(jQuery));

// Invoke the function.
// This could be moved to its own file, like one named main.js
(function ($) {

  $(function () {
    $('').customPlugin();
  });

}(jQuery));
