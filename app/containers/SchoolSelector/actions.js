/*
 *
 * SchoolSelector actions
 *
 */

import {
  GET_OWN_SCHOOLS_REQUEST,
  GET_OWN_SCHOOLS_SUCCESS,
  GET_OWN_SCHOOLS_ERROR,
} from './constants';

export function getOwnSchools() {
  return {
    type: GET_OWN_SCHOOLS_REQUEST,
  };
}

export function getOwnSchoolsSuccess(data) {
  return {
    type: GET_OWN_SCHOOLS_SUCCESS,
    payload: data,
  };
}

export function getOwnSchoolsError(error) {
  return {
    type: GET_OWN_SCHOOLS_ERROR,
    payload: error,
  };
}
