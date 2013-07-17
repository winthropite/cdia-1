function pageLoad (event) {
  var $h2 = $('h2');
  $h2
  .siblings()
  .not('h2')
  .hide();
  $h2.click(function (event) {
    var $this = $(this);
    $this
    .toggleClass('active')
    .nextUntil('h2')
    .slideToggle();
  });
}

$(document).ready(pageLoad);