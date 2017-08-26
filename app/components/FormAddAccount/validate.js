import validator from 'validator';

const validate = (values, props) => {
  const errors = {};
  if (!values.get('full_name')) {
    errors.full_name = 'Required';
  } else if (values.get('full_name').length > 150) {
    errors.full_name = 'Must be 150 characters or less';
  }

  if (values.get('email')) {
    if (!validator.isEmail(values.get('email'))) {
      errors.email = 'Invalid email format';
    }
  }

  if (!props.editMode) {
    if (!values.get('password')) {
      errors.password = 'Required';
    }
  }

  return errors;
};

export default validate;
