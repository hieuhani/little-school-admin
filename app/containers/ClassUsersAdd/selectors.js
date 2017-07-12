import { createSelector } from 'reselect';

/**
 * Direct selector to the classUsersAdd state domain
 */
const selectClassUsersAddDomain = () => (state) => state.get('classUsersAdd');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ClassUsersAdd
 */

const makeSelectClassUsersAdd = () => createSelector(
  selectClassUsersAddDomain(),
  (substate) => substate.toJS()
);

export default makeSelectClassUsersAdd;
export {
  selectClassUsersAddDomain,
};
