import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getClassStudents,
} from './actions';

export class Classroom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getClassStudents(1, this.props.params.classID);
  }
  render() {
    return (
      <div>
        Classroom
        {this.props.children}
      </div>
    );
  }
}

Classroom.propTypes = {
  getClassStudents: PropTypes.func,
  params: PropTypes.object,
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    getClassStudents: (schoolID, classID) => dispatch(getClassStudents(schoolID, classID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
