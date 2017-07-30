import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import _ from 'lodash';
import { ACCESS_TOKEN_KEY } from 'config';
import { SIGN_IN_BY_EMAIL_REQUEST } from './constants';
import request, { routes } from '../../services/api';
import {
  signInByEmailSuccess,
  signInByEmailError,
} from './actions';

/**
 * Set auth token to local storage
 * @param token
 */
export function setAuthToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

/**
 * Send sign in by email request to server
 * @param payload
 */
export function* postSignInByEmail({ payload }) {
  const response = yield call(request, routes.exchangeToken(payload.username, payload.password));
  if (!response.error) {
    const authToken = _.get(response, 'data.token.encoded');
    if (authToken) {
      yield call(setAuthToken, authToken);
      yield put(signInByEmailSuccess(response.data));
    } else {
      yield put(signInByEmailError({
        message_code: 'error.auth.invalid_response',
      }));
    }
  } else {
    yield put(signInByEmailError(response.error));
  }
}

/**
 * Watcher for Sign in by email action
 */
export function* postSignInByEmailWatcher() {
  const watcher = yield takeLatest(SIGN_IN_BY_EMAIL_REQUEST, postSignInByEmail);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  postSignInByEmailWatcher,
];
