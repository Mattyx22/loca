$(document).ready(function() {
    $(window).scroll(function() {
        var height = $('main').height();
        console.log(height);
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= height - 40) {
            $('.bg-light').addClass('solid-nav', 1000, "easeOutBounce");
        } else {
            $('.bg-light').removeClass('solid-nav');
        }
    });
  });