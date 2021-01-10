// Scrolling parallax
/* SCROLLING PARALLAX */
/** Vertical scrolling **/
$(window).scroll(function() {
  $('.hero-header-container').css('transform', 'translateY(' + (window.pageYOffset * 0.24) + 'px)');
});

/** Horizontal scrolling **
$(window).scroll(function() {
  $('.green-box').css('transform', 'translateX(' + (window.pageYOffset * -0.2) + 'px)');
});

// Update horizontal parallax speed based on windows' size. Default speed would be -0.4.
function updateContainer() {
  var $containerWidth = $(window).width();
  if ($containerWidth <= 1083) {
  $('.orange-box').css('transform', 'translateX(' + (window.pageYOffset * -0.3) + 'px)');
  }
  else {
      $('.orange-box').css('transform', 'translateX(' + (window.pageYOffset * -0.8) + 'px)');
  }
}
$(document).ready(function () {
  updateContainer();
  $(document).scroll(function () {
      updateContainer();
  });
  $(window).resize(function() {
      updateContainer();
  });
});
*/
// Progress top-bar
window.addEventListener('scroll', function() {
  document.documentElement.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);