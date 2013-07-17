$(document).ready(function (event) {
  // Create a wrapper.
  var $wrapper = $('<div></div>');
  // Inject a screen.
  var $screen = $('<div></div>')
  .addClass('screen')
  // <div class="screen"></div>
  .appendTo('body');
  // Add the class 'image-cropper'
  $wrapper
  .addClass('image-cropper');
  // Get the images on the page.
  var $img = $('#content img');
  // Wrap the images in the div wrapper.
  $img
  .wrap($wrapper)
  .parent()
  // jQuery object is .image-cropper div.
  .each(function (index, element) {
    var $parent = $(element);
    var parentWidth = $parent.width();
    var parentHeight = $parent.height();
    // Get the image.
    var $myImg = $parent.find('img');
    var width = $myImg.width();
    var height = $myImg.height();
    // Get the excess dimensions.
    var deltaWidth = parentWidth - width;
    var deltaHeight = parentHeight - height;
    // Reposition the images.
    $myImg.animate({
      'left': (deltaWidth / 2),
      'top': (deltaHeight / 2)
    }, 500);
  })
  .hover(
    function hoverIn(event) {
      // Get the image.
      var $this = $(this); // <div class="image-cropper"></div>
      // Add the .active class to the .screen.
      $screen
      .hide()
      .addClass('active')
      .slideDown(2000, function () {
        $this.css({
          'overflow': 'visible',
          'z-index': 1000
        });
      });
    },
    function hoverOut(event) {
      var $this = $(this);
      $this.css({
        'overflow': 'hidden',
        'z-index': 'auto'
      });
      // Remove the .active class from the .screen.
      $screen
      .fadeOut(250)
      .removeClass('active');
    }
  );
});