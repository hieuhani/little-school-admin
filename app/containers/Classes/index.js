import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { REQUEST_STATUS } from 'global-constants';
import { createStructuredSelector } from 'reselect';
import ViewTableClasses from '../../components/ViewTableClasses';
import ViewClassesHeader from '../../components/ViewClassesHeader';
import {
  getClasses,
  deleteClass,
} from './actions';
import {
  selectClasses,
  selectDeleteClassStatus,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class Classes extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDeleteClass = (classID) => {
      if (confirm('Are you sure you want to delete this class?')) { // eslint-disable-line no-alert
        this.props.deleteClass(this.props.defaultSchool, classID);
      }
    };
  }

  componentWillMount() {
    this.props.getClasses(this.props.defaultSchool);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.deleteClassStatus === REQUEST_STATUS.REQUESTING && nextProps.deleteClassStatus === REQUEST_STATUS.SUCCEEDED) {
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <ViewClassesHeader />
        <ViewTableClasses
          classes={this.props.classes}
          handleDeleteClass={this.handleDeleteClass}
          deleteClassStatus={this.props.deleteClassStatus}
        />
        {this.props.children}
      </div>
    );
  }
}

Classes.propTypes = {
  children: PropTypes.node,
  getClasses: PropTypes.func,
  deleteClass: PropTypes.func,
  defaultSchool: PropTypes.string,
  deleteClassStatus: PropTypes.number,
  classes: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  classes: selectClasses(),
  defaultSchool: selectDefaultSchool(),
  deleteClassStatus: selectDeleteClassStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (schoolID) => dispatch(getClasses(schoolID)),
    deleteClass: (schoolID, classID) => dispatch(deleteClass(schoolID, classID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
