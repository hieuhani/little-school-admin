import { fromJS } from 'immutable';
import _ from 'lodash';
import { REQUEST_STATUS } from 'global-constants';
import {
  UPLOAD_FILE_CSV_REQUEST,
  UPLOAD_FILE_CSV_SUCCESS,
  UPLOAD_FILE_CSV_ERROR,
  UPDATE_ROW_SELECTION_STATUS,
  CREATE_ACCOUNTS_REQUEST,
  CREATE_ACCOUNTS_SUCCESS,
  CREATE_ACCOUNTS_ERROR,
} from './constants';

const initialState = fromJS({
  file: null,
  status: REQUEST_STATUS.INITIAL,
  accounts: [],
  createAccountsStatus: REQUEST_STATUS.INITIAL,
});

function classAccountsImportReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_CSV_REQUEST:
      return state
        .set('file', payload.file)
        .set('status', REQUEST_STATUS.REQUESTING);
    case UPLOAD_FILE_CSV_SUCCESS: {
      let accounts = [];
      _.forEach(payload, (line) => {
        if (line.length >= 6) {
          accounts[accounts.length] = {
            full_name: line[0],
            birthday: line[1],
            class_text: line[2],
            parent_name: line[3],
            phone: line[4],
            email: line[5],
          };
        }
      });
      accounts = accounts.map((account) => {
        const modifiedAccount = account;
        modifiedAccount.selected = true;
        return modifiedAccount;
      });
      return state
        .set('file', null)
        .set('status', REQUEST_STATUS.SUCCEEDED)
        .set('accounts', fromJS(accounts));
    }
    case UPLOAD_FILE_CSV_ERROR:
      return state
        .set('file', null)
        .set('status', REQUEST_STATUS.FAILED);
    case UPDATE_ROW_SELECTION_STATUS:
      return state.set('accounts', state.get('accounts').map((account, index) => {
        if (payload.indexOf(index) > -1) {
          return account.set('selected', true);
        }
        return account.set('selected', false);
      }));
    case CREATE_ACCOUNTS_REQUEST:
      return state
        .set('createAccountsStatus', REQUEST_STATUS.REQUESTING);
    case CREATE_ACCOUNTS_SUCCESS:
      return state
        .set('createAccountsStatus', REQUEST_STATUS.SUCCEEDED);
    case CREATE_ACCOUNTS_ERROR:
      return state
        .set('createAccountsStatus', REQUEST_STATUS.FAILED);
    default:
      return state;
  }
}

export default classAccountsImportReducer;
