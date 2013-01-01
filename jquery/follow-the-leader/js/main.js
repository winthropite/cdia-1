$(document).ready(function (event) {
  var $kitten = $('#the-follow');

  function mouseMoveHandler (event) {
    var left = event.pageX;
    var top = event.pageY;
    $kitten.css(
      {
        'left': left + 50,
        'top': top + 50
      }
    );
  }

  $(document).on('mousemove', mouseMoveHandler);
  $(document).on('click', function (event) {
    $(this).off('mousemove');
  });
});