(function ($) {
  var start = {
    init: function () {
      normalizeHeight();
      initializeForms();
      startTheSlideshow();
    }
  };
  function initializeForms () {

  }
  function startTheSlideshow () {

  }
  /**
   * Finds any element with .height-normalize and makes the elements
   * the same height.
   */
  function normalizeHeight () {
    var $boxes = $('.height-normalize');
    var tempHeight = 0;
    $boxes.each(function (index, element) {
      var $this = $(this);
      var height = $this.height();
      tempHeight = (height > tempHeight) ? height : tempHeight;
    });
    if (tempHeight > 0) {
      $boxes.height(tempHeight);
    }
  }
  // Register on load functions.
  $(document).ready(start.init);
}(jQuery));