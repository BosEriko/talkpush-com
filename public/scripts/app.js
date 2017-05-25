$(function(){
    /* Animation on Scroll Start */
    AOS.init({
      disable: window.innerWidth < 961
    })
    /* Animation on Scroll End */

    /* Smooth Scroll Start */
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
    $.preloadImages("./images/assistant/1.gif");
    $.preloadImages("./images/assistant/2.gif");
    $.preloadImages("./images/assistant/3.gif");
    /* Preload Images End*/

    /* Top Section & Header Start */
    if($(this).scrollTop() >= 50){
        $("header").addClass("active");
    }else{
        $("header").removeClass("active");
    }
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
        var limit = $(window).height();
        if(windowScroll <= limit){
            $("#top-section .text").css("opacity" , 1 - windowScroll / limit);
            $("#top-section .text").css("transform", "translateY(" + (windowScroll/2) + "px)");
            if($("#video-parallax video").get(0).paused)
                $("#video-parallax video").get(0).play();
            if(windowScroll >= 50){
                $("header").addClass("active");
            }else{
                $("header").removeClass("active");
            }
        }else{
            if(!($("#video-parallax video").get(0).paused))
                $("#video-parallax video").get(0).pause();
        }
    });
    /* Top Section & Header End */

    /* Menu Button Start */
    $("header a.menu-button").click(function(e){
        e.preventDefault();
        $("header .divider .menu").slideToggle();
    });
    /* Menu Button End */

    /* Statistics Side Details Width Start */
    function resizeStatsSideDetails(){
        $(".stats .st-side-details span.rotate").css("width", $(".stats .st-graph").height());
    }
    resizeStatsSideDetails();
    $(window).resize(function(){
        resizeStatsSideDetails();
    });
    /* Statistics Side Details Width Start */

    /* Pop-up Start */
    $(".button-price").click(function(e){
        $("#dark-filter").fadeToggle("fast");
        $("#dark-filter .pp-price-section").css("display", "block");
        $("#dark-filter .we-chat-icon").css("display", "none");
        e.preventDefault();
    });
    $("#we-chat-button").click(function(e){
        $("#dark-filter").fadeToggle("fast");
        $("#dark-filter .we-chat-icon").css("display", "block");
        $("#dark-filter .pp-price-section").css("display", "none");
        e.preventDefault();
    });
    $("#dark-filter .close-button").click(function(e){
        $("#dark-filter").fadeOut("fast");
        e.preventDefault();
    });
    $(".button-price#starter").click(function(){
        $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Starter Pack</span>");
    });
    $(".button-price#business").click(function(){
        $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Business Pack</span>");
    });
    $(".button-price#enterprise").click(function(){
        $("#dark-filter .title").html("Email Quote for <span style='font-weight: bold'>Enterprise Pack</span>");
    });
    $("#we-chat-button").click(function(){
        $("#dark-filter .title").html("<span style='font-weight: bold'>WeChat QR Code</span>");
    });
    $("#dark-filter").click(function(){
        $(this).fadeOut("fast");
    });
    $("#dark-filter #pop-up").click(function(e){
        e.stopPropagation();
    });
    /* Pop-up End */

    /* Assistant Section Play Videos Start */
    $(".iphone #play-1").click(function(e){
        $("#video-1").attr("src","./images/assistant/1.gif");
        $(this).fadeOut("fast");
        e.preventDefault();
    });
    $(".iphone #play-2").click(function(e){
        $("#video-2").attr("src","./images/assistant/2.gif");
        $(this).fadeOut("fast");
        e.preventDefault();
    });
    $(".iphone #play-3").click(function(e){
        $("#video-3").attr("src","./images/assistant/3.gif");
        $(this).fadeOut("fast");
        e.preventDefault();
    });
    /* Assistant Section Play Videos End */
});
