import validator from 'validator';

const validate = (values) => {
  const errors = {};
  if (!values.get('name')) {
    errors.name = 'Required';
  } else if (values.get('name').length > 150) {
    errors.name = 'Must be 150 characters or less';
  }

  if (!values.get('address')) {
    errors.address = 'Required';
  } else if (values.get('address').length > 150) {
    errors.address = 'Must be 150 characters or less';
  }

  if (values.get('email')) {
    if (!validator.isEmail(values.get('email'))) {
      errors.email = 'Invalid email format';
    }
  }

  if (values.get('website')) {
    if (values.get('website').length > 150) {
      errors.website = 'Must be shorter than 150 characters';
    }
  }

  if (values.get('hot_line')) {
    if (values.get('hot_line').length > 150) {
      errors.hot_line = 'Must be shorter than 150 characters';
    }
  }

  return errors;
};

export default validate;
