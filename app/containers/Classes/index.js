import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewTableClasses from '../../components/ViewTableClasses';
import {
  getClasses,
} from './actions';
import {
  selectClasses,
} from './selectors';

export class Classes extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getClasses(1);
  }
  render() {
    return (
      <div>
        <ViewTableClasses classes={this.props.classes} />
        {this.props.children}
      </div>
    );
  }
}

Classes.propTypes = {
  children: PropTypes.node,
  getClasses: PropTypes.func,
  classes: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  classes: selectClasses(),
});

function mapDispatchToProps(dispatch) {
  return {
    getClasses: (schoolID) => dispatch(getClasses(schoolID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
