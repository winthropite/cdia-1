$(document).ready(function (event) {
  $('img').hover(
    function (event) {
      $(this).css({
        'outline': '3px dotted red'
      });
      console.log('hover in');
    },
    function (event) {
      $(this).css({
        'outline': 'none'
      });
      console.log('hover out');
    }
  );
});