import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  POST_DUPLICATE_CLASS_REQUEST,
  POST_DUPLICATE_CLASS_SUCCESS,
  POST_DUPLICATE_CLASS_ERROR,
} from './constants';

export function getCourses(schoolID) {
  return {
    type: GET_COURSES_REQUEST,
    payload: {
      schoolID,
    },
  };
}

export function getCoursesSuccess(data) {
  return {
    type: GET_COURSES_SUCCESS,
    payload: data,
  };
}

export function getCoursesError(error) {
  return {
    type: GET_COURSES_ERROR,
    payload: error,
  };
}

export function duplicateClass(schoolID, classID, classroom) {
  return {
    type: POST_DUPLICATE_CLASS_REQUEST,
    payload: {
      schoolID,
      classID,
      classroom,
    },
  };
}

export function duplicateClassSuccess(data) {
  return {
    type: POST_DUPLICATE_CLASS_SUCCESS,
    payload: data,
  };
}

export function duplicateClassError(error) {
  return {
    type: POST_DUPLICATE_CLASS_ERROR,
    payload: error,
  };
}
