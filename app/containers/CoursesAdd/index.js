import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { REQUEST_STATUS } from 'global-constants';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddCourse from '../../components/FormAddCourse';

import {
  selectStatus,
} from './selectors';

import {
  createCourse,
} from './actions';

export class CoursesAdd extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }

  closeForm() {
    browserHistory.push('/courses');
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new course" />}>
        <FormAddCourse
          onSubmit={(course) => this.props.createCourse(1, course)}
          cancelAddCourse={this.closeForm}
          status={this.props.status}
        />
      </ViewDialog>
    );
  }
}

CoursesAdd.propTypes = {
  createCourse: PropTypes.func,
  status: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  status: selectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (schoolID, course) => dispatch(createCourse(schoolID, course)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesAdd);
