const el = redom.el;

class DemoForm {
    constructor() {
        this.username = '';
        this.password = '';

        this.el = el(
            'form',
            { id: 'loginForm', method: 'POST' },
            el(
                'div',
                { className: 'form-group row' },
                el('label', { className: 'col-sm-3 col-form-label' }, 'Username'),
                el(
                    'div',
                    { className: 'col-sm-4' },
                    el('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'username',
                        oninput: (e) => (this.username = e.target.value),
                    })
                )
            ),
            el(
                'div',
                { className: 'form-group row' },
                el('label', { className: 'col-sm-3 col-form-label' }, 'Password'),
                el(
                    'div',
                    { className: 'col-sm-4' },
                    el('input', {
                        className: 'form-control',
                        type: 'password',
                        name: 'password',
                        oninput: (e) => (this.password = e.target.value),
                    })
                )
            ),
            el(
                'div',
                { className: 'form-group row' },
                el(
                    'div',
                    { className: 'col-sm-9 offset-sm-3' },
                    el('button', { className: 'btn btn-primary', type: 'submit' }, 'Login')
                )
            )
        );
    }

    onmount() {
        const that = this;
        this.fv = FormValidation.formValidation(document.getElementById('loginForm'), {
            fields: {
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
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required',
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }).on('core.form.valid', () => {
            console.log(this.username, this.password);
        });
    }

    onunmount() {
        if (this.fv) {
            this.fv.destroy();
        }
    }
}
