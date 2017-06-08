import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import ViewCourseHeader from '../../components/ViewCourseHeader';
import ViewUnitList from '../../components/ViewUnitList';
import {
  getUnits,
  deleteUnit,
} from './actions';
import {
  selectUnits,
  selectDeleteStatus,
} from './selectors';

export class Units extends React.PureComponent {
  componentWillMount() {
    const { courseId } = this.props.params;
    this.props.getUnits(1, courseId);
  }

  render() {
    const courseID = _.toInteger(this.props.params.courseId);
    return (
      <div>
        <ViewCourseHeader courseID={_.toInteger(this.props.params.courseId)} />
        <ViewUnitList
          units={this.props.units}
          deleteUnit={(unitID) => this.props.deleteUnit(1, courseID, unitID)}
          deleteStatus={this.props.deleteStatus}
        />
        {this.props.children}
      </div>
    );
  }
}

Units.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node,
  getUnits: PropTypes.func,
  deleteUnit: PropTypes.func,
  units: PropTypes.instanceOf(Immutable.List),
  deleteStatus: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  units: selectUnits(),
  deleteStatus: selectDeleteStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUnits: (schoolID, courseID) => dispatch(getUnits(schoolID, courseID)),
    deleteUnit: (schoolID, courseID, unitID) => dispatch(deleteUnit(schoolID, courseID, unitID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Units);
