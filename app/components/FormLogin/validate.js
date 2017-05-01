import validator from 'validator';

const validate = (values) => {
  const errors = {};

  if (!values.get('email')) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = 'Email is not valid';
  }
  if (!values.get('password')) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validate;
