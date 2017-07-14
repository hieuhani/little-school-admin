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

function ViewUsersSelector({ users, handleSelectUser }) {
  return (
    <Table onRowSelection={handleSelectUser} multiSelectable>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.get('id')}>
            <TableRowColumn>{user.get('id')}</TableRowColumn>
            <TableRowColumn>{user.get('email')}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ViewUsersSelector.propTypes = {
  users: PropTypes.instanceOf(Immutable.List),
  handleSelectUser: PropTypes.func,
};

export default ViewUsersSelector;
