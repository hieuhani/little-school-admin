
import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  CREATE_CLASS_REQUEST,
  CREATE_CLASS_SUCCESS,
  CREATE_CLASS_ERROR,
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


export function createClass(schoolID, classroom) {
  return {
    type: CREATE_CLASS_REQUEST,
    payload: {
      schoolID,
      classroom,
    },
  };
}

export function createClassSuccess(data) {
  return {
    type: CREATE_CLASS_SUCCESS,
    payload: data,
  };
}

export function createClassError(error) {
  return {
    type: CREATE_CLASS_ERROR,
    payload: error,
  };
}
