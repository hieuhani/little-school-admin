import { createSelector } from 'reselect';

/**
 * Direct selector to the analytics state domain
 */
const selectAnalyticsDomain = () => (state) => state.get('analytics');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Analytics
 */

const makeSelectAnalytics = () => createSelector(
  selectAnalyticsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAnalytics;
export {
  selectAnalyticsDomain,
};
