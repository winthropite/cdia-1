jQuery('.item').hover(
  // Hover in.
  function (event) {
    var $item = jQuery(this);
    var $details = $item.find('dl');
    $details.animate({
      'bottom': 0,
      'opacity': 1
    }, 1000);
  },
  // Hover out.
  function (event) {
    var $item = jQuery(this);
    var $details = $item.find('dl');
    $details.animate({
      'bottom': '-100%',
      'opacity': 0
    }, 250);

  }
);


