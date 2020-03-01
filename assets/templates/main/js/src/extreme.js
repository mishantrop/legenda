$(function() {
	initElementsSameHeight('.extreme-show-item');
	$(window).resize(function(e) {
		initElementsSameHeight('.extreme-show-item');
	});
});
