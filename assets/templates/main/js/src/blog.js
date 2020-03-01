$(function() {
	initElementsSameHeight('.blog-item');
	$(window).resize(function(e) {
		initElementsSameHeight('.blog-item');
	});
});