import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  CREATE_ACCOUNT_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  createAccountSuccess,
  createAccountError,
} from './actions';


export function* createAccount({ payload }) {
  const response = yield call(request, routes.user.create(payload.schoolID, payload.user));
  if (!response.error) {
    yield put(createAccountSuccess(response.data));
  } else {
    yield put(createAccountError(response.error));
  }
}

export function* createAccountWatcher() {
  const watcher = yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccount);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  createAccountWatcher,
];
