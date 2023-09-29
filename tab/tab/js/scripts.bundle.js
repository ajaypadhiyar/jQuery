"use strict";

var ScriptsBundle = ScriptsBundle || {};

$(function () {
  ScriptsBundle = {
    init: function () {
      ScriptsBundle.stickyHeader();
      ScriptsBundle.menutoggle();
      ScriptsBundle.bannerslider();
      ScriptsBundle.portfolioslider();
      ScriptsBundle.testimonialSlider();
      ScriptsBundle.tabNav();
      ScriptsBundle.modal();
    },

    stickyHeader: function () {
      $("header").toggleClass("fixed-header", $window.scrollTop() >= 500);
      if ($(this).scrollTop() > 300) {
        $(".scrolltotop").fadeIn();
      } else {
        $(".scrolltotop").fadeOut();
      }
    },

    menutoggle: function () {
      $(".menu-toggle").click(function () {
        $(this).toggleClass("on");
        $(".navbar").slideToggle();
      });

      // scrool to top
      $(".scrolltotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
      });

      // scrool to bottom
      $(".scrollto").click(function () {
        $("html, body").animate(
          {
            scrollTop: $("#about").offset().top - 150,
          },
          1000
        );
        return false;
      });
    },
    modal: function () {
      const $modal = $("[data-modal]");
      const $close = $("[data-close]");
      const open = "modal-open";

      $modal.on("click", function () {
        const id = $(this).data("modal");
        $("body").addClass(open);
        $(id).addClass("show");
      });

      $close.on("click", function () {
        $("body").removeClass(open);
        $(".modal").removeClass("show");
      });

      $(".closereidrect").on("click", function () {
        $("body").removeClass(open);
        $(".modal").removeClass("show");
      });
    },

    bannerslider: function () {
      $(".main--banner").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        // smartSpeed: 1500,
        // autoHeight: true,
        // autoplay: true,
        // responsiveClass: true,
        // autoplayTimeout: 5000,
      });
    },

    portfolioslider: function () {
      $(".portfolio__slider").owlCarousel({
        items: 2,
        margin: 40,
        loop: true,
        nav: true,
        dots: true,
        // smartSpeed: 1500,
        // autoHeight: true,
        // autoplay: true,
        // responsiveClass: true,
        // autoplayTimeout: 5000,
        responsive: {
          1280: {
            items: 2,
          },
          1024: {
            items: 2,
          },
          640: {
            items: 1,
            margin: 10,
          },
          480: {
            items: 1,
          },
          360: {
            items: 1,
          },
          320: {
            items: 1,
          },
        },
      });
    },

    testimonialSlider: function () {
      $(".testimonial__slider").owlCarousel({
        items: 1,
        margin: 90,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1500,
        autoHeight: true,
        // autoplay: true,
        responsiveClass: true,
        autoplayTimeout: 5000,
        responsive: {
          1280: {
            items: 1,
          },
          1023: {
            items: 1,
          },
          640: {
            items: 1,
            margin: 10,
          },
          480: {
            items: 1,
          },
          360: {
            items: 1,
          },
          320: {
            items: 1,
          },
        },
      });
    },

    tabNav: function () {
      (function ($) {
        $(function () {
          $("#technologies__tabs").laraGemsBestResponsiveTabs();
          $("#technologies__tabs").on(
            "lgTabItem:toogle",
            function (event, previous_item, next_item) {
              console.log("Previous item", previous_item);
              console.log("Next item", next_item);
            }
          );
        });
      })(jQuery);
    },
  };

  // animation

  var $window = $(window);

  $window.on("scroll", ScriptsBundle.stickyHeader);
  $(document).ready(ScriptsBundle.init);
  new WOW().init();
});

$(window).scroll(startCounter);

function startCounter() {
  var oTop = $(".about_bg").offset().top - window.innerHeight;
  $(window).off("scroll", startCounter);
  $(".counter").each(function () {
    var $this = $(this);
    jQuery({
      Counter: 0,
    }).animate(
      {
        Counter: $this.text().replace(/,/g, ""),
      },
      {
        duration: 3000,
        easing: "swing",
        step: function () {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function () {
          $this.text(commaSeparateNumber(this.Counter));
          // alert('finished');
        },
      }
    );
  });

  function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
    }
    return val;
  }
}
