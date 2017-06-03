import {
  GET_UNITS_REQUEST,
  GET_UNITS_SUCCESS,
  GET_UNITS_ERROR,
} from './constants';

export function getUnits(schoolID, courseID) {
  return {
    type: GET_UNITS_REQUEST,
    payload: {
      schoolID,
      courseID,
    },
  };
}

export function getUnitsSuccess(data) {
  return {
    type: GET_UNITS_SUCCESS,
    payload: data,
  };
}

export function getUnitsError(error) {
  return {
    type: GET_UNITS_ERROR,
    payload: error,
  };
}
