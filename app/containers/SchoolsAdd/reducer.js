import { fromJS } from 'immutable';
import {
  CREATE_SCHOOL_REQUEST,
  CREATE_SCHOOL_SUCCESS,
  CREATE_SCHOOL_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  school: null,
});

function schoolsAddReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SCHOOL_REQUEST:
      return state.set('loading', true);
    case CREATE_SCHOOL_SUCCESS:
      return state.set('loading', false).set('school', fromJS(payload));
    case CREATE_SCHOOL_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default schoolsAddReducer;
