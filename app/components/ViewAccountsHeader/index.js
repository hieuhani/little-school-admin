import React from 'react';
import PropTypes from 'prop-types';
import { REQUEST_STATUS } from 'global-constants';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { white, green500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';
import FormSearchUser from '../FormSearchUser';

const ErrorMessage = styled.p`
  color: #C62828;
  margin: 0;
  padding: 13px 0;
`;

function ViewAccountsHeader({ handleSearchUser, findStudentStatus }) {
  return (
    <div className="view-courses-header">
      <div className="row">
        <div className="col-md-3">
          <FormSearchUser onSubmit={(values) => handleSearchUser(values.get('username'))} />
        </div>
        <div className="col-md-3">
          {findStudentStatus === REQUEST_STATUS.FAILED && <ErrorMessage>
            This user is not exists
          </ErrorMessage>}
        </div>
        <div className="col-md-3 offset-3">
          <Link to="/accounts/add">
            <RaisedButton
              label="Create new account"
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

ViewAccountsHeader.propTypes = {
  handleSearchUser: PropTypes.func,
  findStudentStatus: PropTypes.number,
};

export default ViewAccountsHeader;
