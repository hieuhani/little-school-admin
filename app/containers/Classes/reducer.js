import { fromJS } from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import {
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_ERROR,
} from './constants';

const initialState = fromJS({
  classes: [],
  gettingClasses: false,
  deleteClassStatus: REQUEST_STATUS.INITIAL,
});

function classesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CLASSES_REQUEST:
      return state.set('gettingClasses', true);
    case GET_CLASSES_SUCCESS:
      return state.set('gettingClasses', false).set('classes', fromJS(payload));
    case GET_CLASSES_ERROR:
      return state.set('gettingClasses', false);
    case DELETE_CLASS_REQUEST:
      return state.set('deleteClassStatus', REQUEST_STATUS.REQUESTING);
    case DELETE_CLASS_SUCCESS:
      return state.set('deleteClassStatus', REQUEST_STATUS.SUCCEEDED);
    case DELETE_CLASS_ERROR:
      return state.set('deleteClassStatus', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default classesReducer;
