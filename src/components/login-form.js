import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { nonEmpty, unrequired, pwrequired } from '../validators';

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
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <p>Demo Username: test</p>
        <p>Demo Password: password123</p>
        {error}
        <label htmlFor="username" />

        <Field
          component={Input}
          placeholder="test"
          type="text"
          name="username-login"
          validate={[unrequired, nonEmpty]}
        />
        <div className="form-separator" />
        <label htmlFor="password" />
        <Field
          placeholder="password123"
          component={Input}
          type="password"
          name="password-login"
          validate={[pwrequired, nonEmpty]}
        />
        <button
          disabled={this.props.pristine || this.props.submitting}
          className="play-button button2"
        >
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
