import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

function ViewAccountsHeader() {
  return (
    <div className="view-courses-header">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-3" />
        <div className="col-md-3 offset-3">
          <Link to="/accounts/add">
            <RaisedButton
              label="Add new account"
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


export default ViewAccountsHeader;
