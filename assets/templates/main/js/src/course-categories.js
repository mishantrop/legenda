function initCourseCategorySameHeight(selector) {
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
	var courseItems = $('.course-item');
	
	if (courseItems.length > 0) {
		initCourseCategorySameHeight('.course-item');
		$(window).resize(function(e) {
			initCourseCategorySameHeight('.course-item');
		});
		
		$('.courses-categories-item__link').click(function(e) {
			var link = $(this);
			var categoryId = parseInt(link.attr('data-id'));
			if (typeof categoryId !== 'number' || isNaN(categoryId)) {
				categoryId = 0;
			}
			var classActive = 'courses-categories-item__link--active';
			$('.'+classActive).removeClass(classActive);
			link.addClass(classActive);
			
			var courseItemsWrapper = $('.courses-items');
			if (courseItemsWrapper.length == 1) {
				var courses = courseItemsWrapper.find('[data-categories]');
				courses.fadeOut();
				var visibleCount = 0;
				$(courses).each(function(idx, course) {
					var course = $(course);
					var categoriesString = course.attr('data-categories');
					var categories = categoriesString.split('||');
					var inCategory = false;
					for (i = 0; i < categories.length; i++) {
						if (categories[i] == categoryId || categoryId == 0) {
							inCategory = true;
							visibleCount++;
							break;
						}
					}
					if (inCategory) {
						course.fadeIn();
					} else {
						course.hide();
					}
				});
				if (visibleCount > 0) {
					$('#courses-items__empty').hide();
					initCourseCategorySameHeight('.course-item');
				} else {
					$('#courses-items__empty').fadeIn();
				}
			}
			
			e.preventDefault();
		});
	}
	

});