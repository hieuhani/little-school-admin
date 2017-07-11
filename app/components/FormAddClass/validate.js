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

  if (!values.get('price')) {
    errors.price = 'Required';
  } else if (isNaN(values.get('price'))) {
    errors.price = 'Price must an integer number';
  }

  if (!values.get('course_id')) {
    errors.course_id = 'Required';
  }

  return errors;
};

export default validate;
