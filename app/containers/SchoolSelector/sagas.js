import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_OWN_SCHOOLS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getOwnSchoolsSuccess,
  getOwnSchoolsError,
} from './actions';

export function* getOwnSchools() {
  const response = yield call(request, routes.me.ownSchools());
  if (!response.error) {
    yield put(getOwnSchoolsSuccess(response.data));
  } else {
    yield put(getOwnSchoolsError(response));
  }
}

export function* getOwnSchoolsWatcher() {
  const watcher = yield takeLatest(GET_OWN_SCHOOLS_REQUEST, getOwnSchools);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getOwnSchoolsWatcher,
];
