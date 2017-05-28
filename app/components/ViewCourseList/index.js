/**
*
* ViewCourseList
*
*/

import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import ViewCourseItem from '../ViewCourseItem';
import './styles.scss';

function ViewCourseList({ courses }) {
  return (
    <div className="view-course-list row">
      {courses.map((course) => (
        <ViewCourseItem key={course.get('id')} course={course} />
      ))}
    </div>
  );
}

ViewCourseList.propTypes = {
  courses: PropTypes.instanceOf(Immutable.List),
};

export default ViewCourseList;
