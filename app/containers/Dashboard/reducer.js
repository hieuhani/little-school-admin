import { fromJS } from 'immutable';
import {
  CHECK_DEFAULT_SCHOOL,
  // GET_SCHOOL_REQUEST,
  GET_SCHOOL_SUCCESS,
  // GET_SCHOOL_ERROR,
} from './constants';

const initialState = fromJS({
  defaultSchool: undefined,
  school: {},
});

function dashboardReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_DEFAULT_SCHOOL:
      return state.set('defaultSchool', payload.defaultSchool);
    case GET_SCHOOL_SUCCESS:
      return state.set('school', fromJS(payload));
    default:
      return state;
  }
}

export default dashboardReducer;
