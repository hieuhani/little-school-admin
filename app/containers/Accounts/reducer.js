import { fromJS } from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import {
  GET_ACCOUNTS_REQUEST,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_ERROR,
  CHANGE_PAGE,
  SEARCH_BY_USERNAME_REQUEST,
  SEARCH_BY_USERNAME_SUCCESS,
  SEARCH_BY_USERNAME_ERROR,
  CLEAR_STUDENT_DETAILS,
} from './constants';

const initialState = fromJS({
  loading: false,
  users: [],
  page: 1,
  count: 0,
  per_page: 20,
  studentDetail: null,
  findStudentStatus: REQUEST_STATUS.INITIAL,
});

function accountsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ACCOUNTS_REQUEST:
      return state.set('loading', true);
    case GET_ACCOUNTS_SUCCESS:
      return state
        .set('loading', false)
        .set('users', fromJS(payload.users))
        .set('count', payload.count);
    case GET_ACCOUNTS_ERROR:
      return state.set('loading', false);
    case CHANGE_PAGE:
      return state.set('page', payload.page);
    case SEARCH_BY_USERNAME_REQUEST:
      return state.set('findStudentStatus', REQUEST_STATUS.REQUESTING).set('studentDetail', null);
    case SEARCH_BY_USERNAME_SUCCESS:
      return state.set('findStudentStatus', REQUEST_STATUS.SUCCEEDED).set('studentDetail', fromJS(payload));
    case SEARCH_BY_USERNAME_ERROR:
      return state.set('findStudentStatus', REQUEST_STATUS.FAILED).set('studentDetail', null);
    case CLEAR_STUDENT_DETAILS:
      return state.set('findStudentStatus', REQUEST_STATUS.INITIAL).set('studentDetail', null);
    default:
      return state;
  }
}

export default accountsReducer;
