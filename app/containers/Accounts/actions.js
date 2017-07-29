import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_ERROR,
  CHANGE_PAGE,
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
