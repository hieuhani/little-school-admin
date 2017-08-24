import { createSelector } from 'reselect';

const selectClassDuplicateDomain = () => (state) => state.get('classDuplicate');

const selectCourses = () => createSelector(
  selectClassDuplicateDomain(),
  (subState) => subState.get('courses')
);

const selectDuplicateStatus = () => createSelector(
  selectClassDuplicateDomain(),
  (subState) => subState.get('duplicateStatus')
);


export {
  selectCourses,
  selectDuplicateStatus,
};
