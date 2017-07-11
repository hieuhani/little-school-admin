import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddClass from '../../components/FormAddClass';
import {
  selectCourses,
  selectStatus,
} from './selectors';
import {
  getCourses,
  createClass,
} from './actions';

export class ClassesAdd extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getCourses(1); // TODO: Hard code school
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }

  closeForm() {
    browserHistory.push('/classes');
  }

  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new class" />}>
        <FormAddClass
          onSubmit={(course) => this.props.createClass(1, course)}
          courses={this.props.courses}
          cancelAddClass={this.closeForm}
          status={this.props.status}
        />
      </ViewDialog>
    );
  }
}

ClassesAdd.propTypes = {
  getCourses: PropTypes.func,
  createClass: PropTypes.func,
  courses: PropTypes.instanceOf(Immutable.List),
  status: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses(),
  status: selectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCourses: (schoolID) => dispatch(getCourses(schoolID)),
    createClass: (schoolID, classroom) => dispatch(createClass(schoolID, classroom)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassesAdd);
