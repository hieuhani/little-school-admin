import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_COURSES_REQUEST,
  GET_CLASS_REQUEST,
  PUT_UPDATE_CLASS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getCoursesSuccess,
  getCoursesError,
  getClassDetailsSuccess,
  getClassDetailsError,
  updateClassSuccess,
  updateClassError,
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

export function* getClass({ payload }) {
  const response = yield call(request, routes.classroom.show(payload.schoolID, payload.classID));
  if (!response.error) {
    yield put(getClassDetailsSuccess(response.data));
  } else {
    yield put(getClassDetailsError(response));
  }
}

export function* getClassWatcher() {
  const watcher = yield takeLatest(GET_CLASS_REQUEST, getClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* putUpdateClass({ payload }) {
  const response = yield call(request, routes.classroom.update(payload.schoolID, payload.classID, payload.classroom));
  if (!response.error) {
    yield put(updateClassSuccess(response.data));
  } else {
    yield put(updateClassError(response));
  }
}

export function* putUpdateClassWatcher() {
  const watcher = yield takeLatest(PUT_UPDATE_CLASS_REQUEST, putUpdateClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getCoursesWatcher,
  getClassWatcher,
  putUpdateClassWatcher,
];
