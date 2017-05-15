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
            $("#video-parallax").css("transform", "translateY(-" + (windowScroll/3) + "px)");
            $("#top-section .text").css("opacity" , 1 - windowScroll / limit);
            $("#top-section .text").css("transform", "translateY(" + (windowScroll/2) + "px)");
            if(windowScroll >= 50){
                $("header").addClass("active");
            }else{
                $("header").removeClass("active");
            }
        }
    });
    /* Top Section & Header End */

    /* Menu Button Start */
    $("header a.menu-button").click(function(e){
        e.preventDefault();
        $("header .divider .menu").slideToggle();
    });
    /* Menu Button End */

    /* Pop-up Start */
    $(".button-price").click(function(e){
        $("#dark-filter").fadeToggle("fast");
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
    $("#dark-filter").click(function(){
        $(this).fadeOut("fast");
    });
    $("#dark-filter #pop-up").click(function(e){
        e.stopPropagation();
    });
    /* Pop-up End */
});
