import { createSelector } from 'reselect';

const selectClassUsersAddDomain = () => (state) => state.get('classUsersAdd');
const selectNotClassStudents = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('notClassStudents')
);

const selectSelectedUserIds = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('selectedUserIds')
);

const selectStatus = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('status')
);

export {
  selectNotClassStudents,
  selectSelectedUserIds,
  selectStatus,
};
