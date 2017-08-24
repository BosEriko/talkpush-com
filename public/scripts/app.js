$(function() {
  /* Animation on Scroll Start */
  AOS.init({
    disable: window.innerWidth < 961
  })
  /* Animation on Scroll End */

  /* Smooth Scroll Start */
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  /* Smooth Scroll End */

  /* Preload Images Start */
  $.preloadImages = function() {
    for (var i = 0; i < arguments.length; i++) {
      $("<img />").attr("src", arguments[i]);
    }
  }
  $.preloadImages("./images/logo-black.png");
  $.preloadImages("https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/1.gif");
  $.preloadImages("https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/2.gif");
  $.preloadImages("https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/3.gif");
  /* Preload Images End*/

  /* Top Section & Header Start */
  if ($(this).scrollTop() >= 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    var limit = $(window).height();
    if (windowScroll <= limit) {
      $("#top-section .text").css("opacity", 1 - windowScroll / limit);
      $("#top-section .text").css("transform", "translateY(" + (windowScroll / 2) + "px)");
      if ($("#video-parallax video").length) {
        if ($("#video-parallax video").get(0).paused) {
          $("#video-parallax video").get(0).play();
        }
      }
      if (windowScroll >= 50) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
    } else {
      if ($("#video-parallax video").length) {
        if (!($("#video-parallax video").get(0).paused)) {
          $("#video-parallax video").get(0).pause();
        }
      }
    }
  });
  /* Top Section & Header End */

  /* Menu Button Start */
  $("header a.menu-button").click(function(e) {
    e.preventDefault();
    $("header .divider .menu").slideToggle();
  });
  /* Menu Button End */

  /* Statistics Side Details Width Start */
  function resizeStatsSideDetails() {
    $(".stats .st-side-details span.rotate").css("width", $(".stats .st-graph").height());
  }
  resizeStatsSideDetails();
  $(window).resize(function() {
    resizeStatsSideDetails();
  });
  /* Statistics Side Details Width Start */

  /* Pop-up Start */
  $(".button-price").click(function(e) {
    $("#dark-filter").fadeToggle("fast");
    $("#dark-filter .pp-price-section").css("display", "block");
    $("#dark-filter .we-chat-icon").css("display", "none");
    $("#dark-filter .demo-call-section").css("display", "none");
    e.preventDefault();
  });
  $("#we-chat-button").click(function(e) {
    $("#dark-filter").fadeToggle("fast");
    $("#dark-filter .we-chat-icon").css("display", "block");
    $("#dark-filter .pp-price-section").css("display", "none");
    $("#dark-filter .demo-call-section").css("display", "none");
    e.preventDefault();
  });
  $("#demo-call-button").click(function(e) {
    $("#dark-filter").fadeToggle("fast");
    $("#dark-filter .demo-call-section").css("display", "block");
    $("#dark-filter .we-chat-icon").css("display", "none");
    $("#dark-filter .pp-price-section").css("display", "none");
    e.preventDefault();
  });
  $("#accelerate-demo").click(function(e) {
    $("#dark-filter").fadeToggle("fast");
    $("#dark-filter .accelerate-form").css("display", "block");
    $(".accelerate-data").hide();
    e.preventDefault();
  });
  $("#dark-filter .close-button").click(function(e) {
    $("#dark-filter").fadeOut("fast");
    e.preventDefault();
  });
  $(".button-price#starter").click(function() {
    $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Starter Pack</span>");
  });
  $(".button-price#business").click(function() {
    $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Business Pack</span>");
  });
  $(".button-price#enterprise").click(function() {
    $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Enterprise Pack</span>");
  });
  $("#we-chat-button").click(function() {
    $("#dark-filter .title").html("<span style='font-weight: bold'>Via WeChat</span>");
  });
  $("#demo-call-button").click(function() {
    $("#dark-filter .title").html("<span style='font-weight: bold'>Via Call</span>");
  });
  $("#dark-filter").click(function() {
    $(this).fadeOut("fast");
  });
  $("#dark-filter #pop-up").click(function(e) {
    e.stopPropagation();
  });
  /* Pop-up End */

  /* Assistant Section Play Videos Start */
  $(".iphone #play-1").click(function(e) {
    $("#video-1").attr("src", "https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/1.gif");
    $(this).fadeOut("fast");
    e.preventDefault();
  });
  $(".iphone #play-2").click(function(e) {
    $("#video-2").attr("src", "https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/2.gif");
    $(this).fadeOut("fast");
    e.preventDefault();
  });
  $(".iphone #play-3").click(function(e) {
    $("#video-3").attr("src", "https://dr5ehd0u99lu0.cloudfront.net/microsites/talkpush/3.gif");
    $(this).fadeOut("fast");
    e.preventDefault();
  });
  /* Assistant Section Play Videos End */

  /* Other Page Header Text Fade Start */
  $(window).scroll(function() {
    var otherPageWindowScroll = $(this).scrollTop();
    var otherPageLimit = $(window).height();
    if (otherPageWindowScroll <= otherPageLimit) {
      $(".display-header .fade").css("opacity", 1 - otherPageWindowScroll / otherPageLimit);
      $(".display-header .fade").css("transform", "translateY(" + (otherPageWindowScroll / 2) + "px)");
    }
  });
  /* Other Page Header Text Fade End */

  /* Customer Shadow Start */
  $(".customer-dimension-box").has(".item.preview").hover(function() {
    $("#customer-shadow").fadeIn("fast");
    $(this).find(".item.preview").fadeIn("fast");
  }, function() {
    $("#customer-shadow").fadeOut("fast");
    $(this).find(".item.preview").fadeOut("fast");
  });
  /* Customer Shadow End */

  /* Typing Start */
  if($(".accelerate-type").length){
    var options = {
      strings: [
        "I can <div class='underline'>interview 215 candidates per day</div>",
        "I can <div class='underline'>have 1,251 conversations at once</div>",
        "I can <div class='underline'>remember 1,262,726 names</div>",
        "I can <div class='underline'>schedule 172 interviews per day</div>",
        "I am an <div class='underline'>#augmentedrecruiter</div>",
      ],
      typeSpeed: 75,
      showCursor: 0
    }

    var typed = new Typed(".accelerate-type", options);
  }
  /* Typing End */

  /* Testimonial Slide Start */
  var testimonialBoxWidth = Math.floor($("#testimonial-section .divide").width() / 3)
  $("#testimonial-section .divide .box-holder").css({
    "display": "inline-block",
    "width": testimonialBoxWidth,
  })
  /* Testimonial Slide End */

});
