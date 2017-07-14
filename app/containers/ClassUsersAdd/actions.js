import {
  GET_NOT_STUDENTS_OF_CLASS_REQUEST,
  GET_NOT_STUDENTS_OF_CLASS_SUCCESS,
  GET_NOT_STUDENTS_OF_CLASS_ERROR,
  SET_SELECTED_USERS,
  POST_ADD_USERS_TO_CLASS_REQUEST,
  POST_ADD_USERS_TO_CLASS_SUCCESS,
  POST_ADD_USERS_TO_CLASS_ERROR,
} from './constants';

export function getNotStudentsOfClass(schoolID, classID) {
  return {
    type: GET_NOT_STUDENTS_OF_CLASS_REQUEST,
    payload: {
      schoolID,
      classID,
    },
  };
}

export function getNotStudentsOfClassSuccess(data) {
  return {
    type: GET_NOT_STUDENTS_OF_CLASS_SUCCESS,
    payload: data,
  };
}

export function getNotStudentsOfClassError(error) {
  return {
    type: GET_NOT_STUDENTS_OF_CLASS_ERROR,
    payload: error,
  };
}

export function handleSelectUser(indexes) {
  return {
    type: SET_SELECTED_USERS,
    payload: indexes,
  };
}

export function postAddUsersToClass(schoolID, classID, userIDs) {
  return {
    type: POST_ADD_USERS_TO_CLASS_REQUEST,
    payload: {
      schoolID,
      classID,
      userIDs,
    },
  };
}

export function postAddUsersToClassSuccess(data) {
  return {
    type: POST_ADD_USERS_TO_CLASS_SUCCESS,
    payload: data,
  };
}

export function postAddUsersToClassError(error) {
  return {
    type: POST_ADD_USERS_TO_CLASS_ERROR,
    payload: error,
  };
}
