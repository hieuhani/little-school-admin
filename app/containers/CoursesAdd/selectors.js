import { createSelector } from 'reselect';

/**
 * Direct selector to the coursesAdd state domain
 */
const selectCoursesAddDomain = () => (state) => state.get('coursesAdd');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CoursesAdd
 */

const makeSelectCoursesAdd = () => createSelector(
  selectCoursesAddDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCoursesAdd;
export {
  selectCoursesAddDomain,
};
