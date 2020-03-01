$(function() {
  // Заказать звонок
  var quasiformOrderCall = $('#order-call-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'order-call-form__input--invalid',
    hasErrorLabelClass: 'order-call-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Заказать сертификат
  var quasiformOrderCert = $('#cert-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'order-call-form__input--invalid',
    hasErrorLabelClass: 'order-call-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Контакты
  var quasiformContacts = $('#contacts-feedback-form').quasiform({
    debug: false,
    hasErrorInputClass: 'order-call-form__input--invalid',
    hasErrorLabelClass: 'order-call-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Команда
  var quasiformTeamHiring = $('#team-hiring-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'team-hiring-form__input--invalid',
    hasErrorLabelClass: 'team-hiring-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Обратная связь
  var quasiformFeedback = $('#extreme-feedback-form').quasiform({
    debug: false,
    hasErrorInputClass: 'extreme-feedback-form__input--invalid',
    hasErrorLabelClass: 'extreme-feedback-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Подобрать группу
  var quasiformBruteGroup = $('#brute-group-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'brute-group-form__input--invalid',
    hasErrorLabelClass: 'brute-group-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Подобрать группу
  var quasiformCourseGroup = $('#course-group-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'course-group-form__input--invalid',
    hasErrorLabelClass: 'course-group-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Открытый урок
  var quasiformOpenlesson = $('#openlesson-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'openlesson-form__input--invalid',
    hasErrorLabelClass: 'openlesson-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Записаться на тестирование
  var quasiformTesting = $('#testing-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'testing-form__input--invalid',
    hasErrorLabelClass: 'testing-form__label--invalid',
    hideFormOnSuccess: false,
  });

  // Записаться на тестирование
  var quasiformIndividual = $('#individual-form-wrapper').quasiform({
    debug: false,
    hasErrorInputClass: 'individual-form__input--invalid',
    hasErrorLabelClass: 'individual-form__label--invalid',
    hideFormOnSuccess: false,
  });
});
