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
import ActionCreate from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import ViewStudyingClasses from '../ViewStudyingClasses';

function ViewTableAccounts({ accounts }) {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Username</TableHeaderColumn>
          <TableHeaderColumn>Full Name</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Parent Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Real Class</TableHeaderColumn>
          <TableHeaderColumn>Studying classes</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {accounts.map((account) => (
          <TableRow key={account.get('id')} selectable={false}>
            <TableRowColumn>
              {account.get('username')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('full_name')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('phone')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('parent_name')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('email')}
            </TableRowColumn>
            <TableRowColumn>
              {account.get('class_text')}
            </TableRowColumn>
            <TableRowColumn>
              <ViewStudyingClasses classrooms={account.get('classrooms')} />
            </TableRowColumn>
            <TableRowColumn>
              <Link to={`/accounts/${account.get('id')}/edit`}>
                <IconButton>
                  <ActionCreate />
                </IconButton>
              </Link>
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
