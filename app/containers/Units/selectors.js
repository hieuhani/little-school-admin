import { createSelector } from 'reselect';

const selectUnitsDomain = () => (state) => state.get('units');

const selectUnits = () => createSelector(
  selectUnitsDomain(),
  (subState) => subState.get('units')
);

const selectDeleteStatus = () => createSelector(
  selectUnitsDomain(),
  (subState) => subState.get('deleteStatus')
);

export {
  selectUnits,
  selectDeleteStatus,
};
