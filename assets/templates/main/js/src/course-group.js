$(function() {
  var courseGroupModalForm = $('.course-group-form');

  $(courseGroupModalForm).on('change', 'input[name="children"]', function(e) {
    var input = $(this);
    var value = $(input).val();
    if (value > 0) {
      $(courseGroupModalForm).find('[data-childage]').fadeIn(128);
    } else {
      $(courseGroupModalForm).find('[data-childage]').fadeOut(128);
    }
  });
});
