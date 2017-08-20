import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  GET_CLASS_STUDENTS_REQUEST,
  DELETE_CLASS_STUDENT_REQUEST,
  EXPORT_STUDENTS_REQUEST,
} from './constants';
import request, { routes } from '../../services/api';
import {
  getClassStudentsSuccess,
  getClassStudentsError,
  removeClassStudentSuccess,
  removeClassStudentError,
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

export function* deleteClassStudent({ payload }) {
  const response = yield call(request, routes.classroom.deleteStudent(payload.schoolID, payload.classID, payload.studentID));
  if (!response.error) {
    yield put(removeClassStudentSuccess(payload.studentID));
  } else {
    yield put(removeClassStudentError(response));
  }
}

export function* deleteClassStudentWatcher() {
  const watcher = yield takeLatest(DELETE_CLASS_STUDENT_REQUEST, deleteClassStudent);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* exportClassStudents({ payload }) {
  yield call(request, routes.classroom.exportClassStudents(payload.schoolID, payload.classID));
  // if (!response.error) {
  //   yield put(removeClassStudentSuccess(payload.studentID));
  // } else {
  //   yield put(removeClassStudentError(response));
  // }
}

export function* exportClassStudentsWatcher() {
  const watcher = yield takeLatest(EXPORT_STUDENTS_REQUEST, exportClassStudents);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  getClassStudentsWatcher,
  deleteClassStudentWatcher,
  exportClassStudentsWatcher,
];
