$(function(){
    $(window).scroll(function(){
        var aboutWindowScroll = $(this).scrollTop();
        var aboutLimit = $(window).height();
        if(aboutWindowScroll <= aboutLimit){
            $(".display-header h1.fade").css("opacity" , 1 - aboutWindowScroll / aboutLimit);
            $(".display-header h1.fade").css("transform", "translateY(" + (aboutWindowScroll/2) + "px)");
        }
    });
});
