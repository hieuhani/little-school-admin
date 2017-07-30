import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_SCHOOL_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getSchoolSuccess,
  getSchoolError,
} from './actions';

export function* getSchool({ payload }) {
  const response = yield call(request, routes.school.show(payload.schoolID));
  if (!response.error) {
    yield put(getSchoolSuccess(response.data));
  } else {
    yield put(getSchoolError(response));
  }
}

export function* getSchoolWatcher() {
  const watcher = yield takeLatest(GET_SCHOOL_REQUEST, getSchool);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getSchoolWatcher,
];
