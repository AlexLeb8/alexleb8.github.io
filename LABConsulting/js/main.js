$(function () {
	// Menu opener hamburger
	$('.top-menu__burger').click(function () {
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.top-menu').toggleClass('top-menu-opened');
	});

	// Всплывающее окно
	$('.btn__order-call').click(function (e) {
		e.preventDefault();
		$('#exampleModal').arcticmodal();
	});

	// Preloader
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({'overflow':'visible'});


	// Параллакс от движения мыши
    if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.logo',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.01,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.001,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    }

    // Параллакс от скролла
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.home-header').css('top',(0-(scrolled*0.75))+'px');
    }

    // Карусель
    $('.review__gallery').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
    });


});