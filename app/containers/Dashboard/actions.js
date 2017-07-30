import { DEFAULT_SCHOOL_KEY } from 'config';
import {
  CHECK_DEFAULT_SCHOOL,
  GET_SCHOOL_REQUEST,
  GET_SCHOOL_SUCCESS,
  GET_SCHOOL_ERROR,
} from './constants';

export function checkDefaultSchool() {
  const defaultSchool = window.localStorage.getItem(DEFAULT_SCHOOL_KEY);
  return {
    type: CHECK_DEFAULT_SCHOOL,
    payload: {
      defaultSchool,
    },
  };
}

export function getSchool(schoolID) {
  return {
    type: GET_SCHOOL_REQUEST,
    payload: {
      schoolID,
    },
  };
}

export function getSchoolSuccess(data) {
  return {
    type: GET_SCHOOL_SUCCESS,
    payload: data,
  };
}

export function getSchoolError(error) {
  return {
    type: GET_SCHOOL_ERROR,
    payload: error,
  };
}
