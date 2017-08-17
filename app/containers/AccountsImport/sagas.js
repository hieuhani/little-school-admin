import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  UPLOAD_FILE_CSV_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  uploadCsvSuccess,
  uploadCsvError,
} from './actions';


export function* uploadCsv({ payload }) {
  const response = yield call(request, routes.user.importCSV(payload.schoolID, payload.file));
  if (!response.error) {
    yield put(uploadCsvSuccess(response.data, payload.file));
  } else {
    yield put(uploadCsvError(response.error));
  }
}

export function* uploadCsvWatcher() {
  const watcher = yield takeLatest(UPLOAD_FILE_CSV_REQUEST, uploadCsv);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  uploadCsvWatcher,
];
