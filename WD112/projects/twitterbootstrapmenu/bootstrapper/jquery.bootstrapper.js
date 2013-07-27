jQuery.fn.bootstrapper = function (opts) {
    // Process the options.
    var defaults = {
      'expand': 'Expand',
      'collapse': 'Collapse',
      'extraClass': ''
    };

    var options = $.extend(defaults, opts);

    // This variable exists at the top-most scope of our plugin function.
    var $root;
    // Process menus; mark as processed; add expand button.
    function process ($menu) {
      // Use the .bootstrap-menu class for theme styling.
      $menu.addClass('bootstrapper-processed bootstrapper-menu bootstrapper-clearfix');
      // Wrap the menu.
      $menu.wrap('<div class="bootstrapper ' + options.extraClass + '"></div>');
      // Assign the value of $root, which is declared above.
      $root = $menu.parent();
      // Insert a button into our expando plugin.
      $root.prepend('<button>' + options.expand + '</button>');
    }
    // Save a reference to the menus.
    var $menu = this;
    // Initiate menu processing.
    process($menu);

    // Attach a click handler.
    $root.on('click', 'button', function () {
      var $button = $(this);
      var $menu = $button.next();
      var isOpen = $menu.hasClass('open');

      // Toggle the menu open or closed.
      if (isOpen) {
        $menu.removeClass('open');
        $menu.slideUp();
        $button.text(options.expand);
      }
      else {
        $menu.addClass('open');
        $menu.slideDown();
        $button.text(options.collapse);
      }
    });

    return this;
  };
