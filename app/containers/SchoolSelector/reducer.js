import { fromJS } from 'immutable';
import {
  GET_OWN_SCHOOLS_REQUEST,
  GET_OWN_SCHOOLS_SUCCESS,
  GET_OWN_SCHOOLS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  schools: [],
});

function schoolSelectorReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OWN_SCHOOLS_REQUEST:
      return state.set('loading', true);
    case GET_OWN_SCHOOLS_SUCCESS:
      return state.set('loading', false).set('schools', fromJS(payload));
    case GET_OWN_SCHOOLS_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default schoolSelectorReducer;
