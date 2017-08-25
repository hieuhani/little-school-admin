import {
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_ERROR,
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

export function deleteClass(schoolID, classID) {
  return {
    type: DELETE_CLASS_REQUEST,
    payload: {
      schoolID,
      classID,
    },
  };
}

export function deleteClassSuccess(data) {
  return {
    type: DELETE_CLASS_SUCCESS,
    payload: data,
  };
}

export function deleteClassError(error) {
  return {
    type: DELETE_CLASS_ERROR,
    payload: error,
  };
}
