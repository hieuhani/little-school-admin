import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  CREATE_SCHOOL_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  createSchoolSuccess,
  createSchoolError,
} from './actions';

export function* createSchool({ payload }) {
  const response = yield call(request, routes.school.create(payload.school));
  if (!response.error) {
    yield put(createSchoolSuccess(response.data));
  } else {
    yield put(createSchoolError(response));
  }
}

export function* createSchoolWatcher() {
  const watcher = yield takeLatest(CREATE_SCHOOL_REQUEST, createSchool);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  createSchoolWatcher,
];
