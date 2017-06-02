import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { Card, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router';

import './styles.scss';

function ViewCourseItem({ course }) {
  return (
    <div className="view-course-item col-md-3">
      <Link to={`/courses/${course.get('id')}/units`}>
        <Card>
          <CardTitle title={course.get('name')} subtitle={course.get('description')} />
        </Card>
      </Link>
    </div>
  );
}

ViewCourseItem.propTypes = {
  course: PropTypes.instanceOf(Immutable.Map),
};

export default ViewCourseItem;
