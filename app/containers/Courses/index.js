import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import ViewCoursesHeader from '../../components/ViewCoursesHeader';
import ViewCourseList from '../../components/ViewCourseList';

import {
  selectCourses,
} from './selectors';
import {
  getCourses,
} from './actions';

export class Courses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getCourses(1); // TODO: Hard code school
  }

  render() {
    return (
      <div>
        <ViewCoursesHeader />
        <ViewCourseList courses={this.props.courses} />
        {this.props.children}
      </div>
    );
  }
}

Courses.propTypes = {
  getCourses: PropTypes.func,
  children: PropTypes.node,
  courses: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCourses: (schoolID) => dispatch(getCourses(schoolID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
