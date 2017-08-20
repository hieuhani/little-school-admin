import React from 'react';
import PropTypes from 'prop-types';
import { baseAPIEndpoint } from 'services/api';
import RaisedButton from 'material-ui/RaisedButton';
import { ACCESS_TOKEN_KEY } from 'config';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import './styles.scss';

function ViewClassroomHeader({ classID, schoolID }) {
  const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  const csvLink = `${baseAPIEndpoint}/api/manager/schools/${schoolID}/classes/${classID}/students/export?token=${token}`;
  return (
    <div className="view-classroom-header">
      <div className="row">
        <div className="col-md-12 actions">
          <a target="_blank" href={csvLink}>
            <RaisedButton
              label="Export students"
              icon={<FontIcon className="material-icons" color={white}>redo</FontIcon>}
              style={{ float: 'right' }}
              backgroundColor={green500}
              labelColor={white}
            />
          </a>
          <Link to={`/classes/${classID}/accounts/import`}>
            <RaisedButton
              label="Import accounts"
              icon={<FontIcon className="material-icons" color={white}>backup</FontIcon>}
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
  schoolID: PropTypes.string,
};

export default ViewClassroomHeader;
