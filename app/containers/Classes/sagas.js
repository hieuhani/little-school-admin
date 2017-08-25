import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_CLASSES_REQUEST,
  DELETE_CLASS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getClassesSuccess,
  getClassesError,
  deleteClassSuccess,
  deleteClassError,
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

export function* deleteClass({ payload }) {
  const response = yield call(request, routes.classroom.delete(payload.schoolID, payload.classID));
  if (!response.error) {
    yield put(deleteClassSuccess(response.data));
  } else {
    yield put(deleteClassError(response));
  }
}

export function* deleteClassWatcher() {
  const watcher = yield takeLatest(DELETE_CLASS_REQUEST, deleteClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getClassesWatcher,
  deleteClassWatcher,
];
