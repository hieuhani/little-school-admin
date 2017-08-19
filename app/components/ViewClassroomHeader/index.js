import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import './styles.scss';

function ViewClassroomHeader({ classID }) {
  return (
    <div className="view-classroom-header">
      <div className="row">
        <div className="col-md-8">
        </div>
        <div className="col-md-4 actions">
          <Link to={`/classes/${classID}/accounts/import`}>
            <RaisedButton
              label="Import accounts"
              icon={<FontIcon className="material-icons" color={white}>add</FontIcon>}
              style={{ float: 'right' }}
              backgroundColor={green500}
              labelColor={white}
            />
          </Link>
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
