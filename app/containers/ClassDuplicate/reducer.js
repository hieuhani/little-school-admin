import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  GET_COURSES_SUCCESS,
  POST_DUPLICATE_CLASS_REQUEST,
  POST_DUPLICATE_CLASS_SUCCESS,
  POST_DUPLICATE_CLASS_ERROR,
} from './constants';

const initialState = fromJS({
  courses: [],
  duplicateStatus: REQUEST_STATUS.INITIAL,
});

function classDuplicateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSES_SUCCESS:
      return state
        .set('courses', fromJS(payload));
    case POST_DUPLICATE_CLASS_REQUEST:
      return state
        .set('duplicateStatus', REQUEST_STATUS.REQUESTING);
    case POST_DUPLICATE_CLASS_SUCCESS:
      return state
        .set('duplicateStatus', REQUEST_STATUS.SUCCEEDED);
    case POST_DUPLICATE_CLASS_ERROR:
      return state
        .set('duplicateStatus', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default classDuplicateReducer;
