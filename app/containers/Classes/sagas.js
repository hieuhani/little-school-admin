import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_CLASSES_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getClassesSuccess,
  getClassesError,
} from './actions';

export function* getClasses({ payload }) {
  const response = yield call(request, routes.classroom.all(payload.schoolID));
  if (!response.error) {
    yield put(getClassesSuccess(response.data));
  } else {
    yield put(getClassesError(response));
  }
}

export function* getClassesWatcher() {
  const watcher = yield takeLatest(GET_CLASSES_REQUEST, getClasses);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getClassesWatcher,
];
