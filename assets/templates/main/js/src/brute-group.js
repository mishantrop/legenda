$(function() {
  var bruteGroupForm = $('.brute-group-form');

  $(bruteGroupForm).on('change', 'input[name="children"]', function(e) {
    var input = $(this);
    var value = $(input).val();
    if (value > 0) {
      $(bruteGroupForm).find('[data-childage]').fadeIn(128);
    } else {
      $(bruteGroupForm).find('[data-childage]').fadeOut(128);
    }
  });

  if (bruteGroupForm.length == 1) {
    $(bruteGroupForm).find('select').niceSelect();
    $(bruteGroupForm).on('change', 'select[name="vehicletitle"]', function(e) {
      var vehicleId = $(this).find('option:selected').attr('data-id');
      $(bruteGroupForm).find('.brute-group-form__form-group[data-vehicle]').hide();
      $(bruteGroupForm).find('.brute-group-form__form-group[data-vehicle="' + vehicleId + '"]').show();
    });
  }
});
