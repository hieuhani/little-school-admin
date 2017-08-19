import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { RaisedButton } from 'material-ui';
import styled from 'styled-components';
import FieldForm from '../FieldForm';
import validate from './validate';
import './styles.scss';

const ErrorMessage = styled.p`
  color: #F44336;
  margin-top: 15px;
`;

function FormLogin(props) {
  const { handleSubmit, invalid, authError } = props;
  return (
    <form onSubmit={handleSubmit} className="form-login">
      <Field name="username" type="text" component={FieldForm} label="Username" hintText="Enter your username" />
      <Field name="password" type="password" component={FieldForm} label="Password" hintText="Enter your password" />
      <div className="form-actions">
        <RaisedButton label="Sign in" primary disabled={invalid} type="submit" />
        <button className="clear-button forgot" type="button">Forgot password</button>
      </div>
      {authError && <ErrorMessage>
        {authError.get('auth')}
      </ErrorMessage>}
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
  authError: PropTypes.object,
};

export default reduxForm({
  form: 'FormLogin',
  validate,
})(FormLogin);
