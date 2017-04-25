import { createSelector } from 'reselect';

const selectLogin = () => (state) => state.get('login');

const selectError = () => createSelector(
  selectLogin(),
  (loginState) => {
    const error = loginState.get('error');
    if (error) {
      return error.toJS();
    }
    return null;
  }
);

const selectLoggedUser = () => createSelector(
  selectLogin(),
  (loginState) => {
    const user = loginState.get('user');
    if (user) {
      return user.toJS();
    }
    return null;
  }
);

const selectLoginLoading = () => createSelector(
  selectLogin(),
  (loginState) => loginState.get('loading')
);

export {
  selectLogin,
  selectError,
  selectLoggedUser,
  selectLoginLoading,
};
