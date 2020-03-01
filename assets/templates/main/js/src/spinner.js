$(function() {
	$(document).on('click', '.spinner__increase', function(e) {
		var button = $(this);
		var spinner = $(button).parent();
		var max = parseInt($(spinner).attr('data-max'));
		var input = $(spinner).find('input');
		var valueOld = parseInt($(input).val());
		var step = parseInt($(spinner).attr('data-one'));
		var k = 1;
		var valueNew = valueOld + step * k;
		if (valueNew <= max) {
			$(input).val(valueNew);
			$(input).change();
		}
	});

	$(document).on('click', '.spinner__decrease', function(e) {
		var button = $(this);
		var spinner = $(button).parent();
		var min = parseInt($(spinner).attr('data-min'));
		var max = parseInt($(spinner).attr('data-max'));
		var input = $(spinner).find('input');
		var valueOld = parseInt($(input).val());
		var step = parseInt($(spinner).attr('data-one'));
		var k = -1;
		var valueNew = valueOld + step * k;
		if (valueNew >= min) {
			$(input).val(valueNew);
			$(input).change();
		}
	});
});
