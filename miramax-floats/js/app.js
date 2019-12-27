$(document).ready(function() {
     // FIXED NAVIGATION
     $('.js--watch-now').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
    // SCROLL ON BUTTONS
    $('.js--scroll-to-movies').click(function() {
        $('html, body').animate({scrollTop: $('.js--titles').offset().top}, 1000);
    });
    //
    $('#js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--watch-now').offset().top}, 1000);
    });
    // NAVIGATION SCROLL
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      }); 
    // ANIMATIONS ON SCROLL
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    //
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    //
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    //
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    //
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    // ANIMATION BURGER
    $('.js--burger').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--burger');
        nav.slideToggle(200);
        if (icon.hasClass('burger')) {
            icon.addClass('burger-close')
            icon.removeClass('burger');
        } else  {
            icon.addClass('burger')
            icon.removeClass('burger-close');
        }
    });
});