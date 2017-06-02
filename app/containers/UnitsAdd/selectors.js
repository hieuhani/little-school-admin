import { createSelector } from 'reselect';

/**
 * Direct selector to the unitsAdd state domain
 */
const selectUnitsAddDomain = () => (state) => state.get('unitsAdd');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UnitsAdd
 */

const makeSelectUnitsAdd = () => createSelector(
  selectUnitsAddDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUnitsAdd;
export {
  selectUnitsAddDomain,
};
