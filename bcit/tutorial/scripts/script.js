// for wodry tutorial
$('.wodry1').wodry({
    animation: 'rotateAll',
    delay: 1000
});

$('.wodry2').wodry({
    animation: 'rotateX',
    delay: 1000,
    animationDuration: 800
});

$('.wodry3').wodry({
    animation: 'rotateY',
    delay: 1000,
    animationDuration: 300
});
// end for wodry


// for scrolling tutorial
	AOS.init({
  		duration: 1200
	});
// end for scrolling


// for animation tutorial
$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_01').on('click',function(){
	$('.shape_01').addClass('animated zoomInLeft').one(animationEnd,function(){
		$(this).removeClass('animated zoomInLeft');
	});
});
});

$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_02').on('click',function(){
	$('.shape_02').addClass('animated swing').one(animationEnd,function(){
		$(this).removeClass('animated swing');
	});
});
});

$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_03').on('click',function(){
	$('.shape_03').addClass('animated shake').one(animationEnd,function(){
		$(this).removeClass('animated shake');
	});
});
});


$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_04').on('click',function(){
	$('.shape_04').addClass('animated jello').one(animationEnd,function(){
		$(this).removeClass('animated jello');
	});
});
});

$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_05').on('click',function(){
	$('.shape_05').addClass('animated tada').one(animationEnd,function(){
		$(this).removeClass('animated tada');
	});

});
});

$(function() {
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$('.shape_06').on('click',function(){
	$('.shape_06').addClass('animated fadeOutDown').one(animationEnd,function(){
		$(this).removeClass('animated fadeOutDown');
	});
});
});
// end for animation


// general 

// for tabs
	// select tab links
$tabDivs = $('.tab_container');

$.each($tabDivs, function(_, tab) {
	displayActiveTabContent($(tab).find('.active_tab'));
	var as = $(tab).find('nav a');
	$.each(as, function(_, value) {
		$(value).click(function(e) {
			e.preventDefault();
			$.each(as, function(_, v){ 
				$(v).removeClass('active_tab');
			});
			$(this).addClass('active_tab');
			displayActiveTabContent($(this));
		});
	});
});

	// function for displaying the active tab
function displayActiveTabContent(activeTab){
	activeTab.parents('.tab_container').find('.tab_content').hide();
	var activeID = activeTab.attr('href');
	$(activeID).show();
}; 
// end for tabs



// for active nav links
	// window scroll functions
$(document).scroll(function(){
	var windowScroll = $(window).scrollTop();
	var windowHeight= $(window).height();
	var documentBottom = $(document).height();
	var $tut1 = $('#tut1').position().top;
	var $tut2 = $('#tut2').position().top;
	var $tut3 = $('#tut3').position().top;


	// active classes for nav
	if(windowScroll >= $tut1 && windowScroll < $tut2){
		$('a[href="#tut1"]').addClass('active');
	}
	else{
		$('a[href="#tut1"]').removeClass('active');
	};

	if(windowScroll >= $tut2 && windowScroll < $tut3){
		$('a[href="#tut2"]').addClass('active');
	}
	else{
		$('a[href="#tut2"]').removeClass('active');
	}

	if(windowScroll >= $tut3 || (windowScroll + windowHeight == documentBottom)){
		$('a[href="#tut3"]').addClass('active');
	}
	else{
		$('a[href="#tut3"]').removeClass('active');
	}
});

// Smooth scrolling anchor links
$(function() {
  $('a[href*="#"]:not(".tab_nav a")').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});
