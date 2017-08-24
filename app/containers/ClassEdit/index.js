import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddClass from '../../components/FormAddClass';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';
import {
  selectCourses,
  selectClassroom,
  selectUpdateStatus,
} from './selectors';
import {
  // getCourses,
  getClassDetails,
  updateClass,
} from './actions';

export class ClassEdit extends React.PureComponent {
  componentWillMount() {
    this.props.getClassDetails(this.props.defaultSchool, this.props.params.classID);
    // this.props.getCourses(this.props.defaultSchool);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.updateStatus === REQUEST_STATUS.REQUESTING && nextProps.updateStatus === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
      window.location.reload();
    }
  }
  closeForm() {
    browserHistory.push('/classes');
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Update class" />}>
        <FormAddClass
          onSubmit={(classroom) => this.props.updateClass(this.props.defaultSchool, classroom)}
          cancelAddClass={this.closeForm}
          classroom={this.props.classroom}
          status={this.props.updateStatus}
          editMode
        />
      </ViewDialog>
    );
  }
}

ClassEdit.propTypes = {
  defaultSchool: PropTypes.string,
  // getCourses: PropTypes.func,
  getClassDetails: PropTypes.func,
  // courses: PropTypes.instanceOf(Immutable.List),
  classroom: PropTypes.instanceOf(Immutable.Map),
  updateClass: PropTypes.func,
  params: PropTypes.object,
  updateStatus: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
  courses: selectCourses(),
  classroom: selectClassroom(),
  updateStatus: selectUpdateStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    // getCourses: (schoolID) => dispatch(getCourses(schoolID)),
    getClassDetails: (schoolID, classID) => dispatch(getClassDetails(schoolID, classID)),
    updateClass: (schoolID, toBeUpdateClass) => dispatch(updateClass(schoolID, toBeUpdateClass)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);
