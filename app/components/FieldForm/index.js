import React from 'react';
import PropTypes from 'prop-types';
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
  hintText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
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
