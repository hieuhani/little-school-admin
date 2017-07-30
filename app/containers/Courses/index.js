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
  selectDefaultSchool,
} from '../Dashboard/selectors';
import {
  getCourses,
} from './actions';

export class Courses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getCourses(this.props.defaultSchool);
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
  defaultSchool: PropTypes.string,
  courses: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  courses: selectCourses(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCourses: (schoolID) => dispatch(getCourses(schoolID)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
