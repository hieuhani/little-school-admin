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
  selectDuplicateStatus,
} from './selectors';
import {
  getCourses,
  duplicateClass,
} from './actions';

export class ClassDuplicate extends React.PureComponent {
  componentWillMount() {
    this.props.getCourses(this.props.defaultSchool);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.duplicateStatus === REQUEST_STATUS.REQUESTING && nextProps.duplicateStatus === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
      window.location.reload();
    }
  }

  closeForm() {
    browserHistory.push('/classes');
  }
  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Duplicate class" />}>
        <FormAddClass
          onSubmit={(classroom) => this.props.duplicateClass(this.props.defaultSchool, this.props.params.classID, classroom)}
          cancelAddClass={this.closeForm}
          status={this.props.duplicateStatus}
          courses={this.props.courses}
        />
      </ViewDialog>
    );
  }
}

ClassDuplicate.propTypes = {
  defaultSchool: PropTypes.string,
  getCourses: PropTypes.func,
  duplicateClass: PropTypes.func,
  courses: PropTypes.instanceOf(Immutable.List),
  params: PropTypes.object,
  duplicateStatus: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
  courses: selectCourses(),
  duplicateStatus: selectDuplicateStatus(),
});
function mapDispatchToProps(dispatch) {
  return {
    getCourses: (schoolID) => dispatch(getCourses(schoolID)),
    duplicateClass: (schoolID, classID, classroom) => dispatch(duplicateClass(schoolID, classID, classroom)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassDuplicate);
