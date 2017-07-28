import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
} from './constants';

const initialState = fromJS({
  status: REQUEST_STATUS.INITIAL,
  error: null,
});

function accountsAddReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ACCOUNT_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING)
        .set('error', null);
    case CREATE_ACCOUNT_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED)
        .set('error', fromJS({}));
    case CREATE_ACCOUNT_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED)
        .set('error', fromJS(payload));
    default:
      return state;
  }
}

export default accountsAddReducer;
