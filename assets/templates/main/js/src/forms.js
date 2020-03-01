$(function() {
    /**
     * Заказать звонок
     */
    var optionsOrderCall = {
        debug: false,
        hasErrorInputClass: 'order-call-form__input--invalid',
        hasErrorLabelClass: 'order-call-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformOrderCall = $('#order-call-form-wrapper').quasiform(optionsOrderCall);

	/**
     * Заказать сертификат
     */
    var optionsCert = {
        debug: false,
        hasErrorInputClass: 'order-call-form__input--invalid',
        hasErrorLabelClass: 'order-call-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformOrderCert = $('#cert-form-wrapper').quasiform(optionsCert);
	
    /**
     * Контакты
     */
    var optionsContacts = {
        debug: false,
        hasErrorInputClass: 'order-call-form__input--invalid',
        hasErrorLabelClass: 'order-call-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformContacts = $('#contacts-feedback-form').quasiform(optionsContacts);

    /**
     * Команда
     */
    var optionsTeamHiring = {
        debug: false,
        hasErrorInputClass: 'team-hiring-form__input--invalid',
        hasErrorLabelClass: 'team-hiring-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformTeamHiring = $('#team-hiring-form-wrapper').quasiform(optionsTeamHiring);

    /**
     * Команда
     */
    var optionsTeamHiring = {
        debug: false,
        hasErrorInputClass: 'extreme-feedback-form__input--invalid',
        hasErrorLabelClass: 'extreme-feedback-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformTeamHiring = $('#extreme-feedback-form').quasiform(optionsTeamHiring);

    /**
     * Подобрать группу
     */
    var optionsBruteGroup = {
        debug: false,
        hasErrorInputClass: 'brute-group-form__input--invalid',
        hasErrorLabelClass: 'brute-group-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformBruteGroup = $('#brute-group-form-wrapper').quasiform(optionsBruteGroup);
	
	/**
     * Подобрать группу
     */
    var optionsCourseGroup = {
        debug: false,
        hasErrorInputClass: 'course-group-form__input--invalid',
        hasErrorLabelClass: 'course-group-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformCourseGroup = $('#course-group-form-wrapper').quasiform(optionsCourseGroup);
	
	/**
     * Подобрать группу
     */
    var optionsOpenlesson = {
        debug: false,
        hasErrorInputClass: 'openlesson-form__input--invalid',
        hasErrorLabelClass: 'openlesson-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformCourseGroup = $('#openlesson-form-wrapper').quasiform(optionsOpenlesson);
	
	/**
     * Записаться на тестирование
     */
    var optionsTesting = {
        debug: false,
        hasErrorInputClass: 'testing-form__input--invalid',
        hasErrorLabelClass: 'testing-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformCourseGroup = $('#testing-form-wrapper').quasiform(optionsTesting);
	
	/**
     * Записаться на тестирование
     */
    var optionsIndividual = {
        debug: false,
        hasErrorInputClass: 'individual-form__input--invalid',
        hasErrorLabelClass: 'individual-form__label--invalid',
        hideFormOnSuccess: false,
    };
    var quasiformIndividual = $('#individual-form-wrapper').quasiform(optionsIndividual);
});