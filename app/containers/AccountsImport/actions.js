import {
  UPLOAD_FILE_CSV_REQUEST,
  UPLOAD_FILE_CSV_SUCCESS,
  UPLOAD_FILE_CSV_ERROR,
  UPDATE_ROW_SELECTION_STATUS,
  CREATE_ACCOUNTS_REQUEST,
  CREATE_ACCOUNTS_SUCCESS,
  CREATE_ACCOUNTS_ERROR,
} from './constants';

export function uploadCsv(schoolID, file) {
  return {
    type: UPLOAD_FILE_CSV_REQUEST,
    payload: {
      schoolID,
      file,
    },
  };
}

export function uploadCsvSuccess(data, file) {
  if (file && file instanceof File) {
    window.URL.revokeObjectURL(file.preview);
  }
  return {
    type: UPLOAD_FILE_CSV_SUCCESS,
    payload: data,
  };
}

export function uploadCsvError(error) {
  return {
    type: UPLOAD_FILE_CSV_ERROR,
    payload: error.response,
  };
}

export function handleRowSelection(indexes) {
  return {
    type: UPDATE_ROW_SELECTION_STATUS,
    payload: indexes,
  };
}

export function createAccounts(accounts) {
  return {
    type: CREATE_ACCOUNTS_REQUEST,
    payload: accounts,
  };
}

export function createAccountsSuccess(data) {
  return {
    type: CREATE_ACCOUNTS_SUCCESS,
    payload: data,
  };
}

export function createAccountsError(error) {
  return {
    type: CREATE_ACCOUNTS_ERROR,
    payload: error.response,
  };
}
