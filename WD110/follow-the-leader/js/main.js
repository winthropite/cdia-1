$(document).ready(function (event) {
  var $kitten = $('#the-follow');
  var width = $kitten.width();
  var height = $kitten.height();

  function mouseMoveHandler (event) {
    var left = event.pageX;
    var top = event.pageY;
    $kitten.css(
      {
        'left': left - (width / 2),
        'top': top - (height / 2)
      }
    );
  }
  // Attach event handlers.
  $kitten.on('mousedown', function (event) {
    $(document).on('mousemove', mouseMoveHandler);
  });
  // Look for mouse up on the document, not just the image being dragged.
  $(document).on('mouseup', function (event) {
    $(this).off('mousemove');
  });
});
