import { createSelector } from 'reselect';

const selectUnitsAddDomain = () => (state) => state.get('unitsAdd');

const selectStatus = () => createSelector(
  selectUnitsAddDomain(),
  (subState) => subState.get('status')
);

export {
  selectStatus,
};
