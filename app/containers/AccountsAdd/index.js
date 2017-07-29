import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormAddAccount from '../../components/FormAddAccount';

import {
  createAccount,
} from './actions';
import {
  selectStatus,
  selectError,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

export class AccountsAdd extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(nextProps) {
    if (this.props.status === REQUEST_STATUS.REQUESTING && nextProps.status === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }
  closeForm() {
    browserHistory.push('/accounts');
    window.location.reload();
  }
  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Add new user" />}>
        <FormAddAccount
          onSubmit={(user) => this.props.createAccount(this.props.defaultSchool, user)}
          cancelAddAccount={this.closeForm}
          status={this.props.status}
          error={this.props.error}
        />
      </ViewDialog>
    );
  }
}

AccountsAdd.propTypes = {
  createAccount: PropTypes.func,
  status: PropTypes.number,
  defaultSchool: PropTypes.string,
  error: PropTypes.instanceOf(Immutable.Map),
};

const mapStateToProps = createStructuredSelector({
  status: selectStatus(),
  error: selectError(),
  defaultSchool: selectDefaultSchool(),
});

function mapDispatchToProps(dispatch) {
  return {
    createAccount: (schoolID, user) => dispatch(createAccount(schoolID, user)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsAdd);
