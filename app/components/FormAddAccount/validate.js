import validator from 'validator';

const validate = (values) => {
  const errors = {};
  if (!values.get('first_name')) {
    errors.first_name = 'Required';
  } else if (values.get('first_name').length > 150) {
    errors.first_name = 'Must be 150 characters or less';
  }

  if (!values.get('last_name')) {
    errors.last_name = 'Required';
  } else if (values.get('last_name').length > 150) {
    errors.last_name = 'Must be 150 characters or less';
  }

  if (values.get('email')) {
    if (!validator.isEmail(values.get('email'))) {
      errors.email = 'Invalid email format';
    }
  }

  if (!values.get('password')) {
    errors.password = 'Required';
  }

  return errors;
};

export default validate;
