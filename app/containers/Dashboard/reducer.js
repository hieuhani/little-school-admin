import { fromJS } from 'immutable';
import {
  CHECK_DEFAULT_SCHOOL,
} from './constants';

const initialState = fromJS({
  defaultSchool: undefined,
});

function dashboardReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_DEFAULT_SCHOOL:
      return state.set('defaultSchool', payload.defaultSchool);
    default:
      return state;
  }
}

export default dashboardReducer;
