/* Custom Script */

/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    center: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

/* Animate On Scroll */
AOS.init();

// fixed footer
var siteFooter = document.getElementById('site-footer');
if ((siteFooter.offsetTop + siteFooter.offsetHeight) < window.innerHeight) {
    siteFooter.classList.add('fixed-bottom', 'bottom-0', 'left-0', 'w-full');
}

/* Scroll Top */
$(document).ready(function() {
    "use strict";
    var offSetTop = 300;
    var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

});