import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

function ViewClassroomHeader({ classID }) {
  return (
    <div className="view-courses-header">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <Link to={`/classes/${classID}/users/add`}>
            <RaisedButton
              label="Add student to this class"
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

ViewClassroomHeader.propTypes = {
  classID: PropTypes.string,
};

export default ViewClassroomHeader;
