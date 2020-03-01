$(function() {
	var items = $('.index-test-item');
	if (items.length > 0) {
	    initElementsSameHeight('.index-test-item__description');
		initElementsSameHeight('.index-test-item');
	    $(window).resize(function(e) {
		    initElementsSameHeight('.index-test-item__description');
	        initElementsSameHeight('.index-test-item');
	    });
	}
});
