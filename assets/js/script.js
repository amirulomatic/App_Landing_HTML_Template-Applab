(function($){
    $(document).ready(function(){

        //sticky menu
    
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 50) {
                $('header').addClass('fixed-header');
            }
            else {
                $('header').removeClass('fixed-header');
            }
        });

        //mobile menu

        $('.mobile-menu a').click(function(){
            
            event.preventDefault();

            let menuStatus = $('nav').css('display');
            
            if(menuStatus == 'block'){
                $('.mobile-menu a').html('<i class="fas fa-bars"></i>');
                
            }else if(menuStatus == 'none'){
                $('.mobile-menu a').html('<i class="fas fa-times"></i>');
            };
    
    
            $('nav').slideToggle();
        });


        $(window).resize(function(){

            var bodyWidth = $('body').width();
    
            if(bodyWidth > 890){
                $('nav').show();
                $('.mobile-menu a').html('<i class="fas fa-bars"></i>');
            }else{
                $('nav').hide();
            };
        });

        //company slider

        $(".owl-carousel").owlCarousel({ //this class needs to put in mother div
            items:5, //per page
            loop: true,
            nav: true,
            dots: true,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            autoplay: true,
            autoplayTimeout: 5000,

            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:false
                    
                }
            }
        });
    
      
    
    });
})(jQuery);
    