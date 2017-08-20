var windowWidth = $(window).width();
var windowHeight = $(window).height();

/* Scroll dispatcher
 -------------------------------------------------------------------------- */
var isScrolling = false;
var scrollCheckTimeout = null;
var windowScrollTop = 0;

function scrollDispatcher(e) {
  isScrolling = true;
  clearTimeout(scrollCheckTimeout);
  scrollCheckTimeout = setTimeout(
    function() {
      isScrolling = false;
    },
    100
  );

  windowScrollTop = $(window).scrollTop();
}
$(window).on("scroll", scrollDispatcher);

function scrollParallaxMove() {
  var scrollElements = $(".scroll-parallax");
  if (scrollElements != null) {
    scrollElements.each(function() {
      var element = $(this);
      var offsetTop = element.attr("data-top");
      var offsetBottom = element.attr("data-bottom");

      var level = Number(element.attr("data-level"));
      var amplitude = -windowHeight;
      var movement = amplitude / (5 / level);

      if (offsetTop > windowScrollTop + windowHeight) {
        element.css({
          transform: "translate3d(0, " + -movement * 0.5 + "px, 0)"
        });
        console.log("top");
      } else if (offsetBottom < windowScrollTop) {
        element.css({
          transform: "translate3d(0, " + movement * 0.5 + "px, 0)"
        });
        console.log("bottom");
      } else {
        console.log("bla");

        var start = element.attr("data-start");
        var stop = element.attr("data-stop");
        var percent = (windowScrollTop - start) / (stop - start);
        percent = percent - 0.5;

        var destY = movement * percent;

        var currentY = 0;
        var transform = element.css("transform");
        if (transform != "none")
          currentY = parseFloat(element.css("transform").split(",")[5]);

        if (level > 0)
          var newY = currentY + (destY - currentY) * 0.1;
        else
          var newY = currentY + (destY - currentY) * 0.5;

        element.css({ transform: "translate3d(0, " + newY + "px, 0)" });
      }
    });
  }

  requestAnimationFrame(scrollParallaxMove);
}

requestAnimationFrame(scrollParallaxMove);
