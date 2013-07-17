(function ($) {
  $.fn.galleryBox = function (options) {

    var $root = this
      .addClass('gallerybox');

    // Create an unordered list.

    var $ul = $('<ul class="gallerybox-wrapper">');

    // Select the images and wrap them
    // in list item tags.

    var $images = $root.children('img')
      .wrap('<li class="thumbnail">')
      .parent();

    // Move the list item tags into
    // the unordered list.

    $ul = $images
      .wrapAll($ul)
      .parent();

    // Need a div to display the larger image.

    var $viewer = $('<div class="viewer">');

    // Append the viewer to our plugin.

    $root.prepend($viewer);

    // Place the first thumbnail image in the large
    // image container on load.
    var $first = $images.first();
    insertImage($first);

    // Need a click handler on the thumbnails that
    // replaces the large image with the selected image.

    $root.on('click', '.thumbnail', function (event) {
      // Get the image tag from the thumbnail.
      var $li = $(this);
      insertImage($li);
    });

          // Handle key presses.
    $(document).on('keydown', function (event) {
      var $active = $root.find('.thumbnail.active');
      switch (event.keyCode) {
        // Left.
        case 37:
          var $prev = $active.prev();
          if (!$prev.length) {
            $prev = $root.find('.thumbnail').last();
          }
          insertImage($prev);
          break;
        // Up
        case 38:
          var $up = $root.find('.thumbnail').first();
          insertImage($up);
          break;
        // Right.
        case 39:
          var $next = $active.next();
          if (!$next.length) {
            $next = $root.find('.thumbnail').first();
          }
          insertImage($next);
          break;
        // Down
        case 40:
          var $last = $root.find('.thumbnail').last();
          insertImage($last);
          break;
        default:
          console.log('no key');
      }
    });

    // Replace the large image with the image that corresponds
    // to the selected thumbnail.

    function insertImage ($thumbnail) {
      var $img = $thumbnail
        .children('img')
        .clone();
      // Set the opacity to zero. We'll trigger a CSS animation after the image
      // is inserted.
      // Replace the image in the viewer with the
      // image that was clicked.
      $img.addClass('added');
      $viewer.html($img);

      // Remove the added class in the next animation frame.
      window.setTimeout(function () {
        $img.removeClass('added');
      }, 0);

      // Manage active thumbnail
      $thumbnail
        .addClass('active')
        .siblings()
        .removeClass('active');

    }
    return this;
  };
}(jQuery));
