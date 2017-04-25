import {
  SIGN_IN_BY_EMAIL_REQUEST,
  SIGN_IN_BY_EMAIL_SUCCESS,
  SIGN_IN_BY_EMAIL_ERROR,
} from './constants';

export function signInByEmail(loginData) {
  return {
    type: SIGN_IN_BY_EMAIL_REQUEST,
    payload: loginData,
  };
}

export function signInByEmailSuccess(data) {
  return {
    type: SIGN_IN_BY_EMAIL_SUCCESS,
    payload: data,
  };
}

export function signInByEmailError(error) {
  return {
    type: SIGN_IN_BY_EMAIL_ERROR,
    payload: error,
  };
}
