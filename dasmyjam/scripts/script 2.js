// JS DOCUMENT


// header image resize

$(window).resize(function(){

	var windowWidth = $(window).width();
	var $header = $('.header_img');

	if(windowWidth <= 1250 && windowWidth > 768){
		$header.attr('src', 'images/header_med.png');
	}
	else if(windowWidth <= 768){
		$header.attr('src', 'images/header_sml.png');
	}
	else{
		$header.attr('src', 'images/header_lrg.png');
	}

	console.log(windowWidth);

});

// mobile hamburger
var $showMenu = $('.btn_mobile_menu');
var $mobileNav = $('.nav_main');

$showMenu.click(function(){

	$mobileNav.toggleClass('show_menu');

});

// responsive iframes
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $("#responsive_iframe").fitVids();
  });


