import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_COURSES_REQUEST,
  CREATE_CLASS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getCoursesSuccess,
  getCoursesError,
  createClassSuccess,
  createClassError,
} from './actions';

export function* getCourses({ payload }) {
  const response = yield call(request, routes.course.all(payload.schoolID));
  if (!response.error) {
    yield put(getCoursesSuccess(response.data));
  } else {
    yield put(getCoursesError(response));
  }
}

export function* getCoursesWatcher() {
  const watcher = yield takeLatest(GET_COURSES_REQUEST, getCourses);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* createClass({ payload }) {
  const response = yield call(request, routes.classroom.create(payload.schoolID, payload.classroom));
  if (!response.error) {
    yield put(createClassSuccess(response.data));
  } else {
    yield put(createClassError(response));
  }
}

export function* createClassWatcher() {
  const watcher = yield takeLatest(CREATE_CLASS_REQUEST, createClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getCoursesWatcher,
  createClassWatcher,
];
