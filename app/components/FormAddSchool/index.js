import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import FieldForm from '../FieldForm';
import validate from './validate';

function FormAddSchool({ handleSubmit, loading, invalid }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={FieldForm} label="Name *" hintText="School name" />
      <Field name="address" type="text" component={FieldForm} label="Address *" hintText="Address" />
      <Field name="website" type="text" component={FieldForm} label="Website" hintText="Website" />
      <Field name="email" type="text" component={FieldForm} label="Email" hintText="Email" />
      <Field name="hot_line" type="text" component={FieldForm} label="Hot line" hintText="Hot line" />
      <RaisedButton
        label="Create school"
        primary
        type="submit"
        disabled={invalid || loading}
      />
    </form>
  );
}

FormAddSchool.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
};

export default reduxForm({
  form: 'FormAddSchool',
  validate,
})(FormAddSchool);
