/*
 *
 * Accounts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_ERROR,
  CHANGE_PAGE,
} from './constants';

const initialState = fromJS({
  loading: false,
  users: [],
  page: 1,
  count: 0,
  per_page: 5,
});

function accountsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ACCOUNTS_REQUEST:
      return state.set('loading', true);
    case GET_ACCOUNTS_SUCCESS:
      return state
        .set('loading', false)
        .set('users', fromJS(payload.users))
        .set('count', payload.count);
    case GET_ACCOUNTS_ERROR:
      return state.set('loading', false);
    case CHANGE_PAGE:
      return state.set('page', payload.page);
    default:
      return state;
  }
}

export default accountsReducer;
