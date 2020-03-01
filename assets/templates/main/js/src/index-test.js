function initTeamSameHeight(selector) {
    var windowWidth = $(window).outerWidth();
    $(selector).css('height', 'auto');
    if (!isTablet()) {
        var maxHeight = 0;
        $.each($(selector), function(idx, e) {
            maxHeight = ($(e).outerHeight() > maxHeight) ? $(e).outerHeight() : maxHeight;
        });
        $(selector).css('height', maxHeight);
    } else {
        $(selector).css('height', 'auto');
    }
}

$(function() {
	var items = $('.index-test-item');
	if (items.length > 0) {
	    initTeamSameHeight('.index-test-item__description');
		initTeamSameHeight('.index-test-item');
	    $(window).resize(function(e) {
		    initTeamSameHeight('.index-test-item__description');
	        initTeamSameHeight('.index-test-item');
	    });
	}
});