import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  // GET_UNITS_REQUEST,
  GET_UNITS_SUCCESS,
  // GET_UNITS_ERROR,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_ERROR,
} from './constants';

import {
  CREATE_UNIT_SUCCESS,
} from '../UnitsAdd/constants';

const initialState = fromJS({
  units: [],
  deleteStatus: REQUEST_STATUS.INITIAL,
});

function unitsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_UNITS_SUCCESS:
      return state
        .set('units', fromJS(payload));
    case CREATE_UNIT_SUCCESS:
      return state
        .set('units', state.get('units').push(fromJS(payload)));
    case DELETE_UNIT_REQUEST:
      return state
        .set('deleteStatus', REQUEST_STATUS.SUCCEEDED);
    case DELETE_UNIT_SUCCESS:
      return state
        .set('units', state.get('units').filter((unit) => (unit.get('id') !== payload.unitID)))
        .set('deleteStatus', REQUEST_STATUS.SUCCEEDED);
    case DELETE_UNIT_ERROR:
      return state
        .set('deleteStatus', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default unitsReducer;
