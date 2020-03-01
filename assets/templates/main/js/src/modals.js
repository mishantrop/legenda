$(function() {
	initModals();
});

function initModals() {
	$('[data-open-modal]').click(function(e) {
		var trigger = $(this);
		var modalName = trigger.attr('data-open-modal');
		console.log('modal: ' + modalName);
		
		var modalOptions = {
            hashTracking: false
        };
        var modal = $('[data-modal-name="'+modalName+'"]').remodal(modalOptions);
        
        if (typeof modal == 'object' && modal !== null) {
            modal.open();
            e.preventDefault();

			if (modalName == 'schedule-group') {
				var group = trigger.parents('.course-group');
				if (group.length == 1) {
					var coursetitle = $(group).find('[data-group-info="coursetitle"]').text();
					var startdate = $(group).find('[data-group-info="startdate"]').text();
					var period = $(group).find('[data-group-info="period"]').text();
					var place = $(group).find('[data-group-info="place"]').text();
					
					$('#schedule-group-form-wrapper').find('input[name="coursetitle"]').val(coursetitle);
					$('#schedule-group-form-wrapper').find('input[name="startdate"]').val(startdate);
					$('#schedule-group-form-wrapper').find('input[name="period"]').val(period);
					$('#schedule-group-form-wrapper').find('input[name="place"]').val(place);
					
					var groupInfo = $(group).find('.course-group-info1').clone();
					$('#schedule-group-form-wrapper .course-group-info1').html(groupInfo);
				}
			} else if (modalName == 'course-group') {
				var group = trigger.parents('.course-group');
				if (group.length == 1) {
					var coursetitle = $(group).find('[data-group-info="coursetitle"]').text();
					var startdate = $(group).find('[data-group-info="startdate"]').text();
					var period = $(group).find('[data-group-info="period"]').text();
					var place = $(group).find('[data-group-info="place"]').text();

					$('#course-group-form-wrapper').find('input[name="coursetitle"]').val(coursetitle);
					$('#course-group-form-wrapper').find('input[name="startdate"]').val(startdate);
					$('#course-group-form-wrapper').find('input[name="period"]').val(period);
					$('#course-group-form-wrapper').find('input[name="place"]').val(place);
					
					var groupInfo = $(group).find('.course-group-info1').clone();
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