$(document).ready(function(){
    
    //navbar menus
    //======================================
    $('a#change').on('click', function(){
        
    });
    
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
//        console.log(event.item.index - 1);
        
        $('ol.testimonials li a').each(function(){
            if ($(this).data('order') === (event.item.index-1)) {
                $(this).addClass('active'); 
            }
            else {
                $(this).removeClass('active');
            }
            
            if (event.item.index - 1 === 9) {
                $('ol.testimonials li a:first').addClass('active');
            }
        });
    });
    
    $('ol.testimonials li a').on('click', function(){
       stopAllVideo();
       owl.trigger('to.owl.carousel', [$(this).data('order')-1, 100, true]);
    });
    
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
                    break;
                case 2:
                    lightBackground();
                    stopAllVideo();
                    break;
                case 3:
                    darkBackground();
                    stopAllVideo();
                    break;
                case 4:
                    lightBackground();
                    stopAllVideo();
                    break;
                case 5:
                    darkBackground();
                    stopAllVideo();
//                    genpactPlayer.playVideo();
                    break;
            }
        }
    });
    
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
    
});

function darkBackground(i) {
    $('.navbar a').fadeOut(100);
    $('.navbar a').removeClass('black-text').addClass('white-text');
    $('.navbar img#logo-black').fadeOut(100);
    setTimeout(function(){
        $('.navbar a').fadeIn(500);
        if (i === 1) {
            
        }
        else {
            $('.navbar img#logo-white').fadeIn(500);
        }
    }, 500);
}

function lightBackground() {
    $('.navbar a').fadeOut(100);
    $('.navbar a').removeClass('white-text').addClass('black-text');
    $('.navbar img#logo-white').fadeOut(100);
    setTimeout(function(){
        $('.navbar a').fadeIn(500);
        $('.navbar img#logo-black').fadeIn(500);
    }, 500);
    
}

function stopAllVideo() {
    afniPlayer.stopVideo();
    genpactPlayer.stopVideo();
}