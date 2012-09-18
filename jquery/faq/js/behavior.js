$(document).ready(function (event) {
  $questions = $('h2');
  $questions.nextUntil('h2').hide();
  $questions.click(function (event) {
    var $q = $(this);
    $q.nextUntil('h2').slideToggle();
  });
});