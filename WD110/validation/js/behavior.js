$(document).ready(function (event) {
  // Get the form.
  var $form = $('form');
  // Attach a submit handler.
  $form.on('submit', function (event) {
    event.preventDefault();
    var $form = $(this);
    var isValid = true;
    // Do some validation!
    var firstName = $form.find(':text').filter('[name="first_name"]');
    if (firstName.val().length == 0) {
      isValid = false;
      firstName.css({
        'background-color': 'pink'
      })
      .focus();
    }
    var $radioGroup = $('#favorite-food');
    var $radioItem = $form.find(':radio').filter('[name="pizza_topping"]:checked');
    if ($radioItem.length == 0) {
      isValid = false;
      $radioGroup
      .css({
        'outline': '1px dotted red'
      });

    }

    if (isValid) {
      this.submit();
    }
  });

});
