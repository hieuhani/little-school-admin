import {
  GET_CLASS_STUDENTS_REQUEST,
  GET_CLASS_STUDENTS_SUCCESS,
  GET_CLASS_STUDENTS_ERROR,
} from './constants';

export function getClassStudents(schoolID, classID) {
  return {
    type: GET_CLASS_STUDENTS_REQUEST,
    payload: {
      schoolID,
      classID,
    },
  };
}

export function getClassStudentsSuccess(data) {
  return {
    type: GET_CLASS_STUDENTS_SUCCESS,
    payload: data,
  };
}

export function getClassStudentsError(error) {
  return {
    type: GET_CLASS_STUDENTS_ERROR,
    payload: error,
  };
}
