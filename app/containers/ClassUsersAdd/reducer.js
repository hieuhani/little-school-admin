import { fromJS } from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import {
  GET_NOT_STUDENTS_OF_CLASS_REQUEST,
  GET_NOT_STUDENTS_OF_CLASS_SUCCESS,
  SET_SELECTED_USERS,
  POST_ADD_USERS_TO_CLASS_REQUEST,
  POST_ADD_USERS_TO_CLASS_SUCCESS,
  POST_ADD_USERS_TO_CLASS_ERROR,
  CHANGE_PAGE,
  GET_FIND_NOT_STUDENT_OF_CLASS_REQUEST,
} from './constants';

const initialState = fromJS({
  notClassStudents: [],
  selectedUserIds: [],
  status: REQUEST_STATUS.INITIAL,
  count: 0,
  page: 1,
  per_page: 20,
  findMode: 0,
});

function classUsersAddReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FIND_NOT_STUDENT_OF_CLASS_REQUEST:
      return state
        .set('notClassStudents', fromJS([]))
        .set('count', 0)
        .set('page', 1)
        .set('selectedUserIds', fromJS([]))
        .set('findMode', 1);
    case GET_NOT_STUDENTS_OF_CLASS_REQUEST:
      return state
        .set('notClassStudents', fromJS([]))
        .set('count', 0)
        .set('findMode', 0)
        .set('selectedUserIds', fromJS([]));
    case GET_NOT_STUDENTS_OF_CLASS_SUCCESS:
      return state
        .set('notClassStudents', fromJS(payload.users))
        .set('findMode', 0)
        .set('count', payload.count);
    case SET_SELECTED_USERS: {
      if (payload === 'none') {
        return state.set('selectedUserIds', fromJS([]));
      }
      if (payload === 'all') {
        return state.set('selectedUserIds', state.get('notClassStudents').map((student) => (student.get('id'))));
      }

      const ids = payload.map((index) => (state.get('notClassStudents').get(index).get('id')));
      return state.set('selectedUserIds', fromJS(ids));
    }
    case POST_ADD_USERS_TO_CLASS_REQUEST:
      return state
        .set('status', REQUEST_STATUS.REQUESTING);
    case POST_ADD_USERS_TO_CLASS_SUCCESS:
      return state
        .set('status', REQUEST_STATUS.SUCCEEDED);
    case POST_ADD_USERS_TO_CLASS_ERROR:
      return state
        .set('status', REQUEST_STATUS.FAILED);
    case CHANGE_PAGE:
      return state.set('page', payload.page);
    default:
      return state;
  }
}

export default classUsersAddReducer;
