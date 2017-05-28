import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_ERROR,
} from './constants';

export function createCourse(schoolID, course) {
  return {
    type: CREATE_COURSE_REQUEST,
    payload: {
      schoolID,
      course,
    },
  };
}

export function createCourseSuccess(data) {
  return {
    type: CREATE_COURSE_SUCCESS,
    payload: data,
  };
}

export function createCourseError(error) {
  return {
    type: CREATE_COURSE_ERROR,
    payload: error,
  };
}
