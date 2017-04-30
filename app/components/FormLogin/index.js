/**
*
* FormLogin
*
*/

import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { RaisedButton } from 'material-ui';
import FieldForm from '../FieldForm';

import './styles.scss';

function FormLogin(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="form-login">
      <Field name="username" type="text" component={FieldForm} label="Email" hintText="Enter your email" />
      <Field name="password" type="password" component={FieldForm} label="Password" hintText="Enter your password" />
      <div className="form-actions">
        <RaisedButton label="Sign in" primary />
        <button className="clear-button forgot">Forgot password</button>
      </div>
      <div className="copyright">
        <p>
          2017 &copy; Little School
        </p>
      </div>
    </form>
  );
}

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'FormLogin',
})(FormLogin);
