$(document).ready(function (event) {


  $('img').hover(
    // Hover in.
    function (event) {
      $(this).css({
        'opacity': '0.75',
        '-webkit-transition-property': '-webkit-transform, opacity',
        '-webkit-transition-duration': '0.25s, 0.5s',
        '-webkit-transition-timing-function': 'ease-out, ease-out',
        '-webkit-transform': 'scale(2)'
      });
    },
    // Hover out.
    function (event) {
      $(this).css({
        'opacity': '1',
        '-webkit-transform': 'scale(1)'
      });
    }
  );


});