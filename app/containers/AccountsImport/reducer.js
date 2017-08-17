import { fromJS } from 'immutable';
import _ from 'lodash';
import { REQUEST_STATUS } from 'global-constants';
import {
  UPLOAD_FILE_CSV_REQUEST,
  UPLOAD_FILE_CSV_SUCCESS,
  UPLOAD_FILE_CSV_ERROR,
  UPDATE_ROW_SELECTION_STATUS,
} from './constants';

const initialState = fromJS({
  file: null,
  status: REQUEST_STATUS.INITIAL,
  accounts: [],
});

function accountsImportReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE_CSV_REQUEST:
      return state
        .set('file', payload.file)
        .set('status', REQUEST_STATUS.REQUESTING);
    case UPLOAD_FILE_CSV_SUCCESS: {
      let accounts = [];
      _.forEach(payload, (line) => {
        if (line.length > 1) {
          if (line[0] && line[1]) {
            accounts[accounts.length] = {
              firstName: line[0],
              lastName: line[1],
            };
          }
        } else {
          let fullName = line[0];
          if (fullName) {
            fullName = fullName.replace(/\s\s+/g, ' ');
            const names = fullName.split(' ');
            if (names.length > 1) {
              accounts[accounts.length] = {
                firstName: names[names.length - 1],
                lastName: _.take(names, names.length - 1).join(' '),
              };
            } else if (names.length === 1) {
              accounts[accounts.length] = {
                firstName: names[0],
                lastName: names[0],
              };
            }
          }
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
    default:
      return state;
  }
}

export default accountsImportReducer;
