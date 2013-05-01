(function ($, undefined) {

  // Define the plugin.
  $.fn.customPlugin = function (options) {

    options = options || {
      classes: ''
    };

    return this.each(function () {
      var $this = $(this);
      $this
        .html('<a href="mailto:' + $this.data('email') +  '" class="' + options.classes + '">' + $this.text() + '</a>')
        .children('a')
        .unwrap();
    });
  };

}(jQuery));
