import { createSelector } from 'reselect';

/**
 * Direct selector to the classes state domain
 */
const selectClassesDomain = () => (state) => state.get('classes');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Classes
 */

const makeSelectClasses = () => createSelector(
  selectClassesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectClasses;
export {
  selectClassesDomain,
};
