
    
    //navbar menus
    //======================================
    
    //OWL CAROUSEL
    //========================================
    
    var owl = $('#owl-carousel');
    owl.owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: 5000
    });
    owl.on('changed.owl.carousel', function(event) {
        
        $('ol.testimonials li a').each(function(){
            if ($(this).data('order') === (event.item.index-1)) {
                $(this).addClass('active'); 
            }
            else {
                $(this).removeClass('active');
            }
            
            if (event.item.index - 1 === 7) {
                $('ol.testimonials li a:first').addClass('active');
            }
        });
    });
    
    $('ol.testimonials li a').on('click', function(){
       stopAllVideo();
       owl.trigger('to.owl.carousel', [$(this).data('order')-1, 100, true]);
    });

    

    //MENUE CLICK
    //========================================
    
    $('.menu-navbar li a').on('click', function(){
        var section = $(this).attr('id');
        switch(section) {
            case 'change':
                $('main').moveTo(2);
                break;
            case 'benefits':
                $('main').moveTo(3);
                break;
            case 'unique':
                $('main').moveTo(4);
                break;
            case 'testimonials':
                $('main').moveTo(5);
                break;
        }
    });
    
    $('a#logo').on('click', function(){
        $('main').moveTo(1);
    });

var os = getMobileOperatingSystem();

if (os == "Mac" || os == "Window") {
    var darkPage = false;
    $('main').onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        animationTime: 800,
        loop: false,
        beforeMove: function(index) {
            switch(index) {
                case 1:
                    darkBackground(index);
                    
                    stopAllVideo();
                    darkPage = true;
                    break;
                case 2:
                    lightBackground();
                    
                    stopAllVideo();
                    darkPage = false;
                    break;
                case 3:
                    darkBackground(index);
                    
                    stopAllVideo();
                    darkPage = true;
                    break;
                case 4:
                    lightBackground();

                    stopAllVideo();
                    darkPage = false;
                    break;
                case 5:
                    darkBackground(index);

                    stopAllVideo();
                    darkPage = true;
//                    genpactPlayer.playVideo();
                    break;
            }
        }
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
//    alert(true);
    
    $('section').removeClass('wrapper');
    $(window).scroll(changeHeaderBackground);
}
    

function darkBackground(i) {
    $('.navbar a, .navbar.menu-navbar, .navbar.login-navbar').fadeOut(100);
    $('.navbar a').removeClass('black-text').addClass('white-text');
    $('.navbar img.logo-black').fadeOut(100);
    setTimeout(function(){
        $('.navbar a, .navbar.menu-navbar, .navbar.login-navbar').fadeIn(500);
        $('.navbar, .navbar ul li ul').css('background', '#333B3D');
        if (i === 1) {
            $('.navbar').css('background', 'transparent');
        }
        else {
            $('.navbar img.logo-white').fadeIn(500);
            $('.navbar, .navbar ul li ul').css('background', 'transparent');
        }
    }, 500);
}

function lightBackground() {
    $('.navbar a, .navbar.menu-navbar, .navbar.login-navbar').fadeOut(100);
    $('.navbar a').removeClass('white-text').addClass('black-text');
    $('.navbar img.logo-white').fadeOut(100);
    setTimeout(function(){
        $('.navbar a, .navbar.menu-navbar, .navbar.login-navbar').fadeIn(500);
        $('.navbar img.logo-black').fadeIn(500);
        $('.navbar, .navbar ul li ul').css('background', 'white');
    }, 500);
    
    
}

function stopAllVideo() {
    afniPlayer.stopVideo();
    genpactPlayer.stopVideo();
}

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

var mainPageHeight = $('.main-page').height();
var firstPageHeight = $('.story-first').offset().top;
var secondPageHeight = $('.story-second').offset().top;
var thirdPageHeight = $('.story-third').offset().top;
var fourthPageHeight = $('.story-fourth').offset().top;

function changeHeaderBackground() {
    var top = $(window).scrollTop();
    
    if (top < mainPageHeight) {
        $('.mobile-navbar, .navbar').css('background', '#333B3D');
        $('.mobile-navbar a, .navbar a').css('color', 'white');
        $('.navbar img.logo-white').show();
        $('.navbar img.logo-black').hide();
    }
    
    if (top > mainPageHeight && top < secondPageHeight) {
//        console.log("first");
        $('.mobile-navbar, .navbar').css('background', 'white');
        $('.mobile-navbar a, .navbar a').css('color', '#33383d');
        $('.navbar img.logo-white').hide();
        $('.navbar img.logo-black').show();
    }
    
    if (top > secondPageHeight && top < thirdPageHeight) {
        $('.mobile-navbar, .navbar').css('background', '#333B3D');
        $('.mobile-navbar a, .navbar a').css('color', 'white');
        $('.navbar img.logo-white').show();
        $('.navbar img.logo-black').hide();
    }

    
    if (top > thirdPageHeight && top < fourthPageHeight) {
//        console.log("third");
        $('.mobile-navbar, .navbar').css('background', 'white');
        $('.mobile-navbar a, .navbar a').css('color', '#33383d');
        $('.navbar img.logo-white').hide();
        $('.navbar img.logo-black').show();
    }

    
    if (top > fourthPageHeight) {
        $('.mobile-navbar, .navbar').css('background', '#333B3D');
        $('.mobile-navbar a, .navbar a').css('color', 'white');
        $('.navbar img.logo-white').show();
        $('.navbar img.logo-black').hide();
    }
}


