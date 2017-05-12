/**
*
* ViewCoursesHeader
*
*/

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import ViewIconTextField from '../ViewIconTextField';

import './styles.scss';

function ViewCoursesHeader() {
  return (
    <div className="view-courses-header">
      <div className="row">
        <div className="col-md-3">
          <TextField
            hintText={<ViewIconTextField icon="search" text="Search by course name" />}
          />
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <Link to="/courses/add">
            <RaisedButton
              target="_blank"
              label="Add a new course"
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
