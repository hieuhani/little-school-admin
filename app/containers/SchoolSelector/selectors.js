import { createSelector } from 'reselect';

const selectSchoolSelectorDomain = () => (state) => state.get('schoolSelector');

const selectLoading = () => createSelector(
  selectSchoolSelectorDomain(),
  (subState) => subState.get('loading')
);

const selectSchools = () => createSelector(
  selectSchoolSelectorDomain(),
  (subState) => subState.get('schools')
);

export {
  selectLoading,
  selectSchools,
};
