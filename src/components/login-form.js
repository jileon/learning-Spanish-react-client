import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {nonEmpty, unrequired,pwrequired} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username"></label>
                
                <Field
                    component={Input}
                    placeholder="username"
                    type="text"
                    name="username"
                    id="username"
                    validate={[unrequired, nonEmpty]}
                />
                   <div className='form-separator'></div>
                <label htmlFor="password"></label>
                <Field
                    placeholder="password"
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[pwrequired, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting} className="play-button button2">
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
