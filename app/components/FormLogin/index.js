import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { RaisedButton } from 'material-ui';
import FieldForm from '../FieldForm';
import validate from './validate';

import './styles.scss';

function FormLogin(props) {
  const { handleSubmit, invalid } = props;
  return (
    <form onSubmit={handleSubmit} className="form-login">
      <Field name="email" type="text" component={FieldForm} label="Email" hintText="Enter your email" />
      <Field name="password" type="password" component={FieldForm} label="Password" hintText="Enter your password" />
      <div className="form-actions">
        <RaisedButton label="Sign in" primary onTouchTap={handleSubmit} disabled={invalid} type="submit" />
        <button className="clear-button forgot" type="button">Forgot password</button>
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
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'FormLogin',
  validate,
})(FormLogin);
