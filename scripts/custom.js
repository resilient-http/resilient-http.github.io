jQuery(function ($) {
	/* --- Smooth scroll effect --- */
  $.localScroll({
  	duration: 750
  });

	/* --- More scrolling effects --- */
	scrolltop = $(window).scrollTop();
	scrollwindow = scrolltop + $(window).height();
	
	if (scrollwindow < ( $(".feature").offset().top + 200 ))
		$(".feature").css("opacity", "0");
	
	// Enable parallax and fade effects
	$(window).scroll(function () {
		scrolltop = $(window).scrollTop();
		scrollwindow = scrolltop + $(window).height();
		introheight = $("#jumbo").height();

		$(".jumbotron-content").css("opacity", 1 - (scrolltop/500));
		$(".jumbotron-content h1").css("top", 1 - (scrolltop/10) + "px");
		if( scrollwindow > ( $(".features").offset().top + 200 ) ) {
			$(".features .feature-one").animate({ opacity: 1 }, 1000);
			$(".features .feature-two").delay(250).animate({ opacity: 1 }, 1000);
			$(".features .feature-three").delay(500).animate({ opacity: 1 }, 1000);
		}
	})
})