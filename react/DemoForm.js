const e = React.createElement;

class DemoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return e(
            'form',
            { id: 'loginForm', method: 'POST' },
            e(
                'div',
                { className: 'form-group row' },
                e('label', { className: 'col-sm-3 col-form-label' }, 'Username'),
                e(
                    'div',
                    { className: 'col-sm-4' },
                    e('input', {
                        className: 'form-control',
                        type: 'text',
                        name: 'username',
                        onChange: (e) => this.setState({ username: e.target.value }),
                    })
                )
            ),
            e(
                'div',
                { className: 'form-group row' },
                e('label', { className: 'col-sm-3 col-form-label' }, 'Password'),
                e(
                    'div',
                    { className: 'col-sm-4' },
                    e('input', {
                        className: 'form-control',
                        type: 'password',
                        name: 'password',
                        onChange: (e) => this.setState({ password: e.target.value }),
                    })
                )
            ),
            e(
                'div',
                { className: 'form-group row' },
                e(
                    'div',
                    { className: 'col-sm-9 offset-sm-3' },
                    e('button', { className: 'btn btn-primary', type: 'submit' }, 'Login')
                )
            )
        );
    }

    componentDidMount() {
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
    }

    componentWillUnmount() {
        if (this.fv) {
            this.fv.destroy();
        }
    }
}
