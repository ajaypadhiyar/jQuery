$(document).ready(function() {
    $(".btn-popup").click(function() {
        $($(this).attr('href')).show();
        $('body').addClass('popup-on');
    });

    $(".btn-close").click(function() {
        $('body').removeClass('popup-on');
        $(this).parent().parent().hide();
    });
});