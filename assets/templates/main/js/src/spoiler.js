$(function() {
    var spoilers = $('[data-spoiler="wrapper"]');
    $(spoilers).each(function(idx, e) {
        var spoiler = $(e);
        var toggler = $(spoiler).find('[data-spoiler="toggler"]');
		var content = $(spoiler).find('[data-spoiler="content"]');
        var classTogglerExpanded = $(toggler).attr('data-class');
        var classContentExpanded = $(content).attr('data-class');
        $(toggler).on('click', function(e) {
            if ($(content).hasClass(classContentExpanded)) {
                $(toggler).removeClass(classTogglerExpanded);
                $(content).removeClass(classContentExpanded);
            } else {
                $(toggler).addClass(classTogglerExpanded);
                $(content).addClass(classContentExpanded);
            }
        });
    });
});