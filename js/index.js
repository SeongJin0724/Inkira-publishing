$(function () {
  var win = $(window).width();

  $(window).on("resize", function () {
    win = $(this).width();

    if (win > 980) {
      $(".menu").removeAttr("style");
      $(".smenu").removeAttr("style");
    }

    if (win > 785) {
      $(".menu").removeAttr("style");
      $(".smenu").removeAttr("style");
    }
    console.log(win);
  });

  $(".menu>li").on("mouseenter", function () {
    if (win > 785) {
      $(this).addClass("on");
    } else {
      $(".menu>li>a").off();
      $(".menu>li>a").on("click", function () {
        $(".smenu").stop().slideUp();
        $(this).next(".smenu").stop().slideToggle();
      });
    }
  });
  $(".menu>li").on("mouseleave", function () {
    if (win > 785) {
      $(this).removeClass("on");
    }
  });

  $(".menu_icon").on("click", function (e) {
    e.preventDefault();
    $(".menu").fadeToggle();
    $(".menu_icon>a").toggleClass("changed");
    $(".black_screen").toggleClass("black");
  });

  var pos = [];
  var base = -300;

  function save_section_offset() {
    pos = [];
    $("section").each(function () {
      pos.push(parseInt($(this).offset().top));
      pos[0] = 0;
    });
  }
  save_section_offset();

  $(window).scroll(function () {
    const $h = $("header");
    if ($(this).scrollTop() >= 100) {
      $h.addClass("shadow").css({
        height: "100px",
      });
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    $("section").each(function (n) {
      if (scroll >= pos[n] + base) {
        $(this).addClass("on").siblings().removeClass("on");
      }
    });
    console.log(scroll);
  });
  $(window).trigger("scroll");
});
