import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  PUT_UPDATE_ACCOUNT_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  updateAccountSuccess,
  updateAccountError,
} from './actions';

export function* putUpdateAccount({ payload }) {
  const response = yield call(request, routes.user.update(payload.schoolID, payload.userID, payload.account));
  if (!response.error) {
    yield put(updateAccountSuccess(response.data));
  } else {
    yield put(updateAccountError(response));
  }
}

export function* putUpdateAccountWatcher() {
  const watcher = yield takeLatest(PUT_UPDATE_ACCOUNT_REQUEST, putUpdateAccount);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  putUpdateAccountWatcher,
];
