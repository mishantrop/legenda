$(function() {
	var openlessonForm = $('.openlesson-form');

	if (openlessonForm.length == 1) {
		$(openlessonForm).find('select').niceSelect();

		$(openlessonForm).on('change', 'input[name="children"]', function(e) {
			var input = $(this);
			var value = $(input).val();
			if (value > 0) {
				$(openlessonForm).find('[data-childage]').fadeIn(128);
			} else {
				$(openlessonForm).find('[data-childage]').fadeOut(128);
			}
		});
	}
});
