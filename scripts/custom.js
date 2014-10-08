jQuery(function ($) {
	/* --- Smooth scroll effect --- */
  $.localScroll({
  	duration: 750
  });

	/* --- More scrolling effects --- */
	var scrolltop = $(window).scrollTop();
	var scrollwindow = scrolltop + $(window).height();

	// Enable parallax and fade effects
	$(window).scroll(function () {
		scrolltop = $(window).scrollTop();
		scrollwindow = scrolltop + $(window).height();
		introheight = $("#jumbo").height();

		$(".jumbotron-content").css("opacity", 1 - (scrolltop/500));
		$(".jumbotron-content h1").css("top", 1 - (scrolltop/10) + "px")
	})
})