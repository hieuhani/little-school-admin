import { createSelector } from 'reselect';
const selectClassesAddDomain = () => (state) => state.get('classesAdd');

const selectCourses = () => createSelector(
  selectClassesAddDomain(),
  (subState) => subState.get('courses')
);

const selectStatus = () => createSelector(
  selectClassesAddDomain(),
  (subState) => subState.get('status')
);

export {
  selectCourses,
  selectStatus,
};
