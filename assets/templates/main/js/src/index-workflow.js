$(function() {
	$('.index-workflow').imagesLoaded( function() {
		initIndexWorkflow();
	});
});

function resizeIndexWorkflow(wrapper) {
	var windowWidth = $(window).width();
	if (windowWidth < 976) {
		return false;
	}
	
	var wrapperHeight = parseInt(wrapper.outerHeight());
	var wrapperWidth = parseInt(wrapper.outerWidth());
	var wrapperInitialHeight = parseInt(wrapper.attr('data-height'));
	var wrapperInitialWidth = parseInt(wrapper.attr('data-width'));
	var k = parseFloat(wrapperInitialHeight/wrapperHeight);
	
	wrapper.find('.index-workflow-baloon').each(function(idx, e) {
		var left = parseInt($(e).attr('data-left'));
		var top = parseInt($(e).attr('data-top'));
		
		var leftNew = left/k;
		var topNew = top/k;
		
		$(e).css('left', leftNew + 'px');
		$(e).css('top', topNew + 'px');
	});
}

function closePopups(wrapper) {
	wrapper.find('.index-workflow-popup').fadeOut(256, function() {
		wrapper.find('.index-workflow__popups').removeClass('index-workflow__popups--active');
		setTimeout(function explode() {
			wrapper.find('.index-workflow__baloons').css('z-index', 1);
		}, 200);
	});
	
}

// Как мы работаем
function initIndexWorkflow() {
	// Адаптивная карта
	var wrapper = $('.index-workflow');
	
	if (wrapper.length == 1) {
		resizeIndexWorkflow(wrapper);
		
		var resizeTimeout;
		$(window).resize(function(e) {
			//resizeIndexWorkflow(wrapper);
			if (!!resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
			resizeTimeout = setTimeout(function() {
				resizeIndexWorkflow(wrapper);
			}, 100);
		});

		//resizeIndexWorkflow(wrapper);
		
		// Клик по херне
		wrapper.find('.index-workflow-baloon[data-id]').click(function(e) {
			var baloon = $(this);
			var baloonId = baloon.attr('data-id');
			var wrapperHeight = parseInt(wrapper.outerHeight());
			var wrapperWidth = parseInt(wrapper.outerWidth());
			wrapper.find('.index-workflow-popup[data-id]').fadeOut();
			//wrapper.find('.index-workflow-popup[data-id="'+baloonId+'"]').fadeIn();
			
			var popup = wrapper.find('.index-workflow-popup[data-id="'+baloonId+'"]');
			if (popup.length == 1) {
				popup.fadeIn();
				var popupHeight = parseInt(popup.outerHeight());
				var popupWidth = parseInt(popup.outerWidth());
				popup.css('left', wrapperWidth/2 - popupWidth/2);
				popup.css('top', wrapperHeight/2 - popupHeight/2);
			}
			
			wrapper.find('.index-workflow__baloons').css('z-index', 0);
			wrapper.find('.index-workflow__popups').addClass('index-workflow__popups--active');
		});
		
		// Клик по фону скрывает окна
		wrapper.click(function(e) {
			if (e.target.id == 'index-workflow__baloons' || e.target.id == 'index-workflow__popups') {
				closePopups(wrapper);
			}
		});
		
		wrapper.find('.index-workflow-popup__close').click(function(e) {
			closePopups(wrapper);
		});
	}
}