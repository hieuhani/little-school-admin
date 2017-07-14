import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_NOT_STUDENTS_OF_CLASS_REQUEST,
  POST_ADD_USERS_TO_CLASS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getNotStudentsOfClassSuccess,
  getNotStudentsOfClassError,
  postAddUsersToClassSuccess,
  postAddUsersToClassError,
} from './actions';

export function* getNotStudentsOfClass({ payload }) {
  const response = yield call(request, routes.user.notJoinToClass(payload.schoolID, payload.classID));
  if (!response.error) {
    yield put(getNotStudentsOfClassSuccess(response.data));
  } else {
    yield put(getNotStudentsOfClassError(response));
  }
}

export function* getNotStudentsOfClassWatcher() {
  const watcher = yield takeLatest(GET_NOT_STUDENTS_OF_CLASS_REQUEST, getNotStudentsOfClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* postAddUsersToClass({ payload }) {
  const response = yield call(request, routes.classroom.addStudents(payload.schoolID, payload.classID, payload.userIDs));
  if (!response.error) {
    yield put(postAddUsersToClassSuccess(response.data));
  } else {
    yield put(postAddUsersToClassError(response));
  }
}

export function* postAddUsersToClassWatcher() {
  const watcher = yield takeLatest(POST_ADD_USERS_TO_CLASS_REQUEST, postAddUsersToClass);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getNotStudentsOfClassWatcher,
  postAddUsersToClassWatcher,
];
