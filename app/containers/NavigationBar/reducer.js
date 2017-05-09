/*
 *
 * NavigationBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOG_OUT,
} from './constants';
import {
  SIGN_IN_BY_EMAIL_SUCCESS,
} from '../Login/constants';

const initialState = fromJS({
  isLoggedOut: false,
});

function navigationBarReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case LOG_OUT:
      return state.set('isLoggedOut', true);
    case SIGN_IN_BY_EMAIL_SUCCESS:
      return state.set('isLoggedOut', false);
    default:
      return state;
  }
}

export default navigationBarReducer;
