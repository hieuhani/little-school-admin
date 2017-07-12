import {
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
} from './constants';

export function getClasses(schoolID) {
  return {
    type: GET_CLASSES_REQUEST,
    payload: {
      schoolID,
    },
  };
}

export function getClassesSuccess(data) {
  return {
    type: GET_CLASSES_SUCCESS,
    payload: data,
  };
}

export function getClassesError(error) {
  return {
    type: GET_CLASSES_ERROR,
    payload: error,
  };
}
