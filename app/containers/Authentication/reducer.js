import { fromJS } from 'immutable';
import {
  CHECK_LOG_IN_STATUS,
} from './constants';

const initialState = fromJS({
  isLoggedIn: undefined,
});

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_LOG_IN_STATUS:
      return state.merge(fromJS({
        isLoggedIn: payload.hasToken,
      }));
    default:
      return state;
  }
}

export default authenticationReducer;
