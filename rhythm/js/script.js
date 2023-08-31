$(document).ready(function() {

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });

    AOS.init();

    $(window).scroll(function() {
        // console.log(windowpos + '--' + pos) ;
        if ($(this).scrollTop() > 550) {
            $('.site--header').addClass("sticky");
        } else {
            $('.site--header').removeClass("sticky");
        }
    });
 

    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
});