function scrollTo(sectionClass) {
    $('html,body').animate({
        scrollTop: $(sectionClass).offset().top-$(".menu-bar").height()
    }, 'slow');
}

function isOver(elem){
    var elemTop = $(elem).offset().top,
    elemHeight = $(elem).outerHeight(),
    winHeight = $(window).height(),
    scrollPos = $(this).scrollTop(), menuHeight = $(".menu-bar").outerHeight();
    if(scrollPos+menuHeight > elemTop && scrollPos+menuHeight < elemTop+elemHeight){
        return true;
    }else{
        return false;
    }
}
function checkSendMessageFields() {
        var tf = true;
        var emailReg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if ($('#fullName').val() === "") {
            $('span#fullName_error').show();
            tf = false;
        } else {
            $('span#fullName_error').hide();
        }

        if ($('#email').val() === "") {
            $('span#email_error').show();
            tf = false;
        } else {
            if (!emailReg.test($('#email').val())) {
                $('span#email_error').html('Please enter a valid E-mail address');
                $('span#email_error').show();
            } else {
                $('span#email_error').hide();
            }
        }
        if (!tf) {
            scrollToClass('.contact-form');
        }
        return tf;
    }
$(document).ready(function(){
    $(".navbar-toggle").on("click",function(){
        if(isOver($(".hero-video")) && $("#navbar").attr("aria-expanded")!=="true"){
            $(".menu-bar").addClass("background-blue");
        }else{
            if(isOver($(".even-row")[0])){
               $(".menu-bar").addClass("background-blue");
            }else{
               if(isOver($(".even-row")[1])){
                   $(".menu-bar").addClass("background-blue");
               }else{
                   if (isOver($(".even-row")[2])){
                       $(".menu-bar").addClass("background-blue");
                   }else{
                       $(".menu-bar").removeClass("background-blue");
                   }
               }
            }
        }
    })
    
    $('input[name="demo_phone_no"]').intlTelInput({
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.6/js/utils.js",
        nationalMode: false,
        autoPlaceholder: false,
        preferredCountries: ["hk", "ph", "fr"]
    });
    
    //setup carousel
    $('.owl-carousel').owlCarousel({
        margin:5,
        loop:true,
        autoWidth:false,
        items:1,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true
    });
    
    $(".down-arrow").on("click",function(){
        scrollTo(".intro");
    });
    $(".btn-findoutmore").on("click",function(){
        scrollTo(".intro");
    });
    //show features
    $(".btn-knowmore").on("click",function(){
        $(".features").addClass("show");
        scrollTo(".intro");
    })
    //hide features
    $(".back-arrow,.features .back").on("click",function(){
        $(".features").removeClass("show");
    })
    $(window).resize(function(){
//        $(".features").css("min-height",$(".intro").outerHeight()-180+"px");
//        $(".product-intro > iframe").css("height",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
//        $(".mac-flat-middle").css("top",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
//        $(".mac-flat-bottom").css("top",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
    });
//    $(".product-intro > iframe").css("height",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
//    $(".features").css("min-height",$(".intro").outerHeight()-180+"px");
//    $(".mac-flat-middle").css("top",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
//    $(".mac-flat-bottom").css("top",Math.trunc($(".product-intro > iframe").outerWidth() /1.78));
    //switch tap
    $(".tap").on("click",function(e){
        console.log(e.currentTarget.textContent);
        $(".tap.active").addClass("inactive");
        $(".tap.active").removeClass("active");
        $(e.currentTarget).removeClass("inactive");
        $(e.currentTarget).addClass("active");
        var clickedAt = e.currentTarget.textContent.toLowerCase();
        $(".tap-content.active").addClass("inactive");
        $(".tap-content.active").removeClass("active");
        $(".tap-content."+clickedAt).removeClass("inactive");
        $(".tap-content."+clickedAt).addClass("active");
    })
    $(".tap-switch").on("change",function(e){
        console.log(e.currentTarget.value);
        var clickedAt = e.currentTarget.value.toLowerCase();
        $(".tap-content.active").addClass("inactive");
        $(".tap-content.active").removeClass("active");
        $(".tap-content."+clickedAt).removeClass("inactive");
        $(".tap-content."+clickedAt).addClass("active");
    });
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        if (checkSendMessageFields()) {
            var form = $(this);
            var data = {
                fullName: $("#fullName").val(),
                email: $("#email").val(),
                company: $("#company").val(),
                message: $("#message").val()
            };
            $.ajax({
                url: form.attr('action'),
                dataType: 'json',
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify(data),
                accepts: "application/json",
                error: function(req, err) {
                    console.log('error message: ' + err);
                    $(".form-message-box").html(err + " occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
                    $(".form-message-box").animate({ "opacity": "1", "color": "red" }, "slow").delay(15000).animate({ "opacity": "0" }, 2000);
                },
                success: function(json) {
//                    ga('send', 'event', "signup", "submitted", "Signup-form(contact-form)", document.referrer);
                    $("#contact-form")[0].reset()
                    $(".form-message-box").html("Successful!");
                    $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);

//                    _fbq.push('track', 'CompleteRegistration');
                }
            });
        }
    });
})

//Progress Bar
$(window).scroll(function(){
    var winHeight = $(window).height();
    var scrollPos = $(this).scrollTop();
    var docHeight = $(document).height(); 
    $(".top-progress-bar").css("width",(scrollPos)/(docHeight-winHeight)*100 +"%");
})
//Handle Menu bar color change
$(window).scroll(function() {
   if(isOver($(".even-row")[0])){
       $(".menu-bar").addClass("background-blue");
   }else{
       if(isOver($(".even-row")[1])){
           $(".menu-bar").addClass("background-blue");
       }else{
           if (isOver($(".even-row")[2])){
               $(".menu-bar").addClass("background-blue");
           }else{
               $(".menu-bar").removeClass("background-blue");
           }
       }
   }
   if(isOver($(".odd-row")[0])){
       $(".menu-bar").addClass("background-white");
       $(".menu-bar .logo").attr("src","./img/talkpush-logo-primary.png");
       $(".menu-bar .logo-tagline").addClass("text-blue");
       $("#navbar > ul > li > a").css("color","#323a45");
       
   }else{
       if(isOver($(".odd-row")[1])){
           $(".menu-bar").addClass("background-white");
           $(".menu-bar .logo").attr("src","./img/talkpush-logo-primary.png");
           $(".menu-bar .logo-tagline").addClass("text-blue");
           $("#navbar > ul > li > a").css("color","#323a45");
       }else{
           $(".menu-bar").removeClass("background-white");
           $(".menu-bar .logo").attr("src","./img/talkpush-logo-secondary.png");
           $(".menu-bar .logo-tagline").removeClass("text-blue");
           $("#navbar > ul > li > a").css("color","");
       }
   }
});