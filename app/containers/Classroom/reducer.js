import { fromJS } from 'immutable';
import {
  GET_CLASS_STUDENTS_REQUEST,
  GET_CLASS_STUDENTS_SUCCESS,
  GET_CLASS_STUDENTS_ERROR,
  DELETE_CLASS_STUDENT_REQUEST,
  DELETE_CLASS_STUDENT_SUCCESS,
  DELETE_CLASS_STUDENT_ERROR,
} from './constants';

const initialState = fromJS({
  students: [],
  gettingStudents: false,
  deletingStudent: false,
});

function classroomReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CLASS_STUDENTS_REQUEST:
      return state.set('gettingStudents', true);
    case GET_CLASS_STUDENTS_SUCCESS:
      return state.set('gettingStudents', false).set('students', fromJS(payload));
    case GET_CLASS_STUDENTS_ERROR:
      return state.set('gettingStudents', false);
    case DELETE_CLASS_STUDENT_REQUEST:
      return state.set('deletingStudent', true);
    case DELETE_CLASS_STUDENT_SUCCESS:
      return state.set('deletingStudent', false).set('students', state.get('students').filter((student) => (student.get('id') !== payload.studentID)));
    case DELETE_CLASS_STUDENT_ERROR:
      return state.set('deletingStudent', false);
    default:
      return state;
  }
}

export default classroomReducer;
