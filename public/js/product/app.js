var owl = $('#owl-carousel');

owl.owlCarousel({
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
          items: 1,
          slideBy: 4,
          touchDrag: true
      },
      768: {
          items: 4
      }
    },
    dots: false,
    loop: true,
    autoplay: 5000,
    slideBy: 4,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false
});

owl.on('changed.owl.carousel', function(event) {
        
    $('.categories h3').each(function(){
        if ($(this).data('order') === (event.item.index/4)) {
            $(this).addClass('active'); 
        }
        else {
            $(this).removeClass('active');
        }
        
        if (event.item.index - 1 === 7) {
            $('ol.testimonials li a:first').addClass('active');
        }
        
        
    });
    
    console.log(event.item.index);
});

$('.categories h3').on('click', function(){
   owl.trigger('to.owl.carousel', [($(this).data('order')*4)-4, 100, true]);
//    alert($(this).data('order'));
});

$('.arrow-left').on('click', function(){
   owl.trigger('prev.owl.carousel', [100]); 
});

$('.arrow-right').on('click', function(){
   owl.trigger('next.owl.carousel', [100]); 
});


//ONE PAGE SCROLL
//========================================
var darkPage = false;
var os = getMobileOperatingSystem();

if (os == "Mac" || os == "Window") {
    $('main').onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        animationTime: 800,
        loop: false,
    });
}
else {
    var scrollcss = window.location.origin + "/css/onepage-scroll.css";
    var styleSheets = document.styleSheets;
    var scripts = document.scripts;
    for (var i = 0; i < styleSheets.length; i++) {
        if (styleSheets[i].href == scrollcss) {
            styleSheets[i].disabled = true;
            break;
        }
    }
    
    $('section').removeClass('wrapper');

}

$('#demo_phone_no').intlTelInput({
        utilsScript: "js/utils.js?4",
        nationalMode: false,
        autoPlaceholder: false,
        preferredCountries: ["hk", "ph", "fr"]
    });



function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
        return 'iOS';

      }
      else if( userAgent.match( /Android/i ) )
      {

        return 'Android';
      }
      else if(userAgent.match(/Window/i))
      {
          return 'Window';
      }
      else if(userAgent.match(/Macintosh/i))
      {
          return 'Mac';
      }
      else
      {
        return 'unknown';
      }
    }