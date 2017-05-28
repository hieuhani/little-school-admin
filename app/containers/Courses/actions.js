/*
 *
 * Courses actions
 *
 */

import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_ERROR,
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
