function initNavigation() {
	$(window).resize(function() {
		autoToggleMenu();
	});
    
	// Адаптивное верхнее меню
	$('#header__navigation-toggle').click(function(e) {
		var button = $(this);
		var navigation = $('.header__navigation');
		if (navigation.length == 1) {
			if (navigation.hasClass('header__navigation--collapsed')) {
				navigation.removeClass('header__navigation--collapsed');
			} else {
				navigation.addClass('header__navigation--collapsed');
			}
		}
		$(button).attr('data-clicked', 1);
	});

	$('#index-header__navigation-toggle').click(function(e) {
		var button = $(this);
		var navigation = $('.index-header__navigation');
		if (navigation.length == 1) {
			if (navigation.hasClass('index-header__navigation--collapsed')) {
				navigation.removeClass('index-header__navigation--collapsed');
			} else {
				navigation.addClass('index-header__navigation--collapsed');
			}
		}
		$(button).attr('data-clicked', 1);
	});
}

function isMobileNavigation() {
	return (parseInt($(window).outerWidth()) <= 720);
}

function autoToggleMenu() {
	var button;
	var isClicked;

	button = $('#header__navigation-toggle');
	if (button.length == 1) {
		isClicked = parseInt(button.attr('data-clicked')) == 1;
		if (isMobileNavigation()) {
			$('.header__navigation-toggle-wrapper').show();
			if (!isClicked) {
				$('.header__navigation').addClass('header__navigation--collapsed');
			}
		} else {
			$('.header__navigation-toggle-wrapper').hide();
			var navigation = $('.header__navigation');
			if (!isClicked && navigation.length == 1) {
				navigation.removeClass('header__navigation--collapsed');
			}
		}
	}

	button = $('#index-header__navigation-toggle');
	if (button.length == 1) {
	    isClicked = parseInt(button.attr('data-clicked')) == 1;
	    if (isMobileNavigation()) {
				$('.index-header__navigation-toggle-wrapper').show();
				if (!isClicked) {
					$('.index-header__navigation').addClass('index-header__navigation--collapsed');
				}
	    } else {
				$('.index-header__navigation-toggle-wrapper').hide();
				var navigation = $('.index-header__navigation');
				if (!isClicked && navigation.length == 1) {
						navigation.removeClass('index-header__navigation--collapsed');
				}
	    }
    }
}

$(function () {
	initNavigation();
	autoToggleMenu();
});
