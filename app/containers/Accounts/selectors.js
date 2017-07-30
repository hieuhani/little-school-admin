import { createSelector } from 'reselect';

const selectAccountsDomain = () => (state) => state.get('accounts');

const selectCurrentPage = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('page')
);

const selectCount = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('count')
);

const selectUsers = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('users')
);

const selectSize = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('per_page')
);

const selectFindStudentStatus = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('findStudentStatus')
);

const selectStudentDetail = () => createSelector(
  selectAccountsDomain(),
  (subState) => subState.get('studentDetail')
);

export {
  selectCurrentPage,
  selectCount,
  selectUsers,
  selectSize,
  selectFindStudentStatus,
  selectStudentDetail,
};
