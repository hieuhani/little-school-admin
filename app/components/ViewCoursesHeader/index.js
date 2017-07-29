import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

function ViewCoursesHeader() {
  return (
    <div className="view-courses-header">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <Link to="/courses/add">
            <RaisedButton
              label="Add course"
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

ViewCoursesHeader.propTypes = {

};

export default ViewCoursesHeader;
