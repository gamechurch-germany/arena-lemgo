$().ready(function() {
	$(window).stellar({
		horizontalScrolling: false,
		hideDistantElements: false,
	});
	$('.comein').addClass('invisible').viewportChecker({
	    classToAdd: 'visible animated fadeInUp',
	    offset: 100,
	});
});