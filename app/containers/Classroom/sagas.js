import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_CLASS_STUDENTS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getClassStudentsSuccess,
  getClassStudentsError,
} from './actions';

export function* getClassStudents({ payload }) {
  const response = yield call(request, routes.classroom.students(payload.schoolID, payload.classID));
  if (!response.error) {
    yield put(getClassStudentsSuccess(response.data));
  } else {
    yield put(getClassStudentsError(response));
  }
}

export function* getClassStudentsWatcher() {
  const watcher = yield takeLatest(GET_CLASS_STUDENTS_REQUEST, getClassStudents);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getClassStudentsWatcher,
];
