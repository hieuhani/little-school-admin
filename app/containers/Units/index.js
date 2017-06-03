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
} from './actions';
import {
  selectUnits,
} from './selectors';

export class Units extends React.PureComponent {
  componentWillMount() {
    const { courseId } = this.props.params;
    this.props.getUnits(1, courseId);
  }

  render() {
    return (
      <div>
        <ViewCourseHeader courseID={_.toInteger(this.props.params.courseId)} />
        <ViewUnitList units={this.props.units} />
        {this.props.children}
      </div>
    );
  }
}

Units.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node,
  getUnits: PropTypes.func,
  units: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  units: selectUnits(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUnits: (schoolID, courseID) => dispatch(getUnits(schoolID, courseID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Units);
