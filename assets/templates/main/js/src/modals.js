$(function() {
	initModals();
});

function initModals() {
	$('[data-open-modal]').click(function(e) {
		var trigger = $(this);
		var modalName = trigger.attr('data-open-modal');
		var modalOptions = {
			hashTracking: false
		};
		var modal = $('[data-modal-name="'+modalName+'"]').remodal(modalOptions);
        
		if (typeof modal == 'object' && modal !== null) {
			modal.open();
			e.preventDefault();

			if (modalName == 'schedule-group') {
				var scheduleGroup = trigger.parents('.course-group');
				if (scheduleGroup.length == 1) {
					var coursetitle = $(scheduleGroup).find('[data-group-info="coursetitle"]').text();
					var startdate = $(scheduleGroup).find('[data-group-info="startdate"]').text();
					var period = $(scheduleGroup).find('[data-group-info="period"]').text();
					var place = $(scheduleGroup).find('[data-group-info="place"]').text();
					
					$('#schedule-group-form-wrapper').find('input[name="coursetitle"]').val(coursetitle);
					$('#schedule-group-form-wrapper').find('input[name="startdate"]').val(startdate);
					$('#schedule-group-form-wrapper').find('input[name="period"]').val(period);
					$('#schedule-group-form-wrapper').find('input[name="place"]').val(place);
					
					var groupInfo = $(scheduleGroup).find('.course-group-info1').clone();
					$('#schedule-group-form-wrapper .course-group-info1').html(groupInfo);
				}
			} else if (modalName == 'course-group') {
				var courseGroup = trigger.parents('.course-group');
				if (courseGroup.length == 1) {
					var coursetitle = $(courseGroup).find('[data-group-info="coursetitle"]').text();
					var startdate = $(courseGroup).find('[data-group-info="startdate"]').text();
					var period = $(courseGroup).find('[data-group-info="period"]').text();
					var place = $(courseGroup).find('[data-group-info="place"]').text();

					$('#course-group-form-wrapper').find('input[name="coursetitle"]').val(coursetitle);
					$('#course-group-form-wrapper').find('input[name="startdate"]').val(startdate);
					$('#course-group-form-wrapper').find('input[name="period"]').val(period);
					$('#course-group-form-wrapper').find('input[name="place"]').val(place);
					
					var groupInfo = $(courseGroup).find('.course-group-info1').clone();
					$('#course-group-form-wrapper .course-group-info1').html(groupInfo);
				}
			}
		} else {
			console.log('I cant open modal ' + modalName);
		}
		
		e.preventDefault();
	});
}

function initAjaxModals() {
	initModals();

	var optionsScheduleGroup = {
		debug: false,
		hasErrorInputClass: 'schedule-group-form__input--invalid',
		hasErrorLabelClass: 'schedule-group-form__label--invalid',
		hideFormOnSuccess: false,
	};
	var quasiformScheduleGroup = $('#schedule-group-form-wrapper').quasiform(optionsScheduleGroup);
}
