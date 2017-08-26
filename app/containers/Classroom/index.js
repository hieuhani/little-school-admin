import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import ViewTableStudents from '../../components/ViewTableStudents';
import ViewClassroomHeader from '../../components/ViewClassroomHeader';
import {
  getClassStudents,
  removeClassStudent,
} from './actions';
import {
  selectStudents,
  selectGettingStudents,
  selectDeletingStudent,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class Classroom extends React.PureComponent {
  constructor(props) {
    super(props);
    this.removeClassStudent = (studentID) => {
      if (confirm('Are you sure you want to remove this student out of the class?')) { // eslint-disable-line no-alert
        this.props.removeClassStudent(this.props.defaultSchool, this.props.params.classID, studentID);
      }
    };
  }
  componentWillMount() {
    this.props.getClassStudents(this.props.defaultSchool, this.props.params.classID);
  }
  render() {
    return (
      <div>
        <ViewClassroomHeader
          classID={this.props.params.classID}
          schoolID={this.props.defaultSchool}
        />
        <ViewTableStudents
          students={this.props.students}
          handleRemoveStudent={this.removeClassStudent}
          deletingStudent={this.props.deletingStudent}
        />
        {this.props.children}
      </div>
    );
  }
}

Classroom.propTypes = {
  getClassStudents: PropTypes.func,
  removeClassStudent: PropTypes.func,
  params: PropTypes.object,
  defaultSchool: PropTypes.string,
  children: PropTypes.node,
  deletingStudent: PropTypes.bool,
  students: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  students: selectStudents(),
  gettingStudents: selectGettingStudents(),
  deletingStudent: selectDeletingStudent(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    getClassStudents: (schoolID, classID) => dispatch(getClassStudents(schoolID, classID)),
    removeClassStudent: (schoolID, classID, studentID) => dispatch(removeClassStudent(schoolID, classID, studentID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
