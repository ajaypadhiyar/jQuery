$(document).ready(function() {
    $(".slider1").owlCarousel();

    $('.slider2').owlCarousel({
        stagePadding: 50,
        items: 3,
        nav: true,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 3000,
        slideBy: 6,
        dotsEach: true,
    });
});