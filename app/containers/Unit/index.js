import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewUnitDetail from '../../components/ViewUnitDetail';
import {
  getUnit,
} from './actions';
import {
  selectUnit,
} from './selectors';

export class Unit extends React.PureComponent {
  componentWillMount() {
    const { unitId, courseId } = this.props.params;
    this.props.getUnit(1, courseId, unitId);
  }

  render() {
    return (
      <div>
        <ViewUnitDetail unit={this.props.unit} courseID={this.props.params.courseId} />
        {this.props.children}
      </div>
    );
  }
}

Unit.propTypes = {
  params: PropTypes.object.isRequired,
  getUnit: PropTypes.func,
  unit: PropTypes.instanceOf(Immutable.Map),
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  unit: selectUnit(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUnit: (schoolID, courseID, unitID) => dispatch(getUnit(schoolID, courseID, unitID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Unit);
