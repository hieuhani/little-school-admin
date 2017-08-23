import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { REQUEST_STATUS } from 'global-constants';
import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ViewBottomToolbar from '../ViewBottomToolbar';
import ButtonFlat from '../ButtonFlat';

function ViewPreviewAccounts({ accounts, handleRowSelection, csvStatus, createAccountsStatus, cancelImport, createAccounts }) {
  return (
    <div>
      {accounts.size > 0 && <Table onRowSelection={handleRowSelection} multiSelectable>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Full name</TableHeaderColumn>
            <TableHeaderColumn>Birthday</TableHeaderColumn>
            <TableHeaderColumn>Real Class</TableHeaderColumn>
            <TableHeaderColumn>Parent Name</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={false}>
          {accounts.map((account, index) => (
            <TableRow key={index} selected={account.get('selected')}>
              <TableRowColumn>{account.get('full_name')}</TableRowColumn>
              <TableRowColumn>{account.get('birthday')}</TableRowColumn>
              <TableRowColumn>{account.get('class_text')}</TableRowColumn>
              <TableRowColumn>{account.get('parent_name')}</TableRowColumn>
              <TableRowColumn>{account.get('phone')}</TableRowColumn>
              <TableRowColumn>{account.get('email')}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>}
      <ViewBottomToolbar>
        <ButtonFlat
          label="Cancel"
          onClick={cancelImport}
          disabled={csvStatus === REQUEST_STATUS.REQUESTING || createAccountsStatus === REQUEST_STATUS.REQUESTING}
        />
        <Spacer />
        <ButtonFlat
          label="Create accounts"
          highlighted
          onClick={createAccounts}
          type="submit"
          loading={csvStatus === REQUEST_STATUS.REQUESTING || createAccountsStatus === REQUEST_STATUS.REQUESTING}
          disabled={csvStatus === REQUEST_STATUS.REQUESTING || createAccountsStatus === REQUEST_STATUS.REQUESTING || accounts.size === 0}
        />
      </ViewBottomToolbar>
    </div>
  );
}

const Spacer = styled.span`
  width: 12px;
`;

ViewPreviewAccounts.propTypes = {
  accounts: PropTypes.instanceOf(Immutable.List),
  handleRowSelection: PropTypes.func,
  cancelImport: PropTypes.func,
  createAccounts: PropTypes.func,
  csvStatus: PropTypes.number,
  createAccountsStatus: PropTypes.number,
};

export default ViewPreviewAccounts;
