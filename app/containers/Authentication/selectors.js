import { createSelector } from 'reselect';

const selectAuthentication = () => (state) => state.get('authentication');

const selectLoginStatus = () => createSelector(
  selectAuthentication(),
  (authenticationState) => authenticationState.get('isLoggedIn')
);

export {
  selectAuthentication,
  selectLoginStatus,
};
