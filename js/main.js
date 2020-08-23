// Sticky Navber
$(window).scroll(function(){
	var scroll = $(window).scrollTop()

	 if (scroll >= 10) {
		$(".navbar").addClass("nav-scroll");
	}
	else{
		$(".navbar").removeClass("nav-scroll");
	}
});

// external js: isotope.pkgd.js


// init Isotope
$('.food_menu').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.food_menu ul li').click( function() {
  $('.food_menu ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.menu_item').isotope({
    filter: selector
  });
  return false;
});

// Owl Carousel Function

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		dots: false,
		rewindNav:true,
		autoplay: true,
		autoplayTimeout: 2000,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	})
});

// Slick Carousel Function

$(document).ready(function(){
	$('.news_item_main').slick({
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});
});