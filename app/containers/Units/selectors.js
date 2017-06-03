import { createSelector } from 'reselect';

const selectUnitsDomain = () => (state) => state.get('units');

const selectUnits = () => createSelector(
  selectUnitsDomain(),
  (subState) => subState.get('units')
);

export {
  selectUnits,
};
