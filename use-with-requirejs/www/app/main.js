define(function (require) {
    const formValidation = require('../FormValidation/core/Core').default;
    // Plugins
    const Bootstrap = require('../FormValidation/plugins/Bootstrap').default;
    const Icon = require('../FormValidation/plugins/Icon').default;
    const SubmitButton = require('../FormValidation/plugins/SubmitButton').default;
    const Trigger = require('../FormValidation/plugins/Trigger').default;

    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required',
                    },
                },
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required',
                    },
                },
            },
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required',
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long',
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore',
                    },
                },
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required',
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address',
                    },
                },
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required',
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters',
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: function () {
                            return form.querySelector('[name="username"]').value;
                        },
                    },
                },
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required',
                    },
                },
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            submitButton: new SubmitButton(),
            bootstrap: new Bootstrap({
                rowSelector: function (field, ele) {
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-md-4';
                        default:
                            return '.form-group';
                    }
                },
            }),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        },
    });
});
