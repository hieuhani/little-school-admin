import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  CREATE_UNIT_REQUEST,
  CREATE_UNIT_SUCCESS,
  CREATE_UNIT_ERROR,
} from './constants';

const initialState = fromJS({
  status: REQUEST_STATUS.INITIAL,
});

function unitsAddReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case CREATE_UNIT_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING);
    case CREATE_UNIT_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED);
    case CREATE_UNIT_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default unitsAddReducer;
