import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_UNIT_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getUnitSuccess,
  getUnitError,
} from './actions';

export function* getUnit({ payload }) {
  const response = yield call(request, routes.unit.get(payload.schoolID, payload.courseID, payload.unitID));
  if (!response.error) {
    yield put(getUnitSuccess(response.data));
  } else {
    yield put(getUnitError(response));
  }
}

export function* getUnitWatcher() {
  const watcher = yield takeLatest(GET_UNIT_REQUEST, getUnit);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getUnitWatcher,
];
