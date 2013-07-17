(function ($) {

/**
   * Accepts a structured twitter data object. Returns an HTML representation
   * of the data.
   *
   * @param Object tweetData
   *   An object with the following keys:
   *     - from_user: the username.
   *     - created_at: the timestamp that the tweet was created.
   */
  function formatTweet (tweetData) {
    var $tweet = $('<div class="tweet"></div>');
    // Print the user name.
    var name = tweetData.from_user;
    // Append the name to the list.
    $tweet.append($('<p>' + name + '</p>'));
    // Get the created date.
    var date = tweetData.created_at;
    $tweet.append($('<time datetime="' + date + '">' + date + '</time>'));

    return $tweet;
  }

  var methods = {
    init: function (options) {
      return this.each(function () {
        var $wrapper = $(this);
        // Create a container for the tweets.
        $wrapper.append('<div class="tweets-list"></div>');

        // Get a list of the results, formatted for insertion into the DOM.
        var results = data.results;
        for (var i = 0, il = results.length; i < il; i++) {
          var $tweet = formatTweet(results[i]);
          $wrapper.find('.tweets-list').append($tweet);
        }
      });
    },
    load: function (tweets) {
      return this.each(function () {
        console.log(this);
        console.log('from the load method', tweets || 'no tweets provided');
      });
    },
    save: function (tweets) {
      return this.each(function () {
        console.log(this);
        console.log('from the save method', tweets || 'no tweets provided');
      });
    }
  };

  $.fn.twitterPlugin = function (method) { // 'load'
    if (methods[method]) {
      var args = Array.prototype.slice.call(arguments, 1);
      console.log(arguments);
      return methods[method].apply(this, args);
    }
    else {
      return methods.init.apply(this, arguments);
    }
  };

}(jQuery));
