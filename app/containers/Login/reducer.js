import { fromJS } from 'immutable';
import {
  SIGN_IN_BY_EMAIL_REQUEST,
  SIGN_IN_BY_EMAIL_SUCCESS,
  SIGN_IN_BY_EMAIL_ERROR,
} from './constants';

const initialState = fromJS({
  error: null,
  user: null,
  loading: false,
});

function loginReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN_BY_EMAIL_REQUEST:
      return state.merge(fromJS({
        loading: true,
        error: null,
      }));
    case SIGN_IN_BY_EMAIL_SUCCESS:
      return state.merge(fromJS({
        user: payload.user,
        loading: false,
        error: null,
      }));
    case SIGN_IN_BY_EMAIL_ERROR:
      return state.merge(fromJS({
        user: null,
        loading: false,
        error: payload.response,
      }));
    default:
      return state;
  }
}

export default loginReducer;
