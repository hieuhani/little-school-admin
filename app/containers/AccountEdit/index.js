import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { REQUEST_STATUS } from 'global-constants';
import { browserHistory } from 'react-router';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddAccount from '../../components/FormAddAccount';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';
import {
  selectUsers,
  selectStatus,
} from './selectors';
import {
  updateAccount,
} from './actions';

export class AccountEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
      window.location.reload();
    }
  }
  getActiveUser() {
    return this.props.users.find((user) => user.get('id') === _.toInteger(this.props.params.accountID));
  }
  closeForm() {
    browserHistory.push('/accounts');
  }
  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new user" />}>
        <FormAddAccount
          onSubmit={(user) => this.props.updateAccount(this.props.defaultSchool, this.props.params.accountID, user)}
          cancelAddAccount={this.closeForm}
          status={this.props.status}
          error={this.props.error}
          user={this.getActiveUser()}
          editMode
        />
      </ViewDialog>
    );
  }
}

AccountEdit.propTypes = {
  updateAccount: PropTypes.func,
  status: PropTypes.number,
  defaultSchool: PropTypes.string,
  params: PropTypes.object,
  error: PropTypes.instanceOf(Immutable.Map),
  users: PropTypes.instanceOf(Immutable.List),
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
  users: selectUsers(),
  status: selectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateAccount: (schoolID, userID, account) => dispatch(updateAccount(schoolID, userID, account)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountEdit);
