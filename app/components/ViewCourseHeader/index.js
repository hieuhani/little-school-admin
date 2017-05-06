import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import ViewIconTextField from '../ViewIconTextField';

import './styles.scss';

function ViewCourseHeader() {
  return (
    <div className="view-course-header">
      <div className="row">
        <div className="col-md-3">
          <TextField
            hintText={<ViewIconTextField icon="add" text="Search by unit name" />}
          />
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Add a new unit"
            icon={<FontIcon className="material-icons" color={white}>add</FontIcon>}
            style={{ float: 'right' }}
            backgroundColor={green500}
            labelColor={white}
          />
        </div>
      </div>
    </div>
  );
}

ViewCourseHeader.propTypes = {

};

export default ViewCourseHeader;
