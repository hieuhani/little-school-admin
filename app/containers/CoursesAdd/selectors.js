import { createSelector } from 'reselect';
const selectCoursesAddDomain = () => (state) => state.get('coursesAdd');

const selectStatus = () => createSelector(
  selectCoursesAddDomain(),
  (subState) => subState.get('status')
);

export {
  selectStatus,
};
