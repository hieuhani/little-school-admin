import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
} from './constants';

export function createAccount(schoolID, user) {
  return {
    type: CREATE_ACCOUNT_REQUEST,
    payload: {
      schoolID,
      user: user.set('password_confirmation', user.get('password')),
    },
  };
}

export function createAccountSuccess(data) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    payload: data,
  };
}

export function createAccountError(error) {
  return {
    type: CREATE_ACCOUNT_ERROR,
    payload: error.response,
  };
}
