import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import ViewDialog from '../../components/ViewDialog';
import ViewDialogHeader from '../../components/ViewDialogHeader';
import FormImportCsv from '../../components/FormImportCsv';
import ViewPreviewAccounts from '../../components/ViewPreviewAccounts';
import {
  selectDefaultSchool,
} from '../Dashboard/selectors';
import {
  uploadCsv,
  handleRowSelection,
  createAccounts,
} from './actions';
import {
  selectFile,
  selectAccounts,
  selectCSVUploadStatus,
} from './selectors';

export class AccountsImport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.createAccounts = () => {
      this.props.createAccounts(this.props.accounts.filter((account) => (account.get('selected'))));
    };
  }
  render() {
    return (
      <ViewDialog header={<ViewDialogHeader title="Import users" />}>
        <FormImportCsv handleFileDropped={(file) => this.props.uploadCsv(this.props.defaultSchool, file)} file={this.props.file} />
        <ViewPreviewAccounts
          accounts={this.props.accounts}
          handleRowSelection={this.props.handleRowSelection}
          csvStatus={this.props.csvStatus}
          cancelImport={() => browserHistory.push('/accounts')}
          createAccounts={this.createAccounts}
        />
      </ViewDialog>
    );
  }
}

AccountsImport.propTypes = {
  uploadCsv: PropTypes.func,
  handleRowSelection: PropTypes.func,
  createAccounts: PropTypes.func,
  defaultSchool: PropTypes.string,
  file: PropTypes.object,
  accounts: PropTypes.instanceOf(Immutable.List),
  csvStatus: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  defaultSchool: selectDefaultSchool(),
  file: selectFile(),
  accounts: selectAccounts(),
  csvStatus: selectCSVUploadStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    uploadCsv: (schoolID, file) => (dispatch(uploadCsv(schoolID, file))),
    handleRowSelection: (indexes) => (dispatch(handleRowSelection(indexes))),
    createAccounts: (accounts) => (dispatch(createAccounts(accounts))),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsImport);
