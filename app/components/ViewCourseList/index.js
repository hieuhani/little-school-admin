/**
*
* ViewCourseList
*
*/

import React from 'react';
import Immutable from 'immutable';
import ViewCourseItem from '../ViewCourseItem';
import './styles.scss';

const mockData = Immutable.fromJS({
  courses: [
    {
      id: 1,
      name: 'Kindy 1',
      description: 'English course for 3 years old kid.',
    },
    {
      id: 2,
      name: 'Kindy 2',
      description: 'English course for 4 years old kid.',
    },
    {
      id: 3,
      name: 'Kindy 3',
      description: 'English course for 5 years old kid.',
    },
    {
      id: 4,
      name: 'Kindy 4',
      description: 'English course for 6 years old kid.',
    },
    {
      id: 5,
      name: 'Kindy 5',
      description: 'English course for 7 years old kid.',
    },
    {
      id: 6,
      name: 'Kindy 6',
      description: 'English course for 8 years old kid.',
    },
  ],
});

function ViewCourseList() {
  return (
    <div className="view-course-list row">
      {mockData.get('courses').map((course) => (
        <ViewCourseItem key={course.get('id')} course={course} />
      ))}
    </div>
  );
}

ViewCourseList.propTypes = {

};

export default ViewCourseList;
