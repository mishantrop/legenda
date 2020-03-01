$(function() {
    var scheduleFilterForm = $('.schedule-groups-filter__form');
    var scheduleModalForm = $('.schedule-group-form');

    $(scheduleModalForm).on('change', 'input[name="children"]', function(e) {
        var input = $(this);
        var value = $(input).val();
        if (value > 0) {
            $(scheduleModalForm).find('[data-childage]').fadeIn(128);
        } else {
            $(scheduleModalForm).find('[data-childage]').fadeOut(128);
        }
    });

    if (scheduleFilterForm.length == 1) {
        $('.schedule-groups-filter__form select').niceSelect();

        sendScheduleSearch();

        $('.schedule-groups-filter__form select[name="vehicle"]').change(function(e) {
            var select = $(this);
            var vehicle = parseInt(select.val());
            $('.schedule-groups-filter__form-group[data-vehicle]').hide();
            $('.schedule-groups-filter__form-group[data-vehicle] select').attr('disabled', true);
            $('.schedule-groups-filter__form-group[data-vehicle="' + vehicle + '"]').show();
			$('.schedule-groups-filter__form-group[data-vehicle="' + vehicle + '"] select').removeAttr('disabled');
			$('.schedule-groups-filter__form-group[data-vehicle="' + vehicle + '"] select').niceSelect('update');
        });

        $('.schedule-groups-filter__form select').change(function(e) {
            sendScheduleSearch();
        });
    }
});

function sendScheduleSearch() {
    $('.schedule-groups-filter__loader').fadeIn(50);
    var form = $('.schedule-groups-filter__form');
    var formAction = $(form).attr('action');
    var formData = new FormData($(form)[0]);
    $.ajax({
        contentType: false,
        processData: false,
        data: formData,
        //dataType: 'json',
        type: 'POST',
        url: formAction,
        complete: function() {
            $('.schedule-groups-filter__loader').fadeOut(50);
        },
        error: function(xhr, ajaxOptions, thrownError) {
            if (xhr.status == 404) {
                console.log('Ресурс ' + formAction + ' не найден');
            } else if (xhr.status == 500) {
                console.log('Ошибка 500');
            } else if (xhr.status == 200) {
                console.log('Статус 200');
                console.log('Невалидный JSON');
            } else {
                console.log('Ошибка ' + xhr.status);
            }
        },
        success: function(data, textStatus) {
            $('.course-groups .row .col').remove();
            if (data.length > 10) {
                $('#course-groups__empty').hide();
                data = $(data);
                $(data).each(function(idx, e) {
                    $(e).hide();
                });
                $('.course-groups .row').html(data);
                $('.course-groups .row .col[data-process="1"]').fadeIn();
				initScheduleGroupSameHeight('.course-groups .row .col[data-process="1"]');
            } else {
                $('#course-groups__empty').fadeIn();
            }
            initAjaxModals();
        }
    });
}

function initScheduleGroupSameHeight(selector) {
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