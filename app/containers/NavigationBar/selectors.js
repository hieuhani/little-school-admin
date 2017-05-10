import { createSelector } from 'reselect';

const selectNavigationBarDomain = () => (state) => state.get('navigationBar');

const selectLoggedOut = () => createSelector(
  selectNavigationBarDomain(),
  (navigationBarDomain) => navigationBarDomain.get('isLoggedOut')
);

export {
  selectLoggedOut,
};
