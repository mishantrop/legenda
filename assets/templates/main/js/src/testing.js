$(function() {
  var testingForm = $('.testing-form');

  $(testingForm).on('change', 'input[name="children"]', function(e) {
    var input = $(this);
    var value = $(input).val();
    if (value > 0) {
      $(testingForm).find('[data-childage]').fadeIn(128);
    } else {
      $(testingForm).find('[data-childage]').fadeOut(128);
    }
  });

  if (testingForm.length == 1) {
    $(testingForm).find('select').niceSelect();
  }
});
