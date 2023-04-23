import '@form-validation/bundle/styles/index.css';

import { formValidation } from '@form-validation/bundle/popular';
import { Bootstrap5 } from '@form-validation/plugin-bootstrap5';
import { Icon } from '@form-validation/plugin-icon';
import { SubmitButton } from '@form-validation/plugin-submit-button';
import { Trigger } from '@form-validation/plugin-trigger';

document.addEventListener('DOMContentLoaded', function (e) {
    formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required',
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long',
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore',
                    },
                },
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required',
                    },
                    numeric: {
                        message: 'The price must be a number',
                    },
                },
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required',
                    },
                },
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap5: new Bootstrap5(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        },
    });
});
