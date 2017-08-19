import { createSelector } from 'reselect';

const selectClassAccountsImportDomain = () => (state) => state.get('classAccountsImport');

const selectFile = () => createSelector(
  selectClassAccountsImportDomain(),
  (subState) => subState.get('file')
);

const selectAccounts = () => createSelector(
  selectClassAccountsImportDomain(),
  (subState) => subState.get('accounts')
);

const selectCSVUploadStatus = () => createSelector(
  selectClassAccountsImportDomain(),
  (subState) => subState.get('status')
);

const selectCreateAccountsStatus = () => createSelector(
  selectClassAccountsImportDomain(),
  (subState) => subState.get('createAccountsStatus')
);

export {
  selectFile,
  selectAccounts,
  selectCSVUploadStatus,
  selectCreateAccountsStatus,
};
