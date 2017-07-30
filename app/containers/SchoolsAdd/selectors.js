import { createSelector } from 'reselect';

const selectSchoolsAddDomain = () => (state) => state.get('schoolsAdd');

const selectLoading = () => createSelector(
  selectSchoolsAddDomain(),
  (subState) => subState.get('loading')
);

const selectSchool = () => createSelector(
  selectSchoolsAddDomain(),
  (subState) => subState.get('school')
);

export {
  selectLoading,
  selectSchool,
};
