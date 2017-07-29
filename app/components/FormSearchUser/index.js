import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import ViewIconTextField from '../ViewIconTextField';
import FieldForm from '../FieldForm';


function FormSearchUser({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={FieldForm} hintText={<ViewIconTextField icon="search" text="Search student by username" />} />
    </form>
  );
}

FormSearchUser.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({ // eslint-disable-line no-class-assign
  form: 'FormSearchUser',
})(FormSearchUser);
