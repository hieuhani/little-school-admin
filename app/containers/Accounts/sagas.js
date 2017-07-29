import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_ACCOUNTS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getAccountsSuccess,
  getAccountsError,
} from './actions';

export function* getAccounts({ payload }) {
  const response = yield call(request, routes.user.all(payload.page, payload.size));
  if (!response.error) {
    yield put(getAccountsSuccess(response.data));
  } else {
    yield put(getAccountsError(response));
  }
}

export function* getAccountsWatcher() {
  const watcher = yield takeLatest(GET_ACCOUNTS_REQUEST, getAccounts);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getAccountsWatcher,
];
