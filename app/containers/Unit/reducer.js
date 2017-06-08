import { fromJS } from 'immutable';
import {
  GET_UNIT_REQUEST,
  GET_UNIT_SUCCESS,
  // GET_UNIT_ERROR,
} from './constants';

const initialState = fromJS({
  unit: {},
});

function unitReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_UNIT_REQUEST:
      return state;
    case GET_UNIT_SUCCESS:
      return state
        .set('unit', fromJS(payload));
    default:
      return state;
  }
}

export default unitReducer;
