function initGroupSameHeight(selector) {
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
	initGroupSameHeight('.course-group');
	$(window).resize(function(e) {
		initGroupSameHeight('.course-group');
	});

	var courseGroupsWrapper = $('.course-groups');
	if (courseGroupsWrapper.length == 1) {
		var groups = courseGroupsWrapper.find('[data-process="1"]');
		console.debug(groups);
		if (groups.length > 0) {
			$('#course-groups__empty').hide();
		} else {
			$('#course-groups__empty').fadeIn();
		}
		
		$('.course-groups-types-item__link').click(function(e) {
			var link = $(this);
			var inProcess = parseInt(link.attr('data-process'));
			if (typeof inProcess !== 'number' || isNaN(inProcess)) {
				inProcess = 0;
			}
			var classActive = 'course-groups-types-item__link--active';
			$('.'+classActive).removeClass(classActive);
			link.addClass(classActive);

			var groups = courseGroupsWrapper.find('[data-process]');
			groups.fadeOut();
			var visibleCount = 0;
			$(groups).each(function(idx, group) {
				var group = $(group);
				var groupInProcess = group.attr('data-process');
				if (groupInProcess == inProcess) {
					group.fadeIn();
					visibleCount++;
				} else {
					group.hide();
				}
			});
			if (visibleCount > 0) {
				$('#course-groups__empty').hide();
			} else {
				$('#course-groups__empty').fadeIn();
			}			
			e.preventDefault();
		});
	}
});