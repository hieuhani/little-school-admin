import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  CREATE_UNIT_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  createUnitSuccess,
  createUnitError,
} from './actions';

export function* createUnit({ payload }) {
  const response = yield call(request, routes.unit.create(payload.schoolID, payload.courseID, payload.unit));
  if (!response.error) {
    yield put(createUnitSuccess(response.data));
  } else {
    yield put(createUnitError(response));
  }
}

export function* createUnitWatcher() {
  const watcher = yield takeLatest(CREATE_UNIT_REQUEST, createUnit);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  createUnitWatcher,
];
