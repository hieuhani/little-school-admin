import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  CREATE_COURSE_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  createCourseSuccess,
  createCourseError,
} from './actions';

export function* createCourse({ payload }) {
  const response = yield call(request, routes.course.create(payload.schoolID, payload.course));
  if (!response.error) {
    yield put(createCourseSuccess(response.data));
  } else {
    yield put(createCourseError(response));
  }
}

export function* createCourseWatcher() {
  const watcher = yield takeLatest(CREATE_COURSE_REQUEST, createCourse);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  createCourseWatcher,
];
