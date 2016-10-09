
$(function () {
  var width = 720;
  var animationSpeed = 1200;
  var hold = 2500;
  var currentSlide = 1;
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function resumeSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, hold);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', pauseSlider).on('mouseleave', resumeSlider);

  resumeSlider();
});
