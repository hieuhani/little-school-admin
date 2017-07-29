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
import unitsReducer from 'containers/Units/reducer';
import unitReducer from 'containers/Unit/reducer';
import classesReducer from 'containers/Classes/reducer';
import navigationBarReducer from 'containers/NavigationBar/reducer';
import coursesAddReducer from 'containers/CoursesAdd/reducer';
import unitsAddReducer from 'containers/UnitsAdd/reducer';
import vocabulariesAddReducer from 'containers/VocabulariesAdd/reducer';
import analyticsReducer from 'containers/Analytics/reducer';
import classesAddReducer from 'containers/ClassesAdd/reducer';
import classUsersAddReducer from 'containers/ClassUsersAdd/reducer';
import classroomReducer from 'containers/Classroom/reducer';
import accountsReducer from 'containers/Accounts/reducer';
import accountsAddReducer from 'containers/AccountsAdd/reducer';
import dashboardReducer from 'containers/Dashboard/reducer';
import schoolSelectorReducer from 'containers/SchoolSelector/reducer';

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
    units: unitsReducer,
    unit: unitReducer,
    classes: classesReducer,
    navigationBar: navigationBarReducer,
    coursesAdd: coursesAddReducer,
    unitsAdd: unitsAddReducer,
    vocabulariesAdd: vocabulariesAddReducer,
    analytics: analyticsReducer,
    classesAdd: classesAddReducer,
    classUsersAdd: classUsersAddReducer,
    classroom: classroomReducer,
    accounts: accountsReducer,
    accountsAdd: accountsAddReducer,
    dashboard: dashboardReducer,
    schoolSelector: schoolSelectorReducer,
    ...asyncReducers,
  });
}
