import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_ERROR,
  CHANGE_PAGE,
  SEARCH_BY_USERNAME_REQUEST,
  SEARCH_BY_USERNAME_SUCCESS,
  SEARCH_BY_USERNAME_ERROR,
  CLEAR_STUDENT_DETAILS,
} from './constants';

export function getAccounts(page, size) {
  return {
    type: GET_ACCOUNTS_REQUEST,
    payload: {
      page,
      size,
    },
  };
}

export function getAccountsSuccess(data) {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    payload: data,
  };
}

export function getAccountsError(error) {
  return {
    type: GET_ACCOUNTS_ERROR,
    payload: error,
  };
}

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: {
      page,
    },
  };
}


export function handleSearchUser(username) {
  return {
    type: SEARCH_BY_USERNAME_REQUEST,
    payload: {
      username,
    },
  };
}

export function handleSearchUserSuccess(data) {
  return {
    type: SEARCH_BY_USERNAME_SUCCESS,
    payload: data,
  };
}

export function handleSearchUserError(error) {
  return {
    type: SEARCH_BY_USERNAME_ERROR,
    payload: error,
  };
}

export function clearStudentDetails() {
  return {
    type: CLEAR_STUDENT_DETAILS,
  };
}
