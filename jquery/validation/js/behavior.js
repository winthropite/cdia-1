$(document).ready(function (event) {
  $('form').on('submit', function (event) {
    event.preventDefault();
    var $form = $(this);
    var hunkyDory = false;

    if (hunkyDory) {
      this.submit();
    }
  });
});