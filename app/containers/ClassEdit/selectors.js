import { createSelector } from 'reselect';


const selectClassEditDomain = () => (state) => state.get('classEdit');

const selectCourses = () => createSelector(
  selectClassEditDomain(),
  (subState) => subState.get('courses')
);

const selectClassroom = () => createSelector(
  selectClassEditDomain(),
  (subState) => subState.get('classroom')
);

const selectUpdateStatus = () => createSelector(
  selectClassEditDomain(),
  (subState) => subState.get('updateStatus')
);

export {
  selectCourses,
  selectClassroom,
  selectUpdateStatus,
};
