import { createSelector } from 'reselect';

const selectAccountsImportDomain = () => (state) => state.get('accountsImport');

const selectFile = () => createSelector(
  selectAccountsImportDomain(),
  (subState) => subState.get('file')
);

const selectAccounts = () => createSelector(
  selectAccountsImportDomain(),
  (subState) => subState.get('accounts')
);

const selectCSVUploadStatus = () => createSelector(
  selectAccountsImportDomain(),
  (subState) => subState.get('status')
);

const selectCreateAccountsStatus = () => createSelector(
  selectAccountsImportDomain(),
  (subState) => subState.get('createAccountsStatus')
);


export {
  selectFile,
  selectAccounts,
  selectCSVUploadStatus,
  selectCreateAccountsStatus,
};
