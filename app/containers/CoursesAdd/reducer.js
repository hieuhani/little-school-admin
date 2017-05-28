import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';

import {
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_ERROR,
} from './constants';

const initialState = fromJS({
  status: REQUEST_STATUS.INITIAL,
});

function coursesAddReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case CREATE_COURSE_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING);
    case CREATE_COURSE_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED);
    case CREATE_COURSE_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default coursesAddReducer;
