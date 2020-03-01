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
    initTeamSameHeight('.team-item__inner');
    $(window).resize(function(e) {
        initTeamSameHeight('.team-item__inner');
    });
});