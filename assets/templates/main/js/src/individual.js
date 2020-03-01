$(function() {
    var individualForm = $('.individual-form');

    $(individualForm).on('change', 'input[name="children"]', function(e) {
        var input = $(this);
        var value = $(input).val();
        if (value > 0) {
            $(individualForm).find('[data-childage]').fadeIn(128);
        } else {
            $(individualForm).find('[data-childage]').fadeOut(128);
        }
    });

    if (individualForm.length == 1) {
        $(individualForm).find('select').niceSelect();
        $(individualForm).on('change', 'select[name="vehicletitle"]', function(e) {
            var vehicleId = $(this).find('option:selected').attr('data-id');
            $(individualForm).find('.individual-form__form-group[data-vehicle]').hide();
            $(individualForm).find('.individual-form__form-group[data-vehicle="' + vehicleId + '"]').show();
        });


    }
});