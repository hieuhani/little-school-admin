/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { reducer as form } from 'redux-form/immutable';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import loginReducer from 'containers/Login/reducer';
import authenticationReducer from 'containers/Authentication/reducer';
import coursesReducer from 'containers/Courses/reducer';
import courseReducer from 'containers/Course/reducer';
import unitReducer from 'containers/Unit/reducer';
import classesReducer from 'containers/Classes/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    form,
    language: languageProviderReducer,
    login: loginReducer,
    authentication: authenticationReducer,
    courses: coursesReducer,
    course: courseReducer,
    unit: unitReducer,
    classes: classesReducer,
    ...asyncReducers,
  });
}
