// JavaScript Document

var $body = $('body');
var $btnMobileMenu = $('.btn-mobile-menu');

// click event handler for the mobile menu button
$btnMobileMenu.click(function(){
	
	// toggle the show-mobile-menu class
	// on the body element
	$body.toggleClass('show-mobile-menu');
	
}); // end click event handler for the mobile menu button





// paralax for main image

$(window).scroll(function () {

        $('.text').css({
            'top': 50-($(this).scrollTop() / 35) + "%"
        });
    });