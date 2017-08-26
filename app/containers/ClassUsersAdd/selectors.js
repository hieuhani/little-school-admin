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

const selectSize = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('per_page')
);

const selectCurrentPage = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('page')
);

const selectCount = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('count')
);

const selectFindMode = () => createSelector(
  selectClassUsersAddDomain(),
  (subState) => subState.get('findMode')
);

export {
  selectNotClassStudents,
  selectSelectedUserIds,
  selectStatus,
  selectSize,
  selectCurrentPage,
  selectCount,
  selectFindMode,
};
