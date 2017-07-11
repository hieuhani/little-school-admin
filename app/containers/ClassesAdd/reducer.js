import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  GET_COURSES_SUCCESS,
  CREATE_CLASS_REQUEST,
  CREATE_CLASS_SUCCESS,
  CREATE_CLASS_ERROR,
} from './constants';

const initialState = fromJS({
  courses: [],
  status: REQUEST_STATUS.INITIAL,
});

function classesAddReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSES_SUCCESS:
      return state
        .set('courses', fromJS(payload));
    case CREATE_CLASS_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING);
    case CREATE_CLASS_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED);
    case CREATE_CLASS_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default classesAddReducer;
