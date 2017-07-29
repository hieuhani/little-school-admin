import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewTableClasses from '../../components/ViewTableClasses';
import ViewClassesHeader from '../../components/ViewClassesHeader';
import {
  getClasses,
} from './actions';
import {
  selectClasses,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class Classes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getClasses(this.props.defaultSchool);
  }
  render() {
    return (
      <div>
        <ViewClassesHeader />
        <ViewTableClasses classes={this.props.classes} />
        {this.props.children}
      </div>
    );
  }
}

Classes.propTypes = {
  children: PropTypes.node,
  getClasses: PropTypes.func,
  defaultSchool: PropTypes.string,
  classes: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  classes: selectClasses(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (schoolID) => dispatch(getClasses(schoolID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
