$(function() {
  var $accordion = $("#accordion");
  var $headers = $('h3', $accordion);
  $headers.nextUntil('h3').hide();
  $headers.bind('click', function (event) {
    var $this = $(this);
    $this
    .siblings('h3')
    .nextUntil('h3')
    .slideUp()
    .end()
    .end()
    .nextUntil('h3')
    .slideDown();
  });
});