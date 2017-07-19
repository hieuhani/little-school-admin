import { createSelector } from 'reselect';

const selectClassroomDomain = () => (state) => state.get('classroom');

const selectStudents = () => createSelector(
  selectClassroomDomain(),
  (subState) => subState.get('students')
);

const selectGettingStudents = () => createSelector(
  selectClassroomDomain(),
  (subState) => subState.get('gettingStudents')
);

const selectDeletingStudent = () => createSelector(
  selectClassroomDomain(),
  (subState) => subState.get('deletingStudent')
);

export {
  selectStudents,
  selectGettingStudents,
  selectDeletingStudent,
};
