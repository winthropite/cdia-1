(function ($) {

  $.fn.petitionsListMaker = function (data) {

    this.each(function () {

      var $root = $(this);

      for (var i = 0; i < data.length; i++) {
        // Create a wrapper.
        var $wrapper = $('<div></div>');
        // Create an h1 with the title.
        var $title = $('<h1 class="title">' + data[i].title + '</h1>');
        // Append the title to the wrapper.
        $title.appendTo($wrapper);
        // Create a time element.
        var time = data[i].created * 1000;

        time = new Date(time);

        var $created = $('<time datetime="' + time.toISOString() + '">' + time.toDateString() + '</time>');
        // Append the time element to the wrapper.
        $created.appendTo($wrapper);

        // GOAL: Trying to print the amount of time left
        // on this petition from now until the deadline.

        // Get the deadline time

        // Get the current time from the Date object. We
        // probably have to do something to get a number
        // in seconds, just like our deadline. Wouldn't
        // want to subtract seconds from milliseconds!

        // Subtract the current time from deadline time

        // Reformat in human language

        // Create a time tag with the formatted date.

        // Append the time tag into the wrapper

        // Append the wrapper to the root.
        $wrapper.appendTo($root);

      }

    });



    return this;
  };

}(jQuery));
