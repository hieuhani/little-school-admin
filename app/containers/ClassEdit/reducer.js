import { REQUEST_STATUS } from 'global-constants';
import { fromJS } from 'immutable';
import {
  GET_COURSES_SUCCESS,
  GET_CLASS_SUCCESS,
  PUT_UPDATE_CLASS_REQUEST,
  PUT_UPDATE_CLASS_SUCCESS,
  PUT_UPDATE_CLASS_ERROR,
} from './constants';

const initialState = fromJS({
  courses: [],
  updateStatus: REQUEST_STATUS.INITIAL,
  classroom: null,
});

function classEditReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSES_SUCCESS:
      return state
        .set('courses', fromJS(payload));
    case GET_CLASS_SUCCESS:
      return state
        .set('classroom', fromJS(payload));
    case PUT_UPDATE_CLASS_REQUEST:
      return state
        .set('updateStatus', REQUEST_STATUS.REQUESTING);
    case PUT_UPDATE_CLASS_SUCCESS:
      return state
        .set('updateStatus', REQUEST_STATUS.SUCCEEDED);
    case PUT_UPDATE_CLASS_ERROR:
      return state
        .set('updateStatus', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default classEditReducer;
