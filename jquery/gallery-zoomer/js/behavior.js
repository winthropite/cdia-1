$(document).ready(function (event) {
  // Create a wrapper.
  var $wrapper = $('<div></div>');
  // Add the class 'image-cropper'
  $wrapper
  .addClass('image-cropper');
  // Get the images on the page.
  var $img = $('#content img');
  // Wrap the images in the div wrapper.
  $img
  .wrap($wrapper)
  .parent()
  .each(function (index, element) {
    var $parent = $(element);
    var parentWidth = $parent.width();
    var parentHeight = $parent.height();
    // Get the image.
    var $myImg = $parent.find('img');
    var width = $myImg.width();
    var height = $myImg.height();
    // Get the excess dimensions.
  });
});