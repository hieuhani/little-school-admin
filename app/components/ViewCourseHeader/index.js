import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';
import { white, green500 } from 'material-ui/styles/colors';

import './styles.scss';

function ViewCourseHeader({ courseID }) {
  return (
    <div className="view-course-header">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <Link to={`/courses/${courseID}/units/add`}>
            <RaisedButton
              label="Add unit"
              icon={<FontIcon className="material-icons" color={white}>add</FontIcon>}
              style={{ float: 'right' }}
              backgroundColor={green500}
              labelColor={white}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

ViewCourseHeader.propTypes = {
  courseID: PropTypes.number.isRequired,
};

export default ViewCourseHeader;
