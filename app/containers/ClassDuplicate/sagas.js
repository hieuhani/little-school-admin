import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_COURSES_REQUEST,
  POST_DUPLICATE_CLASS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getCoursesSuccess,
  getCoursesError,
  duplicateClassSuccess,
  duplicateClassError,
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

export function* duplicateClass({ payload }) {
  const response = yield call(request, routes.classroom.duplicate(payload.schoolID, payload.classID, payload.classroom));
  if (!response.error) {
    yield put(duplicateClassSuccess(response.data));
  } else {
    yield put(duplicateClassError(response));
  }
}

export function* duplicateClassWatcher() {
  const watcher = yield takeLatest(POST_DUPLICATE_CLASS_REQUEST, duplicateClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getCoursesWatcher,
  duplicateClassWatcher,
];
