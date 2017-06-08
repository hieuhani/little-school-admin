import {
  GET_UNIT_REQUEST,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
} from './constants';

export function getUnit(schoolID, courseID, unitID) {
  return {
    type: GET_UNIT_REQUEST,
    payload: {
      schoolID,
      courseID,
      unitID,
    },
  };
}

export function getUnitSuccess(data) {
  return {
    type: GET_UNIT_SUCCESS,
    payload: data,
  };
}

export function getUnitError(error) {
  return {
    type: GET_UNIT_ERROR,
    payload: error,
  };
}
