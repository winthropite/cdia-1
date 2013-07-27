// Register a plugin with jQuery.
jQuery.fn.tooltip = function () {
  // 'this' is the set of selected HTML elements.
  var $tips = this; // $('[data-tooltip]');

  // (1) Add a class of .tooltip-anchor to the element
  // that contains the data-tooltip attribute.

  $tips.addClass('tooltip-anchor');

  // (2) Add a class .tooltip-hint to the text of the tip
  // associated with the .tooltip

  $tips.each(function (index, element) {
    var $tip = $(element);
    var id = $tip.data('tooltip');
    var $hint = $('#' + id);
    $hint.addClass('tooltip-hint');
  });

  // (3) Add some markup, a .tooltip-trigger. This will
  // be the element that toggles the visibility
  // of the .tooltip-hint. Time will tell if this is
  // toggled on hover or click.

  var $trigger = $('<span class="tooltip-trigger">More info</span>');
  var $widgets = $tips
    .wrap('<div class="tooltip"></div>')
    .parent();
  $widgets.append($trigger);

  // (4) Move the .tooltip-hints inside the $widget wrapper
  // for each .tooltip-anchor.

  $tips.each(function (index, element) {
    var $tip = $(element);
    var id = $tip.data('tooltip'); // 'tip-1'
    var $hint = $('#' + id); // #tip-1
    var $widget = $tip.parent();
    $widget.append($hint);

    // (4a) Position the .tooltip-hint in relation to
    // the .tooltip-trigger
    $hint.position({
      'my': 'left bottom',
      'at': 'right top',
      'of': $hint.prev()
    });
  });

  // (5) On activation of the .tooltip-trigger, show the
  // the .tooltip-hint element.

  $('.tooltip-trigger').on('click', function (event) {
    var $hint = $(event.currentTarget).next(); // .tooltip-hint
    $hint.toggleClass('active');
  });

  return this;
};
