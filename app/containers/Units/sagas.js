import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_UNITS_REQUEST,
  DELETE_UNIT_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getUnitsSuccess,
  getUnitsError,
  deleteUnitSuccess,
  deleteUnitError,
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

export function* deleteUnit({ payload }) {
  const response = yield call(request, routes.unit.delete(payload.schoolID, payload.courseID, payload.unitID));
  if (!response.error) {
    yield put(deleteUnitSuccess(payload.unitID));
  } else {
    yield put(deleteUnitError(response));
  }
}

export function* deleteUnitWatcher() {
  const watcher = yield takeLatest(DELETE_UNIT_REQUEST, deleteUnit);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getUnitsWatcher,
  deleteUnitWatcher,
];
