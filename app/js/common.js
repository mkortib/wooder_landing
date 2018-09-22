$(function() {

	AOS.init();

	$("#bgndVideo").YTPlayer();

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black']
		// navbar: {
			// title: '<img src="img/logo-1.svg" alt="logo smitler">'
		// }
	});

	$('#click_play').click(function() {
		$('.s_video').fadeOut();
		$('.player_bg_video').fadeIn();
		$('.inline-YTPlayer').css('max-width', '100%');
		setTimeout(function() {
			$('.player_bg_video').css('display', 'none');
			$('.s_video').fadeIn();
		}, 40000);

	})
	
	var api = $("#my-menu").data( "mmenu" );
	api.bind( "open:finish", function() { $('.hamburger').addClass('is-active');}).bind('close:finish', function() {$('.hamburger').removeClass('is-active');});﻿
	

	$('.header_nav li').click(function() {
		$('.header_nav li').removeClass('active');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	})

	$('.change_lang').click(function() {
		if($('.change_lang i').hasClass('fas fa-caret-down')) {
			$('.change_lang i').removeClass('fas fa-caret-down');
			$('.change_lang i').addClass('fas fa-caret-up');
		} else {
			$('.change_lang i').removeClass('fas fa-caret-up');
			$('.change_lang i').addClass('fas fa-caret-down');
		}
	})

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

