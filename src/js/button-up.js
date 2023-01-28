(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('button-up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('button-up-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.button-up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();