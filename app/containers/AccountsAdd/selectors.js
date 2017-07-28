import { createSelector } from 'reselect';

const selectAccountsAddDomain = () => (state) => state.get('accountsAdd');

const selectStatus = () => createSelector(
  selectAccountsAddDomain(),
  (subState) => subState.get('status')
);

const selectError = () => createSelector(
  selectAccountsAddDomain(),
  (subState) => subState.get('error')
);

export {
  selectStatus,
  selectError,
};
