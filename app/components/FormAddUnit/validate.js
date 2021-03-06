const validate = (values) => {
  const errors = {};
  if (!values.get('name')) {
    errors.name = 'Required';
  } else if (values.get('name').length > 100) {
    errors.name = 'Must be 100 characters or less';
  }

  if (!values.get('description')) {
    errors.description = 'Required';
  } else if (values.get('description').length > 500) {
    errors.description = 'Must be 500 characters or less';
  }

  if (!values.get('iconFile')) {
    errors.iconFile = 'Required';
  }

  return errors;
};

export default validate;
