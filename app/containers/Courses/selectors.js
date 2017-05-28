import { createSelector } from 'reselect';
const selectCoursesDomain = () => (state) => state.get('courses');

const selectCourses = () => createSelector(
  selectCoursesDomain(),
  (subState) => subState.get('courses')
);

export {
  selectCourses,
};
