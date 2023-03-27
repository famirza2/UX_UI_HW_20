$(document).ready(function() {
  var offset = 1290;
  var duration = 300;
  var fadeOutDuration = 400;
  var fadeInDuration = 200;
  var controlHTML = '<img src="images/Scroll-To-Top-Blue-Arrow.png"/>';


  $('<div>', {
    id: 'back-to-top',
    html: controlHTML,
    css: {
      position: 'fixed',
      bottom: '60px',
      right: '10px',
      cursor: 'pointer',
      display: 'none'
    },
    click: function() {
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
    }
  }).appendTo('body');


  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#back-to-top').fadeIn(fadeInDuration);
    } else {
      $('#back-to-top').fadeOut(fadeOutDuration);
    }
  });
});