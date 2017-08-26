import { fromJS } from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import {
  PUT_UPDATE_ACCOUNT_REQUEST,
  PUT_UPDATE_ACCOUNT_SUCCESS,
  PUT_UPDATE_ACCOUNT_ERROR,
} from './constants';

const initialState = fromJS({
  status: REQUEST_STATUS.INITIAL,
});

function accountEditReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_UPDATE_ACCOUNT_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING);
    case PUT_UPDATE_ACCOUNT_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED);
    case PUT_UPDATE_ACCOUNT_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default accountEditReducer;
