(function ($) {

  $.fn.petitionsListMaker = function (data) {

    this.each(function () {

      var $root = $(this);

      for (var i = 0; i < data.length; i++) {
        // Create a wrapper.
        var $wrapper = $('<div></div>')
          .addClass('item');
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

        // Get the deadline time.
        // The deadline is return in seconds. Multiply by 1000
        // to turn this into milliseconds.
        var deadline = data[i].deadline * 1000;
        // Get the current time from the Date object.
        var now = (new Date()).getTime();
        // Subtract the current time from deadline time.
        // Divide by the number of milliseconds in a day to get
        // number of days between the deadline and now.
        var remaining = (deadline - now) / (24 * 60 * 60 * 1000);
        remaining = Math.floor(remaining * 10) / 10;
        // Create a time tag with the formatted time remaining.
        var dayText = (remaining === 1) ? 'day' : 'days' ;
        var $deadline = $('<time>' + remaining + ' ' + dayText + ' remaining</time>');
        // Append the time tag into the wrapper
        $deadline.appendTo($wrapper);
        // Append the wrapper to the root.
        $wrapper.appendTo($root);

      }

    });



    return this;
  };

}(jQuery));
