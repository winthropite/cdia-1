$(document).ready(function (event) {
  var gallery = $('#thumbs').galleriffic({
    imageContainerSel: '#slideshow', // The CSS selector for the element within which the main slideshow image should be rendered
    controlsContainerSel: '#controls', // The CSS selector for the element within which the slideshow controls should be rendered
    captionContainerSel: '#caption', // The CSS selector for the element within which the captions should be rendered
    loadingContainerSel: '#loading', // The CSS selector for the element within which should be shown when an image is loading
    autoStart: true
  });
});