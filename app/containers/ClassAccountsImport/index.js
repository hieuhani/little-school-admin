import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import { REQUEST_STATUS } from 'global-constants';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormImportCsv from '../../components/FormImportCsv';
import ViewPreviewAccounts from '../../components/ViewPreviewAccounts';
import {
  uploadCsv,
  handleRowSelection,
  createAccounts,
} from './actions';
import {
  selectFile,
  selectAccounts,
  selectCSVUploadStatus,
  selectCreateAccountsStatus,
} from './selectors';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

export class ClassAccountsImport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.createAccounts = () => {
      this.props.createAccounts(this.props.defaultSchool, this.props.params.classID, this.props.accounts.filter((account) => (account.get('selected'))));
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.createAccountsStatus === REQUEST_STATUS.REQUESTING && nextProps.createAccountsStatus === REQUEST_STATUS.SUCCEEDED) {
      this.closeForm();
    }
  }

  closeForm() {
    browserHistory.push(`/classes/${this.props.params.classID}`);
    window.location.reload();
  }

  render() {
    return (
      <ViewDialog contentStyle={customContentStyle} header={<ViewDialogHeader title="Import users" />}>
        <FormImportCsv handleFileDropped={(file) => this.props.uploadCsv(this.props.defaultSchool, file)} file={this.props.file} />
        <ViewPreviewAccounts
          accounts={this.props.accounts}
          handleRowSelection={this.props.handleRowSelection}
          csvStatus={this.props.csvStatus}
          cancelImport={() => browserHistory.push('/accounts')}
          createAccounts={this.createAccounts}
          createAccountsStatus={this.props.createAccountsStatus}
        />
      </ViewDialog>
    );
  }
}

ClassAccountsImport.propTypes = {
  uploadCsv: PropTypes.func,
  handleRowSelection: PropTypes.func,
  createAccounts: PropTypes.func,
  defaultSchool: PropTypes.string,
  file: PropTypes.object,
  accounts: PropTypes.instanceOf(Immutable.List),
  csvStatus: PropTypes.number,
  createAccountsStatus: PropTypes.number,
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
  file: selectFile(),
  accounts: selectAccounts(),
  csvStatus: selectCSVUploadStatus(),
  createAccountsStatus: selectCreateAccountsStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    uploadCsv: (schoolID, file) => (dispatch(uploadCsv(schoolID, file))),
    handleRowSelection: (indexes) => (dispatch(handleRowSelection(indexes))),
    createAccounts: (schoolID, classID, accounts) => (dispatch(createAccounts(schoolID, classID, accounts))),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassAccountsImport);
