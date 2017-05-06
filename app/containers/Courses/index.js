/*
 *
 * Courses
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ViewCoursesHeader from '../../components/ViewCoursesHeader';
import ViewCourseList from '../../components/ViewCourseList';

export class Courses extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ViewCoursesHeader />
        <ViewCourseList />
      </div>
    );
  }
}

Courses.propTypes = {
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
