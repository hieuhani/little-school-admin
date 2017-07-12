import { createSelector } from 'reselect';

/**
 * Direct selector to the classroom state domain
 */
const selectClassroomDomain = () => (state) => state.get('classroom');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Classroom
 */

const makeSelectClassroom = () => createSelector(
  selectClassroomDomain(),
  (substate) => substate.toJS()
);

export default makeSelectClassroom;
export {
  selectClassroomDomain,
};
