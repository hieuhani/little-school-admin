import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';

const FieldForm = ({ label, hintText, input, type }) => (
  <TextField
    hintText={hintText}
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    {...input}
    type={type}
  />
);

FieldForm.propTypes = {
  label: PropTypes.string,
  hintText: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
};

FieldForm.defaultProps = {
  hintText: '',
};

export default FieldForm;
