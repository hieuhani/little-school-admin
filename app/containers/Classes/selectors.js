import { createSelector } from 'reselect';
const selectClassesDomain = () => (state) => state.get('classes');

const selectClasses = () => createSelector(
  selectClassesDomain(),
  (subState) => subState.get('classes')
);

const selectDeleteClassStatus = () => createSelector(
  selectClassesDomain(),
  (subState) => subState.get('deleteClassStatus')
);


export {
  selectClasses,
  selectDeleteClassStatus,
};
