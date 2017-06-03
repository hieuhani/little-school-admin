import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_UNITS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getUnitsSuccess,
  getUnitsError,
} from './actions';

export function* getUnits({ payload }) {
  const response = yield call(request, routes.unit.all(payload.schoolID, payload.courseID));
  if (!response.error) {
    yield put(getUnitsSuccess(response.data));
  } else {
    yield put(getUnitsError(response));
  }
}

export function* getUnitsWatcher() {
  const watcher = yield takeLatest(GET_UNITS_REQUEST, getUnits);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getUnitsWatcher,
];
