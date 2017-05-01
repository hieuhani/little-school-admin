import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const FieldForm = ({ label, hintText, input, type, meta: { touched, error } }) => (
  <TextField
    hintText={hintText}
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    errorText={(touched && error) ? error : ''}
    {...input}
    type={type}
  />
);

FieldForm.propTypes = {
  label: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

FieldForm.defaultProps = {
  hintText: '',
};

export default FieldForm;
