import { createSelector } from 'reselect';

const selectAccountsDomain = () => (state) => state.get('accounts');
const selectAccountEditDomain = () => (state) => state.get('accountEdit');

const selectUsers = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('users')
);

const selectStatus = () => createSelector(
  selectAccountEditDomain(),
  (subState) => subState.get('status')
);

export {
  selectUsers,
  selectStatus,
};
