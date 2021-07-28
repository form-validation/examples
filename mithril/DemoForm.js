var DemoForm = {
    state: {
        username: '',
        password: '',
    },
    view: function () {
        return m(
            'form',
            { id: 'loginForm', method: 'POST' },
            m(
                'div',
                { class: 'form-group row' },
                m('label', { class: 'col-sm-3 col-form-label' }, 'Username'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m('input', {
                        class: 'form-control',
                        type: 'text',
                        name: 'username',
                        oninput: (e) => (this.state.username = e.target.value),
                        value: this.state.username,
                    })
                )
            ),
            m(
                'div',
                { class: 'form-group row' },
                m('label', { class: 'col-sm-3 col-form-label' }, 'Password'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m('input', {
                        class: 'form-control',
                        type: 'password',
                        name: 'password',
                        oninput: (e) => (this.state.password = e.target.value),
                        value: this.state.password,
                    })
                )
            ),
            m(
                'div',
                { class: 'form-group row' },
                m(
                    'div',
                    { class: 'col-sm-9 offset-sm-3' },
                    m('button', { class: 'btn btn-primary', type: 'submit' }, 'Login')
                )
            )
        );
    },

    oncreate: function (vnode) {
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
            console.log(this.state.username, this.state.password);
        });
    },

    onbeforeremove: function (vnode) {
        if (this.fv) {
            this.fv.destroy();
        }
    },
};
