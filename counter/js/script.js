$(window).scroll(startCounter);

function startCounter() {
  var oTop = $("#counter-container").offset().top -
        window.innerHeight;
    $(window).off("scroll", startCounter);
    $('.count').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }
      return val;
    }
  }


 // number & coma(,) counter
    a = 0;
    $(window).scroll(function() {
        var oTop = $(".rank__counter").offset().top -
            window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2700,
                    easing: 'swing',
                    step: function(now) {
                        // $(this).text(Math.ceil(now));
                        now = Number(Math.ceil(now)).toLocaleString('en');
                        $(this).text(now);
                    }
                });
            });
            a = 1;
        }
    });

a = 0;
$(window).scroll(function() {
    var oTop = $(".love_counter").offset().top -
        window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2200,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        a = 1;
    }
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


