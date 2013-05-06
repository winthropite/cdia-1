// Define the function.
(function ($) {

  $.fn.customPlugin = function (options) {
    return this;
  };

}(jQuery));

// Invoke the function.
(function ($) {

  $(function () {
    $('').customPlugin();
  });

}(jQuery));
