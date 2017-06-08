import { createSelector } from 'reselect';

/**
 * Direct selector to the vocabulariesAdd state domain
 */
const selectVocabulariesAddDomain = () => (state) => state.get('vocabulariesAdd');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VocabulariesAdd
 */

const makeSelectVocabulariesAdd = () => createSelector(
  selectVocabulariesAddDomain(),
  (substate) => substate.toJS()
);

export default makeSelectVocabulariesAdd;
export {
  selectVocabulariesAddDomain,
};
