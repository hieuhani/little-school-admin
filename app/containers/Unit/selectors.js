import { createSelector } from 'reselect';

const selectUnitDomain = () => (state) => state.get('unit');

const selectUnit = () => createSelector(
  selectUnitDomain(),
  (subState) => subState.get('unit')
);

export {
  selectUnit,
};
