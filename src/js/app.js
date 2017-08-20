import "slick-carousel";
/*import "bootstrap/js/modal";*/
$(document).ready(function() {
  $(
    ".js-slider-testimonials"
  ).slick({ infinite: !0, speed: 600, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2000, dots: false, arrows: false });
});

/*HEADER JS*/
$(document).ready(function() {
  const breakpoint = 1024;

  let selectors = {
    header: ".js-m-header",
    navigation: ".js-main-nav",
    navigationInHeader: ".js-desktop-nav",
    menuToggle: ".js-menu-toggle",
    body: "body"
  };

  let dynamicClasses = {
    body: "overflow-hidden",
    lateralPanel: "speed-in",
    menuToggle: "m-header__menu-toggle_opened",
    lateralPanelOutCanvas: "m-nav_out-canvas"
  };

  function togglePanelVisibility(panel, body, menuToggle) {
    let $panel = $(panel);
    let $body = $(body);
    let $menuToggle = $(menuToggle);

    if ($panel.hasClass(dynamicClasses.lateralPanel)) {
      $menuToggle.removeClass(dynamicClasses.menuToggle);
      $panel.removeClass(dynamicClasses.lateralPanel);
      $body.removeClass(dynamicClasses.body);
    } else {
      $menuToggle.addClass(dynamicClasses.menuToggle);
      $panel.addClass(dynamicClasses.lateralPanel);
      $body.addClass(dynamicClasses.body);
    }
  }

  function moveNav(navigation, breakpoint) {
    let $navigation = $(navigation);

    $navigation.detach();

    if (window.innerWidth >= breakpoint) {
      $navigation.removeClass(dynamicClasses.lateralPanelOutCanvas);
      $navigation.appendTo(selectors.navigationInHeader);
    } else {
      $navigation.addClass(dynamicClasses.lateralPanelOutCanvas);
      $navigation.insertAfter(selectors.header);
    }
  }

  function moveContactBtn() {
    let $contactBtn = $(".js-btn-contact");

    $contactBtn.detach();

    if (window.innerWidth >= breakpoint) {
      $contactBtn.insertAfter(selectors.navigationInHeader);
    } else {
      $(selectors.navigation).children("ul").append($contactBtn);
      $contactBtn.wrap("<li/>");
    }
  }

  if ($(window).width() <= breakpoint - 15) {
    moveNav(selectors.navigation, breakpoint);
    moveContactBtn();
  }

  $(window).on("resize", function() {
    moveNav(selectors.navigation, breakpoint);
    moveContactBtn();

    if (
      window.innerWidth >= breakpoint &&
        $(selectors.navigation).hasClass(dynamicClasses.lateralPanel)
    ) {
      $(selectors.navigation).removeClass(dynamicClasses.lateralPanel);
    }
  });

  $(selectors.menuToggle).on("click", function(event) {
    event.preventDefault();
    togglePanelVisibility(
      selectors.navigation,
      selectors.body,
      selectors.menuToggle
    );
  });
});
