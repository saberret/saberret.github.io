$(document).ready(function () {

	$('.logo-wrap').mouseenter(function () {
		$('.logo-change').css('visibility', 'visible');
		$('.logo').hide();
	});	
	$('.logo-wrap').mouseleave(function () {
		$('.logo-change').css('visibility', 'hidden');
		$('.logo').show();
	});
	

	$(window).scroll(function () {
		// console.log('scrolling');
		console.log($(window).scrollTop());
	
		if ($(this).scrollTop() > 800) {
			$('.site-nav').addClass('fixed');
			$('.sticky-pics').addClass('fixed');
			$('.sticky-home').addClass('fixed');
			$('.sticky-meal-course').addClass('fixed');
			$('.sticky-low-carb').addClass('fixed');
			$('.sticky-quick-easy').addClass('fixed');
			$('.sticky-budget-friendly').addClass('fixed');
			$('.sticky-question').addClass('fixed');

		} else {
			$('.site-nav').removeClass('fixed');
			$('.sticky-pics').removeClass('fixed');
			$('.sticky-home').removeClass('fixed');
			$('.sticky-meal-course').removeClass('fixed');
			$('.sticky-low-carb').removeClass('fixed');
			$('.sticky-quick-easy').removeClass('fixed');
			$('.sticky-budget-friendly').removeClass('fixed');
			$('.sticky-question').removeClass('fixed');
		}
	})



   	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
	       
		var target = $(this).attr("href"); //Get the target
				
		// perform animated scrolling by getting top-position of target-element and set it as scroll target
		$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
		     location.hash = target + 800;  //attach the hash (#jumptarget) to the pageurl
		});
				
		return false;
   
	});

})
