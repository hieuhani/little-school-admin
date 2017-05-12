import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';


const FieldForm = ({ label, hintText, input, type, multiLine, meta: { touched, error } }) => (
  <TextField
    hintText={hintText}
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    multiLine={multiLine}
    errorText={(touched && error) ? error : ''}
    type={type}
    {...input}
  />
);

FieldForm.propTypes = {
  label: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  multiLine: PropTypes.bool,
};

FieldForm.defaultProps = {
  hintText: '',
  multiLine: false,
};

export default FieldForm;
