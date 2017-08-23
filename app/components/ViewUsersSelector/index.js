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
          <TableHeaderColumn>Username</TableHeaderColumn>
          <TableHeaderColumn>Full Name</TableHeaderColumn>
          <TableHeaderColumn>Parent Name</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.get('id')}>
            <TableRowColumn>{user.get('username')}</TableRowColumn>
            <TableRowColumn>{user.get('full_name')}</TableRowColumn>
            <TableRowColumn>{user.get('parent_name')}</TableRowColumn>
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
