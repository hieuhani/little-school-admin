import {
  GET_UNITS_REQUEST,
  GET_UNITS_SUCCESS,
  GET_UNITS_ERROR,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_ERROR,
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


export function deleteUnit(schoolID, courseID, unitID) {
  return {
    type: DELETE_UNIT_REQUEST,
    payload: {
      schoolID,
      courseID,
      unitID,
    },
  };
}

export function deleteUnitSuccess(unitID) {
  return {
    type: DELETE_UNIT_SUCCESS,
    payload: {
      unitID,
    },
  };
}

export function deleteUnitError(error) {
  return {
    type: DELETE_UNIT_ERROR,
    payload: error,
  };
}
