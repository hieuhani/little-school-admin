import {
  PUT_UPDATE_ACCOUNT_REQUEST,
  PUT_UPDATE_ACCOUNT_SUCCESS,
  PUT_UPDATE_ACCOUNT_ERROR,
} from './constants';

export function updateAccount(schoolID, userID, account) {
  return {
    type: PUT_UPDATE_ACCOUNT_REQUEST,
    payload: {
      schoolID,
      userID,
      account,
    },
  };
}

export function updateAccountSuccess(data) {
  return {
    type: PUT_UPDATE_ACCOUNT_SUCCESS,
    payload: data,
  };
}

export function updateAccountError(error) {
  return {
    type: PUT_UPDATE_ACCOUNT_ERROR,
    payload: error,
  };
}
