import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ViewStudyingClasses from '../ViewStudyingClasses';

function ViewTableAccounts({ accounts }) {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Username</TableHeaderColumn>
          <TableHeaderColumn>First Name</TableHeaderColumn>
          <TableHeaderColumn>Last Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Studying classes</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {accounts.map((account) => (
          <TableRow key={account.get('id')}>
            <TableRowColumn>
              {account.get('username')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('first_name')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('last_name')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('email')}
            </TableRowColumn>
            <TableRowColumn>
              <ViewStudyingClasses classrooms={account.get('classrooms')} />
            </TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ViewTableAccounts.propTypes = {
  accounts: PropTypes.instanceOf(Immutable.List),
};

export default ViewTableAccounts;
