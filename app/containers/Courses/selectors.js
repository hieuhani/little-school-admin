import { createSelector } from 'reselect';

/**
 * Direct selector to the courses state domain
 */
const selectCoursesDomain = () => (state) => state.get('courses');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Courses
 */

const makeSelectCourses = () => createSelector(
  selectCoursesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCourses;
export {
  selectCoursesDomain,
};
