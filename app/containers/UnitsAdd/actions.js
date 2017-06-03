import {
  CREATE_UNIT_REQUEST,
  CREATE_UNIT_SUCCESS,
  CREATE_UNIT_ERROR,
} from './constants';

export function createUnit(schoolID, courseID, formValues) {
  const formData = new FormData();
  formData.append('name', formValues.get('name'));
  formData.append('description', formValues.get('description'));
  formData.append('icon', formValues.get('iconFile'));
  formData.append('cover', formValues.get('coverFile'));
  return {
    type: CREATE_UNIT_REQUEST,
    payload: {
      schoolID,
      courseID,
      unit: formData,
    },
  };
}

export function createUnitSuccess(data) {
  return {
    type: CREATE_UNIT_SUCCESS,
    payload: data,
  };
}

export function createUnitError(error) {
  return {
    type: CREATE_UNIT_ERROR,
    payload: error,
  };
}
