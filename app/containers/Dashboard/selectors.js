import { createSelector } from 'reselect';

const selectDashboardDomain = () => (state) => state.get('dashboard');

const selectDefaultSchool = () => createSelector(
  selectDashboardDomain(),
  (subState) => subState.get('defaultSchool')
);

const selectSchool = () => createSelector(
  selectDashboardDomain(),
  (subState) => subState.get('school')
);

export {
  selectDefaultSchool,
  selectSchool,
};
