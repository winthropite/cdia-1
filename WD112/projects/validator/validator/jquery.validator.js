jQuery.fn.validator = function () {

  var $inputs = this;

  $inputs.on('focus', function (event) {
    console.log(event.currentTarget);
  });

  $inputs.on('blur', function (event) {
    var $input = $(event.currentTarget);
    var value = $input.val();
    var length = value.length;
    var message, $message, $container;
    // Email validation
    if ($input.attr('type') === 'email') {
      var index = value.indexOf('@');
      if (index > -1 && value[index + 1]) {
        $input.removeClass('invalid');
        // Remove the error message.
        $input.next('.message').remove();
      }
      else {
        $input.addClass('invalid');
        // Add a message to the user to indicate why the field is invalid.
        message = "The value is not a valid email address."
        $container = $('<div class="message error"></div>');
        $container.text(message);
        // Check to see if a message exists before we
        // add another message.
        $message = $input.next('.message');
        if ($message.length === 0) {
          $input.after($container);
        }
      }
    }
    // Validate that the field has at least 10 characters.
    else {
      if (length < 10) {
        $input.addClass('invalid');
        // Add a message to the user to indicate why the field is invalid.
        message = "The field must have more than 10 characters."
        $container = $('<div class="message error"></div>');
        $container.text(message);
        // Check to see if a message exists before we
        // add another message.
        $message = $input.next('.message');
        if ($message.length === 0) {
          $input.after($container);
        }
      }
      else {
        $input.removeClass('invalid');
        // Remove the error message.
        $input.next('.message').remove();
      }
    }
  });

  return this;
};





