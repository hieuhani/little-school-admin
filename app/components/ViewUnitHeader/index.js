import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import ViewIconTextField from '../ViewIconTextField';

import './styles.scss';

function ViewUnitHeader() {
  return (
    <div className="view-unit-header">
      <div className="row">
        <div className="col-md-3">
          <TextField
            hintText={<ViewIconTextField icon="search" text="Search vocabulary" />}
          />
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3 offset-3">
          <RaisedButton
            target="_blank"
            label="Add vocabulary"
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

ViewUnitHeader.propTypes = {

};

export default ViewUnitHeader;
