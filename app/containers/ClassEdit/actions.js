import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
  GET_CLASS_ERROR,
  PUT_UPDATE_CLASS_REQUEST,
  PUT_UPDATE_CLASS_SUCCESS,
  PUT_UPDATE_CLASS_ERROR,
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

export function getClassDetails(schoolID, classID) {
  return {
    type: GET_CLASS_REQUEST,
    payload: {
      schoolID,
      classID,
    },
  };
}

export function getClassDetailsSuccess(data) {
  return {
    type: GET_CLASS_SUCCESS,
    payload: data,
  };
}

export function getClassDetailsError(error) {
  return {
    type: GET_CLASS_ERROR,
    payload: error,
  };
}

export function updateClass(schoolID, classroom) {
  return {
    type: PUT_UPDATE_CLASS_REQUEST,
    payload: {
      schoolID,
      classID: classroom.get('id'),
      classroom,
    },
  };
}

export function updateClassSuccess(data) {
  return {
    type: PUT_UPDATE_CLASS_SUCCESS,
    payload: data,
  };
}

export function updateClassError(error) {
  return {
    type: PUT_UPDATE_CLASS_ERROR,
    payload: error,
  };
}
