// $('#slider .slides').animate({'margin-left': -720}, 1000);

$(function () {
  setInterval(function() {
    $('#slider .slides').animate({'margin-left': '-=720px'}, 1000);
  }, 3000);
});
