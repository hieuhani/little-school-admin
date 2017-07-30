const validate = (values) => {
  const errors = {};

  if (!values.get('username')) {
    errors.username = 'Username is required';
  }
  if (!values.get('password')) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default validate;
