import { createSelector } from 'reselect';

/**
 * Direct selector to the accounts state domain
 */
const selectAccountsDomain = () => (state) => state.get('accounts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Accounts
 */

const makeSelectAccounts = () => createSelector(
  selectAccountsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAccounts;
export {
  selectAccountsDomain,
};
