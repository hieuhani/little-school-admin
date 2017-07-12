/*
 *
 * Classes reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_ERROR,
} from './constants';

const initialState = fromJS({
  classes: [],
  gettingClasses: false,
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
    default:
      return state;
  }
}

export default classesReducer;
