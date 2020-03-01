$(function() {
    initElementsSameHeight('.team-item__inner');
    $(window).resize(function(e) {
        initElementsSameHeight('.team-item__inner');
    });
});
