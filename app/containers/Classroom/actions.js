import {
  GET_CLASS_STUDENTS_REQUEST,
  GET_CLASS_STUDENTS_SUCCESS,
  GET_CLASS_STUDENTS_ERROR,
  DELETE_CLASS_STUDENT_REQUEST,
  DELETE_CLASS_STUDENT_SUCCESS,
  DELETE_CLASS_STUDENT_ERROR,
  EXPORT_STUDENTS_REQUEST,
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

export function removeClassStudent(schoolID, classID, studentID) {
  return {
    type: DELETE_CLASS_STUDENT_REQUEST,
    payload: {
      schoolID,
      classID,
      studentID,
    },
  };
}

export function removeClassStudentSuccess(studentID) {
  return {
    type: DELETE_CLASS_STUDENT_SUCCESS,
    payload: {
      studentID,
    },
  };
}

export function removeClassStudentError(error) {
  return {
    type: DELETE_CLASS_STUDENT_ERROR,
    payload: error,
  };
}

export function exportStudents(schoolID, classID) {
  return {
    type: EXPORT_STUDENTS_REQUEST,
    payload: {
      schoolID,
      classID,
    },
  };
}
