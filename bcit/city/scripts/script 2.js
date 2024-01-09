// JavaScript Document

// scrolling animation

AOS.init({
  duration: 1200
});

// parallax

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$(".header").css({

		'transform': 'translate(0px, -'+ wScroll /7 +'%)'
	});

	$('.jellyfish').css({

		'transform': 'translate(0px, -'+ wScroll /5 +'%)'
	});

	$('.forehand').css({

		'transform': 'translate(0px, -'+ wScroll /3 +'%)'
	});

});

