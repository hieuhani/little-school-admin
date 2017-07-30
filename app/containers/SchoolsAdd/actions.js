import {
  CREATE_SCHOOL_REQUEST,
  CREATE_SCHOOL_SUCCESS,
  CREATE_SCHOOL_ERROR,
} from './constants';

export function createSchool(school) {
  return {
    type: CREATE_SCHOOL_REQUEST,
    payload: {
      school,
    },
  };
}

export function createSchoolSuccess(data) {
  return {
    type: CREATE_SCHOOL_SUCCESS,
    payload: data,
  };
}

export function createSchoolError(error) {
  return {
    type: CREATE_SCHOOL_ERROR,
    payload: error,
  };
}
