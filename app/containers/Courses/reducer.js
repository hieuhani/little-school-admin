/*
 *
 * Courses reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_COURSES_SUCCESS,
} from './constants';

import {
  CREATE_COURSE_SUCCESS,
} from '../CoursesAdd/constants';

const initialState = fromJS({
  courses: [],
});

function coursesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSES_SUCCESS:
      return state
        .set('courses', fromJS(payload));
    case CREATE_COURSE_SUCCESS:
      return state
        .set('courses', state.get('courses').push(fromJS(payload)));
    default:
      return state;
  }
}

export default coursesReducer;
